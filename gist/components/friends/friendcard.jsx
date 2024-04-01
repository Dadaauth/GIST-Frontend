"use client";
import React from "react";
import Cookies from "js-cookie";
import {Divider, Card, CardBody, Link, Button, Tabs, Tab, User, Avatar, Textarea} from "@nextui-org/react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react"
import SendIcon from "@mui/icons-material/Send";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;
const static_content = process.env.NEXT_PUBLIC_STATIC_CONTENT_URL

export default function FriendCard (props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState("");
    const [convId, setConvId] = React.useState("");
    
    // Scroll to the last message in the message box
    const [lastMessageId, setLastMessageId] = React.useState(null);
    const messageContainerRef = React.useRef(null);
    const scrollToMessage = () => {
      if (messageContainerRef.current) {
        messageContainerRef.current.scrollTo({
          top: messageContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    };
    React.useEffect(() => {
      if (messages.length > 0) {
        scrollToMessage();
      }
    }, [messages]); // Run on changes to messages
    // Scroll to the last message in the message box


    async function openMessageClickHandler(friend_id) {
        // Check if a previous conversaton exists between the users
        let res = await fetch(`${backend_url}/v1.0/chatnotificationfeed/chat/create_conversation`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({'name': "chat", "participants": [friend_id]}),
            headers: {
                "Content-Type": "application/json",
                'X-CSRF-Token': Cookies.get("csrf_access_token")
            }
        });
        let r_json = await res.json();
        let conv_id = r_json.conversation_id;
        setConvId(conv_id);
        let conversation = await fetch(`${backend_url}/v1.0/chatnotificationfeed/chat/get_conversation/${conv_id}`, {
            method: "GET",
            credentials: "include",
        });
        let conv_j = await conversation.json()
        console.log(conv_j);
        setMessages(conv_j.messages);
        onOpen();
    }
    function onMessageChange(e) {
        let {name, value} = e.target;
        setMessage(value);
    }
    async function sendMessage(conv_id, message) {
        if (message.length == 0){
            return ;
        }
        const formDataToSend = new FormData();
        formDataToSend.append('message', message);
        formDataToSend.append("conversation_id", conv_id)
        let res = await fetch(`${backend_url}/v1.0/chatnotificationfeed/chat/create_message`, {
            method: "POST",
            credentials: "include",
            body: formDataToSend,
            headers: {
                'X-CSRF-Token': Cookies.get("csrf_access_token")
            }
        });
        let msg = await res.json();
        if (await res.ok){
            let temporary = [...messages, msg.msg]
            setLastMessageId(msg.msg.id)
            setMessages(temporary);
            setMessage("")
            scrollToMessage(); // Scroll to the new message
        }
    }
    return (
        <>
            <Card className="max-w-[400px] mb-5">
                <CardBody className="flex flex-row justify-between">
                    <User   
                        name={`${props.friend.first_name} ${props.friend.last_name}`}
                        description={(
                            <Link size="sm" isExternal>
                                @{props.friend.email}
                            </Link>
                        )}
                        avatarProps={{
                            src: props.friend.profile_pic_name ? `${static_content}/${props.friend.profile_pic_name}` : null,
                        }}
                    />
                    <Button
                        className="bg-transparent text-foreground border-default-200"
                        color="primary"
                        radius="full"
                        size="sm"
                        variant="bordered"
                        onClick={() => {openMessageClickHandler(props.friend.id)}}
                    >
                        Message
                    </Button>
                </CardBody>
            </Card>
            <Modal backdrop="blur" scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-row gap-1 items-center">
                            <Avatar className="h-12 w-12 text-tiny mr-4" showFallback name={props.friend.first_name} src={`${static_content}/${props.friend.profile_pic_name}`} />
                                {`${props.friend.first_name} ${props.friend.last_name}`}
                            </ModalHeader>
                            <ModalBody ref={messageContainerRef}>
                                {messages.map((message, index) => (
                                    <MessageCard key={index} message={message} />
                                ))}
                            </ModalBody>
                            <ModalFooter className="flex flex-row items-center">
                                <Textarea 
                                    autoFocus
                                    // variant="underlined"
                                    className="mt-3 font-serif text-slate-500 italic"
                                    placeholder="Collaboration is fun..."
                                    minRows={1}
                                    // endContent={<SendIcon />}
                                    name="message"
                                    value={message}
                                    onChange={onMessageChange}
                                />
                                <Button color="primary" onPress={() => {sendMessage(convId, message)}}>
                                    <SendIcon />
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

function MessageCard(props) {
    return (
        <>
            <div className="flex flex-row">
                <Avatar className="h-6 w-6 text-tiny" showFallback name={props.message.sender.first_name} src={`${static_content}/${props.message.sender.profile_pic_name}`} />
                <Card className="ml-3 outline-slate-800">
                    <CardBody>
                        {props.message.content}
                    </CardBody>
                </Card>
            </div>
        </>
    );
}
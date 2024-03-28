"use client";
import {Divider, Card, CardBody, Link, Button, Tabs, Tab, User, Avatar, Textarea} from "@nextui-org/react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react"
import SendIcon from "@mui/icons-material/Send";

export default function FriendCard (props) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
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
                            src: props.friend.profile_pic
                        }}
                    />
                    <Button
                        className="bg-transparent text-foreground border-default-200"
                        color="primary"
                        radius="full"
                        size="sm"
                        variant="bordered"
                        onClick={onOpen}
                    >
                        Message
                    </Button>
                </CardBody>
            </Card>
            <Modal backdrop="blur" scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {`${props.friend.first_name} ${props.friend.last_name}`}
                            </ModalHeader>
                            <ModalBody>
                                <MessageCard />
                                <Textarea 
                                    autoFocus
                                    // variant="underlined"
                                    className="mt-3 font-serif text-slate-500 italic"
                                    placeholder="Collaboration is fun..."
                                    minRows={1}
                                    endContent={<SendIcon />}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary">
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
                <Avatar className="h-6 w-6 text-tiny" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Card className="ml-3 outline-slate-800">
                    <CardBody>
                        This is my message to you fam
                    </CardBody>
                </Card>
            </div>
        </>
    );
}
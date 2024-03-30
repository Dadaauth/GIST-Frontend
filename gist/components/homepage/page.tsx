"use client"
import React from "react";
import Cookies from "js-cookie";
import {Button, Spacer, Divider} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import Posts from "./posts";
import OnlineFriends from "../general/online_friends";


const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;
const static_url = process.env.NEXT_PUBLIC_STATIC_CONTENT_URL;


export default function HomePageComponent({posts}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [postFormMessage, setPostFormMessage] = React.useState("")
    const [postFormData, setPostFormData] = React.useState({content: ""});
    const [postData, setPostData] = React.useState([{
		id: "",
		user: {
			first_name: "",
			last_name: "",
			email: "",
		},
		content: "",
		profile_img: "",
	}])
	const handlePostFormChange = (e) => {
        const {name, value} = e.target;
        setPostFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePostFormSubmit = async (e) => {
        const formDataToSend = new FormData();
        Object.entries(postFormData).forEach(([key, value])=> {
            formDataToSend.append(key, value);
        });

        const response = await fetch(`${backend_url}/v1.0/contentmanagement/posts/create_post`, {
            method: "POST",
            body: formDataToSend,
            credentials: "include",
            headers: {
                'X-CSRF-Token': Cookies.get("csrf_access_token")
            }
        })
        if (response.ok) {
            console.log(await response.json())
			setPostFormMessage("Post added successfully. This modal will close in 5s. Please reload the page to see your post.")
			setTimeout(onOpenChange, 5000)
        }
    }
    return (
        <>
            <section className="ml-2 sm:ml-16 mt-16 inline">
				<Button onPress={onOpen} className="inline" color="success" startContent={<TipsAndUpdatesIcon />} variant="ghost">
					Share your ideas...
				</Button>
				<div className="hidden md:block">
					<OnlineFriends aria-label="online friends" />
				</div>
				<div className="sm:max-w-[70%] flex flex-wrap">
				{posts.map((item, index) => (
					<Posts 
						key={item.id}
						username={`${item.user.first_name} ${item.user.last_name}`}
						email={item.user.email}
						content={item.content}
						profile_img={`${static_url}/${item.user.profile_pic_name}`}
					/>
				))}
				<Spacer x={2} />
				</div>
				<Modal backdrop="blur" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1">Share an Innovation..</ModalHeader>
								<ModalBody>
									{postFormMessage}
									<textarea onChange={handlePostFormChange} name="content" className="font-serif text-slate-500 italic w-full h-32 p-2 border border-gray-400 rounded" placeholder="Share your ideas..."></textarea>
								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="light" onPress={onClose}>
										Cancel
									</Button>
									<Button color="primary" onPress={handlePostFormSubmit}>
										Submit
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</section>
        </>
    );
}
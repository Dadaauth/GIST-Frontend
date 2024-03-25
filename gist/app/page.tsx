"use client"
import React from "react"
import {Button, Spacer, Divider} from "@nextui-org/react"
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

import "@/styles/globals.css"
import OnlineFriends from "@/components/general/online_friends";
import Posts from "@/components/homepage/posts";
import isAuthenticated from "@/utils/auth";

export default function Home() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [LoggedIn, setLoggedIn] = React.useState(false)
	React.useEffect(() => {
		const checkAuth = async () => {
			const loggedIn = await isAuthenticated();
			setLoggedIn(loggedIn);
		}
		checkAuth();
	}, []);
	if (!LoggedIn) return <>Please log in</>
	return (
		<>
			<section className="ml-2 sm:ml-16 mt-16 inline">
				<Button onPress={onOpen} className="inline" color="success" startContent={<TipsAndUpdatesIcon />} variant="ghost">
					Share your ideas...
				</Button>
				<div className="hidden md:block">
					<OnlineFriends />
				</div>
				<div className="sm:max-w-[70%] flex flex-wrap">
				<Posts 
					username="Zoey Lang"
					email="@zoeylang"
					content="I&apos;m a software developer and I&apos;m looking for a job. I have experience in React, Next.js, and Tailwind CSS. I&apos;m also familiar with TypeScript and GraphQL."
					hashtag="#innovation"
					profile_img="https://i.pravatar.cc/150?u=a042581f4e29026024d"
				/>
				<Spacer x={2} />
				</div>
				<Modal backdrop="blur" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader className="flex flex-col gap-1">Share an Innovation..</ModalHeader>
								<ModalBody>
									<textarea className="font-serif text-slate-500 italic w-full h-32 p-2 border border-gray-400 rounded" placeholder="Share your ideas..."></textarea>

								</ModalBody>
								<ModalFooter>
									<Button color="danger" variant="light" onPress={onClose}>
										Cancel
									</Button>
									<Button color="primary">
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
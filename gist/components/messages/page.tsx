"use client"
import { Button } from "@nextui-org/react"
import OnlineFriends from "@/components/general/online_friends";


import MessageCard from "./message_card";


export default function MessagesPageComponent() {
    return (
        <>
            <div className="sm:ml-20">
                <Button className="mb-5" variant="ghost" color="success">
                    New Message
                </Button>
                <MessageCard />
            </div>
            <div className="hidden md:block">
                <OnlineFriends />
            </div>
            
        </>
    );
}
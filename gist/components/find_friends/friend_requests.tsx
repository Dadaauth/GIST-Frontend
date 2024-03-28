"use client"
import React from "react";
import Cookies from "js-cookie";
import { Card, CardBody, Link, User, Button, Spacer } from "@nextui-org/react";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export default function FriendRequestsTab({friend_request}) {
    const [acceptStatus, setAcceptStatus] = React.useState("Accept")
    async function accept_friend_request(friend_id) {
        const res = await fetch(`${backend_url}/v1.0/usermanagement/friend/accept_friend`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({friend_id: friend_id}),
            headers: {
                'Content-Type': "application/json",
                'X-CSRF-Token': Cookies.get("csrf_access_token"),
            },
        });
        if (res.ok){
            console.log("Friend request accepted");
            setAcceptStatus("Accepted");
        }
    }
    // async function deny_friend_request(friend_id) {
            // Url not created yet on the backend. Confirm url before proceeding
    //     const res = await fetch(`${backend_url}/v1.0/usermanagement/friend/deny_friend`, {
    //         method: 'POST',
    //         credentials: "include",
    //         body: JSON.stringify({friend_id: friend_id}),
    //         headers: {
    //             'Content-Type': "application/json",
    //             'X-CSRF-Token': Cookies.get("csrf_access_token"),
    //         },
    //     });
    //     if (res.ok){
    //         console.log("Friend request denied");
    //     }
    // }
    return (
        <>
            <Card className="max-w-[400px] mb-5">
                <CardBody className="flex flex-row justify-between">
                    <User
                        name={`${friend_request.first_name} ${friend_request.last_name}`}
                        description={(
                            <Link size="sm" isExternal>
                            {friend_request.email}
                            </Link>
                        )}
                        avatarProps={{
                            src: `${friend_request.profile_pic}`
                        }}
                    />
                    <div className="flex flex-row">
                        <Button
                            className="bg-transparent text-foreground border-default-200"
                            color="primary"
                            radius="full"
                            size="sm"
                            variant="bordered"
                            onClick={() => accept_friend_request(friend_request.id)}
                        >
                            {acceptStatus}
                        </Button>
                        <Spacer x={2} />
                        <Button
                            className="bg-transparent text-foreground border-default-200"
                            color="primary"
                            radius="full"
                            size="sm"
                            variant="bordered"
                        >
                            Deny
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
"use client"
import React from "react";
import Cookies from "js-cookie";
import {Card, CardBody, User, Link, Button} from "@nextui-org/react";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export default function FindFriendsTab({user}) {
    const [requestStatus, setRequestStatus] = React.useState("Add")
    const [show, setShow] = React.useState(true)
    const [isDisabled, setIsDisabled] = React.useState(false)
    async function send_friend_request(friend_id) {
        const res = await fetch(`${backend_url}/v1.0/usermanagement/friend/add_friend`, {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify({friend_id: friend_id}),
            headers: {
                'Content-Type': "application/json",
                'X-CSRF-Token': Cookies.get("csrf_access_token"),
            },
        });
        if (res.ok){
            console.log("Friend request sent");
            setRequestStatus("Friend Request Sent");
            setIsDisabled(true);
            setTimeout(() => {setShow(false)}, 10000);
        }
    }
    return (
        <>
            {show?
                (<Card className="max-w-[400px] mb-5">
                    <CardBody className="flex flex-row justify-between">
                        <User   
                            name={`${user.first_name} ${user.last_name}`}
                            description={(
                                <Link size="sm" isExternal>
                                @{user.email}
                                </Link>
                            )}
                            avatarProps={{
                                src: user.profile_pic
                            }}
                        />
                        <Button
                            className="bg-transparent text-foreground border-default-200"
                            color="primary"
                            radius="full"
                            size="sm"
                            variant="bordered"
                            onClick={() => send_friend_request(user.id)}
                            isDisabled={isDisabled}
                        >
                            {requestStatus}
                        </Button>
                    </CardBody>
                </Card>) :
                ""
            }
        </>
    );
}
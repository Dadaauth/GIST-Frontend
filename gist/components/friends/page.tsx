"use client"
import React from "react";
import {Divider, Card, CardBody, Link, Button, Tabs, Tab, User} from "@nextui-org/react"

import FriendCard from "./friendcard";

export default function FriendsPageComponent(props) {
    return (
        <>
            <div className="sm:ml-20">
                <Tabs aria-label="Options">
                    <Tab key="friends" title="Friends">
                        {props.friends.map(friend => (
                            <FriendCard key={friend.id} friend={friend}/>
                        ))}
                    </Tab>
                    <Tab key="blocked_friends" title="Blocked Friends">
                        <Card className="max-w-[400px] mb-5">
                            <CardBody className="flex flex-row justify-between">
                                <User   
                                    name="Junior Garcia"
                                    description={(
                                        <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
                                        @jrgarciadev
                                        </Link>
                                    )}
                                    avatarProps={{
                                        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                                    }}
                                />
                                <Button
                                    className="bg-transparent text-foreground border-default-200"
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant="bordered"
                                >
                                    Unblock
                                </Button>
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
}
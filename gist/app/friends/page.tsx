"use client"
import {Divider, Card, CardBody, Link, Button, Tabs, Tab, User} from "@nextui-org/react"
import OnlineFriends from "@/components/general/online_friends";

export default function Friends() {
    return (
        <>
            <div className="sm:ml-20">
                <Tabs aria-label="Options">
                    <Tab key="friends" title="Friends">
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
                                    Message
                                </Button>
                            </CardBody>
                        </Card>
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
            <div className="hidden md:block">
                <OnlineFriends />
            </div>
        </>
    );
}
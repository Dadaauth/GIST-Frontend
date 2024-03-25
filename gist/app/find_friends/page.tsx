"use client"
import {User, Spacer, Link, Card, CardBody, Divider, Badge,Button} from "@nextui-org/react";
import {Tabs, Tab} from "@nextui-org/tabs"
import OnlineFriends from "@/components/general/online_friends";

export default function FindFriends() {
    return (
        <>
        <div className="sm:ml-20">
            <Tabs aria-label="Options">
                <Tab key="find_friends" title="Find Friends">
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
                                Add
                            </Button>
                        </CardBody>
                    </Card>
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
                                Add
                            </Button>
                        </CardBody>
                    </Card>
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
                                Add
                            </Button>
                        </CardBody>
                    </Card>
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
                                Add
                            </Button>
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="friend_requests" title={<Badge isInvisible={false} showOutline={false} size="lg" content={3} color="danger">Friend Requests&nbsp;&nbsp;&nbsp;</Badge>}>
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
                            <div className="flex flex-row">
                                <Button
                                    className="bg-transparent text-foreground border-default-200"
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant="bordered"
                                >
                                    Accept
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
                            <div className="flex flex-row">
                                <Button
                                    className="bg-transparent text-foreground border-default-200"
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant="bordered"
                                >
                                    Accept
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
                            <div className="flex flex-row">
                                <Button
                                    className="bg-transparent text-foreground border-default-200"
                                    color="primary"
                                    radius="full"
                                    size="sm"
                                    variant="bordered"
                                >
                                    Accept
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
                </Tab>
            </Tabs>
        </div>
        <div className="hidden md:block">
            <OnlineFriends />
        </div>
        </>
    );
}
"use client"
import {Button, Card, CardHeader, Link, Divider, CardBody, User, useDisclosure} from "@nextui-org/react";
import { Textarea, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/react";

import SendIcon from '@mui/icons-material/Send';

export default function MessageCard() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <Card className="max-w-[400px] mb-5">
                <CardHeader>
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
                </CardHeader>
                <Divider />
                <Link onPress={onOpen} className="cursor-pointer text-gray-300">
                    <CardBody className="flex flex-row justify-between">
                        <p>Hi, It&apos;s Micheal</p>
                        <div className="bg-green-700 flex justify-center h-5 w-5 rounded-full items-center">
                            <span className="text-xs">9+</span>
                        </div>
                    </CardBody>
                </Link>
            </Card>
            <Modal backdrop="blur" scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Micheal Robin</ModalHeader>
                            <ModalBody>
                                <div className="flex flex-row">
                                    <Avatar className="h-6 w-6 text-tiny" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <Card className="ml-3 outline-slate-800">
                                        <CardBody>
                                            This is my message to you fam
                                        </CardBody>
                                    </Card>
                                </div>
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
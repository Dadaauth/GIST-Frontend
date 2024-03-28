"use client"
import "@/styles/globals.css"
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";


export default function Posts(props) {
    let {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <Card className="max-w-[390px] ml-2 sm:ml-16 mt-5 space-y-5">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar isBordered radius="full" size="md" src={props.profile_img} />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{props.username}</h4>
                            <h5 className="text-small tracking-tight text-default-400">{props.email}</h5>
                        </div>
                    </div>
                    {/* <Button
                        className={}
                    ></Button> */}
                </CardHeader>
                <CardBody className="max-h-[7rem] px-3 py-0 text-small text-default-400">
                    <p>
                        {props.content}
                    </p>
                    {/* <span className="pt-2">
                        {props.hashtag}
                    </span> */}
                </CardBody>
                <CardFooter className="gap-3">
                    <Button color="success" variant="flat">
                        Like
                    </Button>
                    <Button color="warning" variant="flat">
                        Share
                    </Button>
                    <Button color="primary" variant="flat">
                        Comment
                    </Button>
                    <Button onPress={onOpen} color="success" variant="flat">
                        View
                    </Button>
                </CardFooter>
            </Card>
            <Modal backdrop="blur" scrollBehavior="inside" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{props.username}</ModalHeader>
                            <ModalBody>
                                <p>
                                    {props.content}
                                </p>
                                <span className="pt-2">
                                    {props.hashtag} 
                                </span>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary">
                                    Like
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
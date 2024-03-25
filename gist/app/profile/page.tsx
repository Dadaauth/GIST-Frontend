"use client"
import {Avatar, Divider, Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import OnlineFriends from "@/components/general/online_friends";

export default function Profile() {
    return (
        <>
            <div className="ml-5 sm:ml-20">
                <h1 className="text-2xl font-bold">Profile</h1>
                <Breadcrumbs className="my-3">
                    <BreadcrumbItem href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem href="/profile">Profile</BreadcrumbItem>
                    <BreadcrumbItem href="/profile">You</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex flex-col sm:flex-row items-center justify-start space-y-3 sm:space-x-6">
                    <Avatar isBordered className="mt-10 w-28 h-28 text-large"/>
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="text-large">Mohunshe Adams</h1>
                        <p className="text-blue-300">@adama.com</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <OnlineFriends />
            </div>
        </>
    );
}
import {Avatar, Divider } from "@nextui-org/react";

import OnlineFriends from "@/components/general/online_friends";
import checkAuthStatus from "@/utils/auth";
import BreadcrumbsWrapper from "../breadcrumb";

const static_url = process.env.NEXT_PUBLIC_STATIC_CONTENT_URL;

export default async function Profile() {
    let [loggedIn, currentUser] = await Promise.resolve(checkAuthStatus());
    if (!loggedIn) return <p>Please log in</p>
    currentUser = currentUser.user;
    return (
        <>
            <div className="ml-5 sm:ml-20">
                <h1 className="text-2xl font-bold">Profile</h1>
                <BreadcrumbsWrapper username="You"/>
                <div className="flex flex-col sm:flex-row items-center justify-start space-y-3 sm:space-x-6">
                    <Avatar isBordered className="mt-10 w-28 h-28 text-large" showFallback name={`${currentUser.first_name}`} src={`${static_url}/${currentUser.profile_pic_name}`}/>
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="text-large">{currentUser.first_name} {currentUser.last_name}</h1>
                        <p className="text-blue-300">{currentUser.email}</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <OnlineFriends />
            </div>
        </>
    );
}
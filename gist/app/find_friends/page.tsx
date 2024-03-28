"use server"
import OnlineFriends from "@/components/general/online_friends";
import FindFriendsComponent from "@/components/find_friends/page";
import {get_non_friends, get_friend_requests} from "./get_users";
import checkAuthStatus from "@/utils/auth";

export default async function FindFriends() {
    let [users, [loggedIn, currentUser]] = await Promise.all([get_non_friends(), checkAuthStatus()]);
    let friend_requests = await get_friend_requests();
    if (!loggedIn) return <>Please log in</>
    return (
        <>
        <div className="sm:ml-20">
            <FindFriendsComponent users={users} friend_requests={friend_requests}/>
        </div>
        <div className="hidden md:block">
            <OnlineFriends />
        </div>
        </>
    );
}
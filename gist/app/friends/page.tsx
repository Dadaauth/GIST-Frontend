
import OnlineFriends from "@/components/general/online_friends";
import FriendsPageComponent from "@/components/friends/page";
import checkAuthStatus from "@/utils/auth";
import getUserFriends from "./get_friends";

export default async function Friends() {
    let [[loggedIn, currentUser], friends] = await Promise.all([checkAuthStatus(), getUserFriends()]);
    if (!loggedIn) return <>Please log in</>
    return (
        <>
            <FriendsPageComponent friends={friends.friends}/>
            <div className="hidden md:block">
                <OnlineFriends />
            </div>
        </>
    );
}
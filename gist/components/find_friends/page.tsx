"use client"
import { Tabs, Tab, Badge } from "@nextui-org/react";

import FindFriendsTab from "./find_friends";
import FriendRequestsTab from "./friend_requests";

export default function FindFriendsComponent({users, friend_requests}) {
    return (
        <>
            <Tabs aria-label="Options">
                <Tab key="find_friends" title="Find Friends">
                    {users.map((user) => (
                        <FindFriendsTab key={user.id} user={user}/>
                    ))}
                </Tab>
                <Tab key="friend_requests" title={<Badge isInvisible={false} showOutline={false} size="lg" content={3} color="danger">Friend Requests&nbsp;&nbsp;&nbsp;</Badge>}>
                    {friend_requests.map((friend_req) => (
                        <FriendRequestsTab key={friend_req.id} friend_request={friend_req} />
                    ))}
                    {(friend_requests.length == 0)? <p>No friend requests found</p>: <></>}
                </Tab>
            </Tabs>
        </>
        );
}
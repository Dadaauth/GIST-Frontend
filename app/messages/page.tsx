
import MessagesPageComponent from "@/components/messages/page";
import { get_posts } from "../posts_operations";
import checkAuthStatus from "@/utils/auth";

export default async function Messages() {
    let [[loggedIn, currentUser], posts] = await Promise.all([checkAuthStatus(), get_posts()]);
	if (!loggedIn) return <>Please log in</>
    return (
        <>
            <MessagesPageComponent />
        </>
    );
}
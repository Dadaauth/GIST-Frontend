"use server"
import getAuthCookies from "@/utils/authcookies"

const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL

export default async function getUserFriends() {
    let res = await fetch(`${backend_url}/v1.0/usermanagement/friend/friends`, {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: await getAuthCookies(),
        }
    });
    return res.json();
}
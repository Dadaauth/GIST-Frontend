
import getAuthCookies from "@/utils/authcookies";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export default async function getUser(user_id) {
    let res = await fetch(`${backend_url}/v1.0/usermanagement/user/get_user/${user_id}`, {
        method: "GET",
        credentials: "include",
        headers: {
            Cookie: await getAuthCookies()
        }
    });
    if (res.ok)
        return await res.json()
    else
        return false
}
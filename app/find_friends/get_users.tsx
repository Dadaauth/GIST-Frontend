import getAuthCookies from "@/utils/authcookies";

const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;


export default async function get_all_users() {
    const res = await fetch(`${backend_url}/v1.0/usermanagement/user/all_users`, {
        method: 'GET',
        credentials: "include",
        headers: {
            Cookie: await getAuthCookies(),
        },
    });
    return res.json();
}

export async function get_non_friends() {
    const res = await fetch(`${backend_url}/v1.0/usermanagement/user/non_friends`, {
        method: 'GET',
        credentials: "include",
        headers: {
            Cookie: await getAuthCookies(),
        },
    });
    return res.json();
}

export async function get_friend_requests() {
    const res = await fetch(`${backend_url}/v1.0/usermanagement/friend/friend_requests`, {
        method: 'GET',
        credentials: "include",
        headers: {
            Cookie: await getAuthCookies(),
        },
    });
    let r_json = [];
    if(await res.ok)
        r_json = await res.json()
    return r_json;
}
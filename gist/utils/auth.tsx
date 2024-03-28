"use server"
import getAuthCookies from "./authcookies";


const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export default async function checkAuthStatus(){
	const response = await fetch(`${backend_url}/v1.0/usermanagement/auth/current_user`, {
        method: 'GET',
        credentials: 'include',
		headers: {
			Cookie: await getAuthCookies()
		},
	})
    let status = await response.ok;
    return [status, await response.json()];
}
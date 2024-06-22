"use server"
import getAuthCookies from "@/utils/authcookies";


const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL;

export async function get_posts() {
	const res = await fetch(`${backend_url}/v1.0/contentmanagement/posts/all_posts`, {
		method: 'GET',
		credentials: "include",
		headers: {
			Cookie: await getAuthCookies()
		}
	});
	return res.json();
}

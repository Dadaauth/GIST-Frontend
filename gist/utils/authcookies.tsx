"use server"
import { cookies } from "next/headers";

export default async function getAuthCookies() {
    const cookieStore = cookies();
    let access_token_cookie = cookieStore.get("access_token_cookie")
    let access_token_cookie_v = "";
    if (access_token_cookie != undefined) {
        access_token_cookie_v = access_token_cookie.value;
    }
    let csrf_access_token = cookieStore.get("csrf_access_token");
    let csrf_access_token_v = "";
    if (csrf_access_token != undefined) {
        csrf_access_token_v = csrf_access_token.value;
    }
    let cookiesHeader = `access_token_cookie=${access_token_cookie_v}; csrf_access_token=${csrf_access_token_v}`;
    return cookiesHeader;
}
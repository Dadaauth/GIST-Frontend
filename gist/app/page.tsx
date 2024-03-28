import "@/styles/globals.css"
import React from "react"

import { get_posts } from "./posts_operations";
import checkAuthStatus from "@/utils/auth";
import HomePageComponent from "@/components/homepage/page";



export default async function Home() {
	let [[loggedIn, currentUser], posts] = await Promise.all([checkAuthStatus(), get_posts()]);
	if (!loggedIn) return <>Please log in</>
	return (
		<>
			<HomePageComponent
				posts={posts.posts}
			/>
		</>
	);
}
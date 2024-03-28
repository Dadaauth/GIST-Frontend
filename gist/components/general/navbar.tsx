import "@/styles/globals.css"

import React from "react"

import checkAuthStatus from "@/utils/auth";
import NavCard from "./navbar/navcard";


export default async function GISTNavbar(){
	let [LoggedIn, currentUser] =  await Promise.resolve(checkAuthStatus());
	return (
		<>
			<NavCard LoggedIn={LoggedIn} currentUser={currentUser.user}/>
		</>
	);
}



import "@/styles/globals.css"

import React from "react"

import NavCard from "./navbar/navcard";


export default function GISTNavbar(props){
	return (
		<>
			<NavCard LoggedIn={props.loggedIn} currentUser={props.currentUser.user}/>
		</>
	);
}



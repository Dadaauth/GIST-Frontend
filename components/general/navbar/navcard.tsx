"use client"
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Avatar, Badge, useDisclosure} from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import AuthFormModal from './authForm';
import SearchBar from './searchbar';

const static_content = process.env.NEXT_PUBLIC_STATIC_CONTENT_URL;

export default function NavCard({LoggedIn, currentUser}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	const {isOpen: isOpen_1, onOpen: onOpen_1, onOpenChange: onOpenChange_1} = useDisclosure();
	const {isOpen: isOpen_2, onOpen: onOpen_2, onOpenChange: onOpenChange_2} = useDisclosure();
    return (
        <>
            <Navbar className="mt-4 ml-0" onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarBrand className="ml-0">
                        <CodeIcon className="inline-block mr-3"/>
                        <p className="font-bold text-inherit">GIST</p>
                    </NavbarBrand>
                </NavbarContent>
                { LoggedIn? (
                    <NavbarMidContent currentUser={currentUser}/> // Custom component, Component code below
                ): (
                    <p></p>
                )}
                <NavbarEndContent // Custom component component code below
                    LoggedIn={LoggedIn}
					currentUser={currentUser}
                    isMenuOpen={isMenuOpen}
                    onOpen_1={onOpen_1}
                    onOpen_2={onOpen_2}
                /> 
            </Navbar>
            <AuthFormModal 
                isOpen_1={isOpen_1}
                isOpen_2={isOpen_2}
                onOpen_1={onOpen_1}
                onOpenChange_1={onOpenChange_1}
                onOpen_2={onOpen_2}
                onOpenChange_2={onOpenChange_2}
            />
        </>
    );
}


function NavbarEndContent ({LoggedIn, isMenuOpen, currentUser, onOpen_1, onOpen_2}) {
	const logOut = async () => {
		const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL
		const response = await fetch(`${backend_url}/v1.0/usermanagement/auth/logout`, {
			method: "GET",
			credentials: "include"
		})
	}
	const menuItems = [
		{
			label: "Home",
			href: "/"
		},
		{
			label: "Profile",
			href: siteConfig.navMenuItems.find(item => item.label === "Profile").href
		},
		{
			label: "Messages",
			href: siteConfig.navMenuItems.find(item => item.label === "Messages").href
		},
		{
			label: "Find Friends",
			href: siteConfig.navMenuItems.find(item => item.label === "Find Friends").href
		},
		{
			label: "Friends",
			href: siteConfig.navMenuItems.find(item => item.label === "Friends").href
		},
		{
			label: "Settings",
			href: "#"
		},
		{
			label: "Help & Feedback",
			href: "#"
		},
		{
			label: "Log out",
			href: "#"
		}
	];
	return (
		<>
			<NavbarContent justify="end">
				{ LoggedIn? (
					<>
						<NavbarMenuToggle 
							aria-label={isMenuOpen ? "Close menu": "Open menu"}
							className="sm:hidden static left-0"
						/>
						<span className="hidden sm:block">
							<Badge color="success" content="1" className="hidden sm:flex">
								<Link color="foreground" href="#" className="hidden sm:inline-block">
									<NotificationsIcon className="hidden sm:block"/>
								</Link>
							</Badge>
						</span>
						<Avatar className="hidden sm:block" showFallback isBordered color="success" name={currentUser.first_name} src={`${static_content}/${currentUser.profile_pic_name}`} />
					</>
				):
				(<>
				<NavbarItem className="hidden sm:inline-block">
					<Link onPress={onOpen_1} href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} onPress={onOpen_2} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
				</>)
				}
			</NavbarContent>
			<NavbarMenu>
				<br></br>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item.label}-${index}`}>
						<Link className="w-full" href={item.href} size="lg">
							{item.label == "Log out"? <Button color="warning" variant="light" onClick={logOut}>Logout</Button> : item.label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</>
	);
}

function NavbarMidContent (props){
	const logOut = async () => {
		const backend_url = process.env.NEXT_PUBLIC_BACKEND_API_URL
		const response = await fetch(`${backend_url}/v1.0/usermanagement/auth/logout`, {
			method: "GET",
			credentials: "include"
		})
	}
	return (
		<NavbarContent justify="center">
			<NavbarItem>
				<SearchBar />
			</NavbarItem>
			<NavbarItem className="hidden sm:flex gap-4">
				{props.currentUser? 
				(<p>Welcome {props.currentUser.first_name}</p>):
				(<p></p>)
				}
				<Link color="foreground" href="/">
					Home
				</Link>
			</NavbarItem>
			<NavbarItem className="hidden sm:flex gap-4">
				<Link color="foreground" href={siteConfig.navItems.find(item => item.label === "Messages").href}>
					Messages
				</Link>
			</NavbarItem>
			<NavbarItem className="hidden sm:flex gap-4">
				<Link color="foreground" href={siteConfig.navItems.find(item => item.label === "Find Friends").href}>
					Find Friends
				</Link>
			</NavbarItem>
			<NavbarItem className="hidden sm:flex gap-4">
				<Link href={siteConfig.navItems.find(item => item.label === "Friends").href} color="foreground">
					Friends
				</Link>
			</NavbarItem>
			<NavbarItem className="hidden sm:flex gap-4">
				<Link color="foreground" href={siteConfig.navItems.find(item => item.label === "Profile").href}>
					Profile
				</Link>
			</NavbarItem>
			<NavbarItem className="hidden sm:flex gap-4">
				<Link color="warning" href={usePathname()}>
					<Button color="warning" variant="light" className="" onClick={logOut}>Logout</Button>
				</Link>
			</NavbarItem>
		</NavbarContent>
	);
}

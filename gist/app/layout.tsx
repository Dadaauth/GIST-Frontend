import "@/styles/globals.css";
import React from "react"
import { Metadata } from "next";
import {Divider} from "@nextui-org/react"
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import GISTNavbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div>
						<GISTNavbar />
						<Divider className="my-4" />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
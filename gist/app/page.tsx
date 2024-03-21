import "@/styles/globals.css"
import CodeIcon from '@mui/icons-material/Code';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem
} from "@nextui-org/navbar";
import {Input, Link, Button} from "@nextui-org/react";
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
	return (
		<Navbar shouldHideOnScroll>
			<NavbarBrand>
				<CodeIcon className="inline-block mr-3"/>
				<p className="font-bold text-inherit">GIST</p>
			</NavbarBrand>
			<NavbarContent className="" justify="center">
				<Input
					label="Search"
					isClearable
					classNames={{
						label: "text-black/50 dark:text-white/90",
						input: [
						  "bg-transparent",
						  "text-black/90 dark:text-white/90",
						  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
						],
						innerWrapper: "bg-transparent",
						inputWrapper: [
						  "shadow-xl",
						  "bg-default-200/50",
						  "dark:bg-default/60",
						  "backdrop-blur-xl",
						  "backdrop-saturate-200",
						  "hover:bg-default-200/70",
						  "dark:hover:bg-default/70",
						  "group-data-[focused=true]:bg-default-200/50",
						  "dark:group-data-[focused=true]:bg-default/60",
						  "!cursor-text",
						],
					}}			  
					placeholder="Search..."
					variant="bordered"
					className="max-w-xs"
					defaultValue="Innovation..."
					startContent={
						<SearchIcon />
					}
				/>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}

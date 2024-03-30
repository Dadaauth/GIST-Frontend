import React from "react";
import Cookies from "js-cookie";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Checkbox} from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import {MailIcon, LockIcon} from '@/components/general/icons';
import {Input, Link, Button} from "@nextui-org/react";

export default function AuthFormModal({onOpen_1, onOpenChange_1, onOpen_2, onOpenChange_2, isOpen_1, isOpen_2}) {
    const pathname = usePathname();
    const router = useRouter();
    const [signInFormMessage, setSignInFormMessage] = React.useState("");
	const [signUpFormMessage, setSignUpFormMessage] = React.useState("");
    const [signUpFormData, setSignUpFormData] = React.useState({
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		profile_pic: null
	});
    const handleSignUpChange = (e) => {
		const {name, value, type, files} = e.target
		setSignUpFormData((prevData) => ({
			...prevData,
			[name]: type === "file"? files[0]: value
		}));
	};
	const handleSignUpSubmit = async (e) => {        
		// e.preventDefault();
		try {
			const formDataToSend = new FormData();
			Object.entries(signUpFormData).forEach(([key, value])=> {
				formDataToSend.append(key, value);
			});
			const response = await fetch('http://127.0.0.1:5000/api/v1.0/usermanagement/auth/signup', {
				method: 'POST',
				body: formDataToSend,
                credentials: "include",
                headers: {
                    'X-CSRF-Token': Cookies.get("csrf_access_token")
                }
			});
			if (response.ok){
				onOpenChange_2();
				setSignInFormMessage("Sign up successful. Please login to continue");
				onOpen_1(); // Open the login modal
				setTimeout(() => {
					setSignInFormMessage("");
				}, 10000);
			} else {
				const data = await response.json();
				console.log("error:", data);
				setSignUpFormMessage("Error in sign up. Please try again. This is not your fault")
				setTimeout(() => {
					setSignUpFormMessage("");
				}, 10000);
			}
		} catch (error) {
			console.log("error submitting form:", error);
		}
	};
	const [signInFormData, setSignInFormData] = React.useState({
		email: "",
		password: ""
	});
	const handleSignInChange = (e) => {
		const {name, value} = e.target
		setSignInFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};
	const handleSignInSubmit = async (e) => {
		try {
			const response = await fetch('http://127.0.0.1:5000/api/v1.0/usermanagement/auth/login', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(signInFormData)
			});
			if (await response.ok) {
				// const data = await response.json();
				// router.push('/')
				// onOpenChange_1();
                console.log(await response.json())
                setSignInFormMessage("Login Successful! Please reload the page to continue");
                router.refresh();
			} else {
				let error = await response.json();
				console.log("error:", error);
				setSignInFormMessage("Error in login. Please try again. This is not your fault")
				setTimeout(() => {
					setSignInFormMessage("");
				}, 10000);
			}
		} catch (error) {}
	};
    return (
        <>
            <Modal
                isOpen={isOpen_1}
                onOpenChange={onOpenChange_1}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <p className="text-slate-500">{signInFormMessage}</p>
                                <Input
                                    autoFocus
                                    isRequired
                                    onChange={handleSignInChange}
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    name="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    isRequired
                                    onChange={handleSignInChange}
                                    name="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <Checkbox
                                    classNames={{
                                        label: "text-small",
                                    }}
                                >
                                    Remember me
                                </Checkbox>
                                <div className="flex py-2 px-1 justify-between">
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                    <Link color="primary" href="#" size="sm">
                                        Login as Anonymous
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                                </Button>
                                <Button color="primary" onPress={handleSignInSubmit}>
                                Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal
                isOpen={isOpen_2}
                onOpenChange={onOpenChange_2}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Signup</ModalHeader>
                            <ModalBody>
                                <p className="text-slate-500">{signUpFormMessage}</p>
                                <Input
                                    autoFocus
                                    isRequired
                                    onChange={handleSignUpChange}
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    name="email"
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    variant="bordered"
                                />
                                <Input
                                    isRequired
                                    onChange={handleSignUpChange}
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    name="password"
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <Input
                                    isRequired
                                    onChange={handleSignUpChange}
                                    name="first_name"
                                    label="First Name"
                                    placeholder="Enter your firstname"
                                    type="text"
                                    variant="bordered"
                                />
                                <Input
                                    isRequired
                                    onChange={handleSignUpChange}
                                    name="last_name"
                                    label="Last Name"
                                    placeholder="Enter your lastname"
                                    type="text"
                                    variant="bordered"
                                />
                                <Input
                                    onChange={handleSignUpChange}
                                    name="profile_pic"
                                    label="Profile Picture"
                                    placeholder="Choose your profile picture"
                                    type="file"
                                    accept="image/*"
                                />			
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={onClose}>
                                Close
                                </Button>
                                <Button color="primary" onPress={handleSignUpSubmit}>
                                Signup
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
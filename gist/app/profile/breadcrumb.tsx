"use client"
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react"


export default function BreadcrumbsWrapper(props) {
    return (
        <Breadcrumbs className="my-3">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/profile">Profile</BreadcrumbItem>
            <BreadcrumbItem href="/profile">{props.username}</BreadcrumbItem>
        </Breadcrumbs>
    );
}
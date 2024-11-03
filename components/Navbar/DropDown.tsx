"use client";
import { useEffect, useRef, useState } from "react";
import UserIcon from "../Icon/UserIcon";
import DropdownIcon from "../Icon/DropdownIcon";
import Link from "next/link";
import LogoutIcon from "../Icon/LogoutIcon";
import Cookies from 'js-cookie';
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "@/providers/SessionProvider";
import LoadingImage from "./loadingImage";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function DropDown() {
	const [dropDown, setDropDown] = useState<boolean>(false);
	const ref = useRef(null);
	const router = useRouter()
	const {session, status} =useSession()
	const pathName =usePathname()
	const t= useTranslations("stat_bar")
	useEffect(() => {
		console.log(session)
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event: MouseEvent) {
		  if (ref.current && !ref.current.contains(event.target)) {
			setDropDown(false)
		  }
		}
		// Bind the event listener
		typeof window !== "undefined"  && document.addEventListener("mousedown", handleClickOutside);
		return () => {
		  // Unbind the event listener on clean up
		  typeof window !== "undefined"  && document.removeEventListener("mousedown", handleClickOutside);
		};
	  }, [dropDown,status]);
	  const handleOut =()=>{
		Cookies.remove("gid", { path: '', domain: '.engonow.com' })
		Cookies.remove('sid', { path: '/', domain: '.engonow.com' })
		Cookies.remove('refresh_token', { path: '/', domain: '.engonow.com' })
		Cookies.remove('uid', { path: '/', domain: 'study.engonow.com' })
		location.reload()
		router.push("/")
		
	}
	return (
		<button
			className="w-fit relative h-fit flex flex-row gap-1 items-center cursor-pointer max-lg:hidden"
			ref={ref}
			onClick={() => setDropDown(!dropDown)}>
			<div className="h-8 w-8 object-fill overflow-hidden rounded-xl">
				{status =="authenticated" ? session && session.avatar?
				<LoadingImage
				height={100}
				width={100}
				filePath={session.avatar}
				style={""}
				/>: 
				<Image
					alt="avatar"
					src={"/photos/SunGlass.jpg"}
					height={100}
					width={100}
					className={""}
				/>
				:<></>}
			</div>
			<DropdownIcon height={4} width={4} color="black" />
			{
				<div
					
					className={`${dropDown ? "h-fit border py-4" : "h-0"} w-72 px-4 duration-100 bg-white 
					absolute top-[75px] -right-28 rounded-xl shadow-md shadow-gray-400 flex flex-col gap-4 overflow-hidden`}>
					{status =="authenticated" && 
					<div className="w-full h-fit flex flex-col justify-start items-start gap-2 text-sm">
						<div className="text-gray-500 w-full text-xl text-center font-semibold">
							{t("greeting")} <span className="text-red-500">{session && session.firstName}</span> 
						</div>
					</div>}

					<hr className="solid bg-gray-200 border-gray-200 border rounded-full"></hr>

					<div className="w-full h-fit flex flex-col justify-start items-start text-base">
						<Link
							href="/statistic"
							className="w-full hover:bg-primary p-2 flex items-center justify-start">
							{t("status")}
						</Link>
						<Link
							href="/profile"
							className="w-full hover:bg-primary p-2 flex items-center justify-start">
							{t("profile")}
						</Link>
						<div
							onClick={()=>handleOut()}
							className="w-full hover:bg-primary p-2 flex items-center justify-between">
							{t("logout")}
							<LogoutIcon height={6} width={6} color="black" />
						</div>
					</div>
				</div>
			}
		</button>
	);
}

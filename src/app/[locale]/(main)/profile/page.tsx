
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "@/providers/SessionProvider";
import CustomLoadingElement from "../../loading";
import { useTranslations } from "next-intl";

import ViewPayments from "./_view/viewPayments";
import ViewFiles from "./_view/viewFiles";

export default function Profile() {
	const t =useTranslations("profile")
	const {session, status} =useSession()
	const [view, setView] = useState<"payments"|"files">("payments");
	return (
		<>
			{status === "authenticated" && session ? 
			<div className="px-10 md:px-20 h-screen flex justify-center">
				<div className=" bg-white mt-32 animate-slide_in_up  
				rounded-3xl justify-center w-full  flex flex-col h-[calc(600px)] shadow-xl">
					<div className="flex gap-5 items-center justify-between bg-blue-500 p-20 rounded-tr-3xl rounded-tl-3xl w-full h-52">
						<div className="w-fit gap-5 items-center justify-center flex">
							<div className=" h-fit animate-pop flex flex-col items-center justify-center">
								{!session.image_url && (
									<div className="relative flex w-32 h-32 hover:cursor-pointer rounded-full overflow-hidden transition-all duration-500 cursor-pointer">
									<Image
										width={100}
										height={100}
										className="w-full h-full object-cover"
										alt="avatar"
										src={"/photos/SunGlass.jpg"}
									/>
									</div>
								)}
								{session.image_url && session  && (
									<div className="relative flex w-32 h-32 hover:cursor-pointer rounded-full overflow-hidden transition-all duration-300 cursor-pointer">
									<Image
										alt="avatar"
										src={session.image_url}
										width={100}
										height={100}
										className="w-full h-full object-cover"
									/>
									</div>
								)}
							</div>
							<div className="w-fit">
								{session != null ? 
									<div className="flex text-white flex-col w-fit">
										<div className=" w-full break-all font-extrabold text-3xl">
											{session && session.full_name ? session.full_name: "Không có thông tin!"}
										</div>
										<div className=" w-full break-all">
											{session && session.email ? session.email: "Tài khoản của bạn không sử dụng email!"}
										</div>
									</div> 
									: <>{t("no_user")}</>
								}
							</div>
						</div>
						<div className="w-fit text-white animate-pop">
							Số trang khả dụng:<br/> 
							<span className="text-2xl">
								{session ? session.student_balance +" trang"
								: t("no_info")}
							</span>
						</div>
					</div>
					<div className="flex flex-row w-full py-5 text-gray-700">
						<h1 onClick={()=>{
                            setView("payments")}}
						className="text-center"
							> Lịch sử thanh toán</h1>
						<div onClick={()=>{
                            setView("files")}}
						className="text-center"
							>Lịch sử in</div>
					</div>
					{view =="payments" && <ViewPayments/>}
					{view =="files" && <ViewFiles/>}
				</div>
			</div> :
			<div className="h-screen  w-screen">
				<CustomLoadingElement/>
			</div>
			}
		</>
	);
}

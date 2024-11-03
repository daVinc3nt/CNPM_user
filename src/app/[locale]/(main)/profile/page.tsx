"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiImageEditLine } from "react-icons/ri";
import { AnimatePresence, Variants, motion } from "framer-motion";
import Image from "next/image";
import { FaEye, FaRegEdit } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Aos from "@/components/aos";
import { useSession } from "@/providers/SessionProvider";
import CustomLoadingElement from "../../loading";
import { TiTick } from "react-icons/ti";
import { UpdateAccountPayload, UpdateAvatarPayload } from "@/engonow-library/interfaces";
import { AccountOperation } from "@/engonow-library/main";
import { toast } from "sonner";
import LoadingImage from "./component/loadingImage";
import { Session } from "inspector";
import { useTranslations } from "next-intl";
import Cookies from "js-cookie"
export default function Profile() {
	const {session, status} =useSession()
	const [avatar, setAvatar] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const [data, setData] = useState<UpdateAccountPayload>({});
	const [isEditing, setIsEditing] = useState(false);
	const [password, setPassword] = useState("Session.user.password");
	const [avatarUpload, setavatarUpload] = useState(null);
	const t =useTranslations("profile")
	const handleUpdateAvatar = async (e) => {
		const AccAction = new AccountOperation
		// AccAction.setLanguage(Cookies.get("NEXT_LOCALE"))
		const newAva: UpdateAvatarPayload = {
			avatar: e.target.files[0],
		};
		if(e.target.files[0].size > 1000000) {
			toast.warning("Vui lòng dùng hình ảnh nhỏ hơn 1mb!");
			e.target.value = "";
			return 
		 }
		console.log(session.id, newAva, "session.sid")
		const response = await AccAction.updateAvatar(session.id, newAva, "session.sid");
		console.log(newAva)
		console.log("response", response);
		// console.log(avatarUpload)
		if (response.success) {
		  // reloadData();
		  toast.success("Cập nhật ảnh đại diện thành công!")
		  setavatarUpload(null);
		  location.reload()
		} else {
			toast.warning(response.message)
		}
	  };
	const handleSaveClick = async () => {
		const x = "staff_id"
		const accAction = new AccountOperation()
		accAction.setLanguage(Cookies.get("NEXT_LOCALE"))
		const condition: UpdateAccountPayload = {
			username: data.username,
			firstName: data.firstName,
			lastName: data.lastName,
			phoneNumber: data.phoneNumber,
			dateOfBirth: data.dateOfBirth
		};
		console.log(condition)
		const  res= await accAction.update(session.id, condition, "session.sid")
		if (res.success)
		{
			toast.success(res.message)
			location.reload()
			setIsEditing(false)
		}
		else 
			toast.warning(res.message)
			console.log(res)
	  };
	useEffect(()=>{	
		console.log(status === "loading" && !session )
		console.log(status, status === "loading")
		console.log(session, !session)
		if(status ==="authenticated")
			{setData(session)}
	},[status,session])
	return (
		<>
			{status === "authenticated" && session ? 
			<div className="px-10 md:px-20 pb-10 mt-64 h-fit flex justify-center">
				<div className="-mt-32 z-10 right-0 w-1/3 h-fit left-0 mr-auto ml-auto animate-pop absolute flex flex-col items-center justify-center">
					{!session.avatar && (
						<div className="relative flex w-52 h-52 hover:cursor-pointer rounded-full overflow-hidden transition-all duration-500 cursor-pointer">
						<Image
							width={100}
							height={100}
							className="w-full h-full object-cover"
							alt="avatar"
							src={"/photos/SunGlass.jpg"}
						/>
						<label className="absolute w-full h-2/6 py-2.5 bottom-0 inset-x-0 bg-black/50 
						text-white text-2xl flex items-center hover:cursor-pointer justify-center 
						active:scale-150 transition-all ease-in-out duration-500">
							<RiImageEditLine />
							<input
							type="file"
							accept="image/png, image/jpg, image/jpeg"
							className="hidden"
							onChange={(e) => {
								handleUpdateAvatar(e)
							}}
							/>
						</label>
						</div>
					)}
					{session.avatar && session  && (
						<div className="relative flex w-52 h-52 hover:cursor-pointer rounded-full overflow-hidden transition-all duration-300 cursor-pointer">
						<LoadingImage
							filePath={session.avatar}
							width={100}
							height={100}
							style="w-full h-full object-cover"
						/>
						<label className="absolute w-full h-2/6 py-2.5 bottom-0 inset-x-0 bg-black/50 
						text-white text-2xl flex items-center hover:cursor-pointer justify-center active:scale-150 transition-all duration-300">
							<RiImageEditLine />
							<input
							type="file"
							className="hidden"
							accept=".jpg, .jpeg, .png"
							onChange={(e) => {
								handleUpdateAvatar(e)
							}}
							/>
						</label>
						</div>
					)}
					<div className="font-bold w-full flex justify-center items-center text-white text-xl md:text-3xl mt-5">
						{!isEditing ?
						<div>
							{session ? session.firstName +" "+session.lastName
							: t("no_info")}
						</div> :
						<div className="flex gap-5 justify-center items-center">
							<input
								className=" w-44 bg-transparent placeholder-gray-50 focus:outline-none border-b-2 border-white"
								type="text"
								placeholder={t("firstName")}
								onChange={(e) => {
									setData({ ...data, ["firstName"]: e.target.value });
								}
								}
							/>
							<input
								className="w-44 bg-transparent placeholder-gray-50 focus:outline-none border-b-2 border-white"
								type="text"
								placeholder={t("lastName")}
								onChange={(e) => {
									setData({ ...data, ["lastName"]: e.target.value });
								}
								}
							/>
						</div>}
					</div>
					{session.username && <div className="font-light text-center text-white mt-5 text-lg">
						{!isEditing ?
						<div>
							{session.username ? 
							"@"+session.username
							: "@username"}
						</div> :
						<input
							className="w-52 bg-transparent placeholder-gray-50 focus:outline-none border-b-2 border-white"
							type="text"
							onChange={(e) => {
								setData({ ...data, ["username"]: e.target.value });
							}
							}
						/>}
					</div>}
				</div>
				
				<div className=" bg-white  animate-slide_in_up  
				rounded-3xl justify-center w-full  h-[calc(600px)] shadow-xl">
					<div className="z-[100] relative bg-do_600 rounded-tr-3xl rounded-tl-3xl w-full h-52">
					{!isEditing ?
						<FaRegEdit size={50} 
							onClick={()=>setIsEditing(true)}
							className="absolute z-[100] right-5 top-5 text-white duration-200 ease-in active:scale-110"
						/> :
						<TiTick size={50} 
							onClick={()=>handleSaveClick()}
							className="absolute z-[100] right-5 top-5 text-white duration-200 ease-in active:scale-110"
						/>
					}
					</div>
					<div className="mt-10 right-0 left-0 mr-auto ml-auto 
					absolute w-full px-10 md:px-20 overflow-y-scroll">
						{session != null ? 
							<div className="flex flex-col gap-5 w-full md:w-1/3">
								<div id="order_id" className="bg-gray-100 p-3 rounded-xl shadow-inner w-full">
								<div className="font-bold text-base break-all ">
										Email
								</div>
								<div className="text-gray-500 w-full break-all">
									{data && session.email ? session.email: "Tài khoản của bạn không sử dụng email!"}
								</div>
								</div>
								<div id="order_id" className="bg-gray-100 p-3 rounded-xl shadow-inner w-full">
								<div className="font-bold text-base break-all ">
										{t("DOB")}
								</div>
								{isEditing ?	
									<input
										className="w-2/3 bg-transparent border-b-2 border-[#545e7b] text-black"
										type="date"
										onChange={(e) => {
											setData({ ...data, ["dateOfBirth"]: e.target.valueAsDate });
										}
										}
									/> :
									<div className="text-gray-500 w-full break-all">
										{data && session.dateOfBirth ? session.dateOfBirth
										: t("no_info")}
									</div>}
								</div>
								<div id="order_id" className="bg-gray-100 p-3 rounded-xl shadow-inner w-full">
								<div className="font-bold text-base break-all ">
										{t("phoneNumber")}
								</div>
								{isEditing ?	
									<input
										className="w-2/3 bg-transparent border-b-2 border-[#545e7b] text-black"
										type="number"
										value={data && data.phoneNumber}
										onChange={(e) => {
											const newForm = e.target.value;
											if (newForm.length >15)
												{
													toast.warning("Vui lòng nhập dưới 15 ký tự bạn nhé!")
													return
												}
											setData({ ...data, ["phoneNumber"]: e.target.value });
										}
										}
									/> :
									<div className="text-gray-500 w-full break-all">
										{session && session.phoneNumber ? session.phoneNumber
										: t("no_info")}
									</div>}
								</div>
							</div> 
							: <>{t("no_user")}</>
						}
					</div>
				</div>
			</div> :
			<div className="h-screen  w-screen">
				<CustomLoadingElement/>
			</div>
			}
		</>
	);
}

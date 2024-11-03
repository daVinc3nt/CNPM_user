"use client"
import { useState } from "react";
import EaseIn from "../AnimationWrapper/EaseIn";
import SlideIn from "../AnimationWrapper/SlideIn";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface Props {
	title: string;
	description: string;
	bg: string;
	path: string;
	redirecting?: boolean;
}

export default function CourseCard({redirecting = true, title, description, bg, path }: Props) {
	const t = useTranslations()
	const [btn, setBtn] =useState(t("do_test_now"))
	const navigate = () => {
		setBtn("Đang chuyển hướng...")
		if (path != "") {
			window.open(path, "_self");
		}
	};

	return (
		<SlideIn
			direction="right2left"
			whileHover={{ y: -10 }}
			className="w-full h-fit">
			<div
				onClick={()=>{redirecting && navigate()}}
				className="w-full h-fit py-5 rounded-lg overflow-hidden shadow-md group">
				<div
					style={{ backgroundImage: `url(${bg})` }}
					className={`w-full bg-no-repeat bg-center bg-cover h-36 p-4`}></div>
				<div className="w-full h-1/2 p-4 flex flex-col justify-between">
					<EaseIn delay={0.1}>
						<div className="text-xl font-semibold group-hover:text-red-600 duration-200">
							{title}
						</div>
					</EaseIn>
					{ description != "" && <EaseIn className="w-full mt-10 h-20" delay={0.2}>
						<div className="w-full leading-5 h-fit text-sm overflow-hidden">
							{description}
						</div>
					</EaseIn>}
					{
					redirecting && 
					<button className="w-full mt-5 h-8 bg-white rounded-lg hover:bg-do_600 hover:text-white shadow-sm">
						{btn}
					</button>
					}
					{/* {!redirecting && 
					<div className="w-full mt-5 text-center rounded-lg bg-do_600 text-white shadow-sm">
						by ENGONOW
					</div>} */}
				</div>
			</div>
		</SlideIn>
	);
}

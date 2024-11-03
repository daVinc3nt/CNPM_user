import Image from "next/image";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface UserInfor {
	src?: string;
	rate: number[];
	skill: string;
    link?:string
}

export default function Progress({ src, rate, skill ,  link}: UserInfor) {
	const percent = Math.round((rate[0] / rate[1]) * 100);
	const t =useTranslations("performance")
    const router =useRouter()
    const [click, setClick] =useState(false)
	const props = {
		percent: percent, // is require
		colorSlice: "#ea2b2b",
		colorCircle: "#e5e7eb",
		fontColor: "#365b74",
		fontSize: "25px",
		fontWeight: 700,
		size: 60,
		stroke: 10,
		strokeBottom: 5,
		speed: 60,
		cut: 0,
		rotation: -90,
		opacity: 10,
		fill: "transparent",
		unit: "%",
		textPosition: "0.35em",
		animationOff: false,
		strokeDasharray: "0px",
		inverse: false,
		round: true,
		number: true,
		linearGradient: ["#ea2b2b"],
	};

	return (
		<div
        onClick={()=>{
            router.replace(link)
            setClick(true)
        }}
        className={`w-full h-fit  rounded-xl bg-white  flex flex-col p-4 active:scale-110 duration-100`}>
			<div className="flex flex-row items-center justify-between">
				{src && <Image
					src={src}
					className="size-14 h-full"
					alt={skill}
					style={{ objectFit: "contain" }}
					width={60}
					height={60}
					priority
					unoptimized
				/>}
				<CircularProgressBar {...props} />
			</div>
			{
            <div className={` flex flex-col border border-neutral-00 w-fit px-2 rounded-full `}>
				<span className="text-neutral-400 font-bold text-sm">{click? "Reaching":skill}</span>
			</div>}
		</div>
	);
}

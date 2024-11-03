"use client"
import { useState } from "react";
import EaseIn from "../AnimationWrapper/EaseIn";
import SlideIn from "../AnimationWrapper/SlideIn";
import Link from "next/link";
import CustomDropdown from "../Common/Dropdown";
import { useTranslations } from "next-intl";

interface Props {
	title: string;
	path: string;
	Icon: React.ElementType;
	bg: string;
	timeLimit: number
}

export default function SkillCard({ title, path, bg, timeLimit }: Props) {
	const t = useTranslations("score")
	const [btn, setBtn] =useState(t("do_test_now"))
	const [time,setTime] = useState(40)
	const navigate = () => {
		setBtn(t("directing"))
		if (path != "") {
			window.open(path+ `/${timeLimit? Math.round(timeLimit/60) : time}`, "_self");
		}
	};

	return (
		<SlideIn
			direction="right2left"
			whileHover={{ y: -10 }}
			className="w-full h-fit">
			<div
				onClick={navigate}
				className="w-full bg-white h-96 pb-5 rounded-lg overflow-hidden group">
				<div
					style={{ backgroundImage: `url(${bg})` }}
					className={`w-full bg-no-repeat bg-cover h-1/2 p-4`}></div>
				<div className="w-full h-1/2 p-4 flex flex-col justify-between">
					<EaseIn delay={0.1}>
						<h2 className="text-do_600 duration-200">
							{title}
						</h2>
					</EaseIn>
					{!timeLimit ? <CustomDropdown
						label={t("pickTime")}
						options={[20, 30, 40, 50, 60, 70, 80, 90]}
						selectedOption={`${time} phút`}
						onSelectOption={(value) => {
							setTime(value);
						}}
					/>: 
					<div>
						{t('restrict', {time: `${Math.round(timeLimit/60)}`})}
					</div>}
					<button className="w-full mt-5 h-8 ring-1 ring-gray-200 rounded-lg bg-do_600 text-white">
						{btn}
					</button>
				</div>
			</div>
		</SlideIn>
	);
}

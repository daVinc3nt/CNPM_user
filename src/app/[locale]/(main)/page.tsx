"use client";
import Image from "next/image";
import Aos from "@/components/aos";
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {useTranslations} from 'next-intl';
type Props = {
	params: {locale: string};
  };
export default function Home({params: {locale}}: Props) {
	const here = useRef(null);
	const t = useTranslations('home');
	
	return (
		<>
		<Aos/>
		{/* {status == "unauthenticated" && open && <SignInPopUp setOpen={setOpen}/>} */}
		<div className=" h-fit overflow-x-hidden">
			{/* {t('title')} */}

			<div className="relative w-full px-20 flex items-center h-screen bg-[#0259BC]">
				<div className="absolute w-1/2 h-0 right-0 
					border-l-[10vw] border-l-transparent
					border-b-[100vh] border-b-white
					">
				</div>
				<div
					className="absolute right-128 top-52 w-44 h-44 rounded-full 
					bg-white border shadow-lg flex flex-col justify-center"
					data-aos="fade-right"
				>
					<Image src="/photos/Printer.png" 
						alt="Printer" width={300} height={300} />
				</div>
				<div
					className="absolute w-60 h-60 rounded-full border-[3px] border-dashed 
					bottom-[20vh] right-[10vh] grid place-items-center"
					data-aos="fade-right"
				>
					<Image src="/photos/hcmut.jpg"
					className="w-52 h-52 brightness-75 rounded-full shadow-lg " 
					alt="hcmut" width={300} height={300} />
					<div
						className="absolute w-40 h-40 rounded-full 
						border-[5px]
						"
					/>
				</div>

				<div 
					className="absolute place-items-start w-4/5 md:w-2/5 flex flex-col md:flex gap-5 md:gap-5"
					data-aos="fade-left"
				>
					<div className="text-5xl  w-full font-extrabold "> 
						<span className=" w-full text-center font-extrabold text-white">
							Cung cấp dịch vụ in ấn tức thì cho sinh viên
						</span>
					</div>
					<span className="w-20 rounded-full border-b-[5px] border-b-white"/>
					<span className=" w-full font-light text-white">
							Nhanh chóng, chính xác, kịp thời
					</span>
					<button 
						className="w-fit px-8 py-2 rounded-2xl active:scale-125 text-black duration-300 bg-yellow-300"
						onClick={() => here.current?.scrollIntoView({
							behavior: 'smooth'
							}) }
						data-aos="fade-up"
					>
						In ngay thôi
					</button>
				</div>			
			</div>
			
		</div>
		</>
		
	);
}

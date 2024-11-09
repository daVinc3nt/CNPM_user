"use client";
import EaseIn from "@/components/AnimationWrapper/EaseIn";
import CourseCard from "@/components/Card/CourseCard";
import Image from "next/image";
import Aos from "@/components/aos";
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from "react";
import {Swiper,SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Zigzag from "@/components/Zigzag/zigzag";
import { testimonials } from "@/data";
import {useTranslations} from 'next-intl';
import { event } from "jquery";

export default function Home() {
	const [value, setValue] = useState(1);
	const file = useState([])
	const [fromPage, setFromPage] = useState(1)
	const [toPage, setToPage] = useState(1)
	const [isOpenPreview, setIsOpenPreview] = useState(false);
	const [scale, setScale] = useState(false);
	const increaseValue = () => {
		setValue(prevValue => prevValue + 1);
	};

	const decreaseValue = () => {
		setValue(prevValue => (prevValue > 1 ? prevValue - 1 : 1));
	};

	const handleToggle = () => {
		setIsOpenPreview(!isOpenPreview);
	};
	return (
		<>
		{/* {status == "unauthenticated" && open && <SignInPopUp setOpen={setOpen}/>} */}
		<div className=" h-fit overflow-x-hidden flex flex-row">
			{/* {t('title')} */}
			<div className="relative w-1/3 h-screen flex items-center bg-[#373839]">
			</div>
			<div className="relative overflow-y-hidden p-5 w-2/3 h-screen flex flex-col space-y-7 text-white bg-[#26282A]">
				<div className="w-full bg-[#2D3032]">
					<div className="w-full flex flex-row justify-between p-2 px-7">
						<div className="self-start">Printer</div>
						<div className="flex justify-end ">
							<div>LBP3000</div>
							<div className="flex flex-col items-center justify-center space-y-1 pl-2">
								<button className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7-7-7 7"/>
									</svg>
								</button>
								<button className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7 7 7-7"/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div className="border-b-2 border-solid border-[#D1D2D2] mx-5"></div>

					<div className="w-full flex flex-row justify-between p-2 px-7">
					<div className="self-start">Preset</div>
						<div className="flex justify-end ">
							<div>Default Settings</div>
							<div className="flex flex-col items-center justify-center space-y-1 pl-2">
								<button className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7-7-7 7"/>
									</svg>
								</button>
								<button className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7 7 7-7"/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full bg-[#2D3032]">
					<div  className="w-full flex flex-row justify-between p-2 px-7">
						<div className="self-start">Copies</div>
						<div className="flex justify-end items-center">
							<input
								type="number"
								value={value}
								min={1}
								onChange={(e) => setValue(() => Number(e.target.value) > 1 ? Number(e.target.value) : 1)}
								className="text-center w-16 h-5 focus:outline-none bg-[#393A3D] items-end"
							/>
							<div className="flex flex-col items-center justify-center space-y-1 pl-2">
								<button onClick={increaseValue} className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7-7-7 7"/>
									</svg>
								</button>
								<button onClick={decreaseValue} className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7 7 7-7"/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					<div className="border-b-2 border-solid border-[#D1D2D2] mx-5"></div>

					<div className="w-full flex flex-col justify-between p-2 px-7">
						<div>Pages</div>
						<div className="flex flex-col px-5 py-1">
							<div>
								<input className="accent-[#1D60D1]" type="radio" id="all" name="page" defaultChecked/>
								<label htmlFor="all" className="px-3">All {`${file.length}`} Pages</label>
							</div>
							<div>
								<input className="accent-[#1D60D1]" type="radio" id="preview" name="page" />
								<label htmlFor="preview" className="px-3">Selection in Preview</label>
							</div>
							<div>
								<input className="accent-[#1D60D1]" type="radio" id="range" name="page" />
								<label htmlFor="range" className="px-3">Range from <input type="number" value={fromPage} min={1} max={toPage}
								onChange={(e) => setFromPage(() => Number(e.target.value) > toPage ? toPage : Number(e.target.value) > 1 ?  Number(e.target.value): 1)}
								className="text-center w-16 h-5 mx-3 focus:outline-none bg-[#393A3D] items-end"/>
								to <input type="number" value={toPage} min={fromPage}
								onChange={(e) => setToPage(() => Number(e.target.value) >= fromPage ? Number(e.target.value) : fromPage)}
								className="text-center w-16 h-5 mx-3 focus:outline-none bg-[#393A3D] items-end"/>
								</label>
							</div>
							<div>
								<input className="accent-[#1D60D1]" type="radio" id="optional" name="page"/>
								<label htmlFor="optional" className="px-3">Selection <div className="ml-6 h-0 text-xs text-[#6E7071]">Select pages from the side bar</div></label>
							</div>
						</div>
					</div>

					<div className="border-b-2 border-solid border-[#D1D2D2] mx-5"></div>

					<div className="w-full flex flex-row justify-between p-2 px-7">
						<div className="self-start">Paper Size</div>
						<div className="flex justify-end ">
							<div className="flex flex-row items-center">A4 <div className="ml-1 text-xs text-[#6E7071] self-end">210 by 297 mm</div></div>
							<div className="flex flex-col items-center justify-center space-y-1 pl-2">
								<button onClick={increaseValue} className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7-7-7 7"/>
									</svg>
								</button>
								<button onClick={decreaseValue} className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
									<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7 7 7-7"/>
									</svg>
								</button>
						</div>
						</div>
					</div>

					<div className="border-b-2 border-solid border-[#D1D2D2] mx-5"></div>

					<div className="w-full flex flex-row justify-between p-2 px-7">
						<div className="self-start">Orientation</div>
						<div className="flex justify-end ">
							<div className="flex flex-row">
							<input className="accent-[#1D60D1]" type="radio" id="portrait" name="orientation" defaultChecked/>
							<label htmlFor="portrait" className="px-3 flex flex-row items-center">
								<Image className="mr-2" src={"/photos/orientation.png"} width={0} height={0} style={{width:"15px", height: "17px"}} alt="none"/>
								Portrait</label>
							</div>
							<div>
								<div className="flex flex-row">
								<input className="accent-[#1D60D1]" type="radio" id="landscape" name="orientation"/>
								<label htmlFor="landscape" className="px-3 flex flex-row items-center">
									<Image className="mr-2 rotate-90" src={"/photos/orientation.png"} width={0} height={0} style={{width:"15px", height: "17px"}} alt="none"/>
									Landscape</label>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className=" text-white w-full rounded-md">
					<button
						onClick={handleToggle}
						className="flex items-center focus:outline-none w-full"
					>
						<span className={`transform transition-transform ${isOpenPreview ? 'rotate-90' : ''}`}>
						►
						</span>
						<span className="ml-2 font-semibold">Preview</span>
					</button>
					
					{isOpenPreview && (
						<div className="bg-[#2D3032] p-2 rounded-lg text-white w-full">
						<div className="flex justify-around">
						  <div className="">
							<label className="flex items-center space-x-2">
							  <input type="checkbox" className="form-checkbox accent-[#267AFE]" />
							  <span>Auto Rotate</span>
							</label>
				  
							<label className="flex items-center space-x-2">
							  <input type="radio" name="scaleOption" className="form-radio accent-[#267AFE]" defaultChecked/>
							  <span>Scale</span>
							</label>
				  
							<label className="flex items-center space-x-2">
							  <input type="radio" name="scaleOption" className="form-radio accent-[#267AFE]"/>
							  <span>Scale to Fit:</span>
							</label>
							<div className="h-7"></div>
							<div className="flex items-center space-x-2">
							  	<span>Copies per page:</span>
							</div>
						  </div>
				  
						  <div className="">
							<label className="flex items-center space-x-2">
							  <input type="checkbox" className="form-checkbox accent-[#267AFE]" />
							  <span>Show Notes</span>
							</label>

							<div className="flex items-center space-x-2">
							<input
									type="number"
									className="text-center w-16 h-5 focus:outline-none bg-[#393A3D] items-end"
								/>
							</div>
				  
							<label className="flex items-center space-x-2">
							  <input type="radio" name="printOption" className="form-radio accent-[#267AFE]" defaultChecked />
							  <span>Print Entire Image</span>
							</label>
				  
							<label className="flex items-center space-x-2">
							  <input type="radio" name="printOption" className="form-radio accent-[#267AFE]"/>
							  <span>Fill Entire Paper</span>
							</label>

							<div className="flex items-center">
							  	<input
									type="number"
									value={value}
									min={1}
									onChange={(e) => setValue(() => Number(e.target.value) > 1 ? Number(e.target.value) : 1)}
									className="text-center w-16 h-5 focus:outline-none bg-[#393A3D] items-end"
								/>
								<div className="flex flex-col items-center justify-center space-y-1 pl-2">
									<button onClick={increaseValue} className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7-7-7 7"/>
										</svg>
									</button>
									<button onClick={decreaseValue} className="bg-[#AAABAC] hover:bg-[#DDDDDD] focus:outline-none flex items-center justify-center">
										<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7 7 7-7"/>
										</svg>
									</button>
								</div>
							</div>
						  </div>
						</div>
					  </div>
					)}
					</div>
			</div>
		</div>
		</>
		
	);
}
function setSelectedOption(value: any) {
	throw new Error("Function not implemented.");
}


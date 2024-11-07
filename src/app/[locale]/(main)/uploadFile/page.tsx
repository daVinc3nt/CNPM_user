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

type Props = {
	params: {locale: string};
  };
export default function Home({params: {locale}}: Props) {
	const here = useRef(null);
	const t = useTranslations('home');
	const [files, setFiles] = useState([]);
	const fileInputRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);

	const handleFileUpload = (uploadedFiles) => {
		const filesWithProgress = Array.from(uploadedFiles).map((file) => ({
		file,
		progress: 0,
		status: "Uploading...",
		}));
		setFiles((prevFiles) => [...prevFiles, ...filesWithProgress]);
		startUpload(filesWithProgress);
		// Clear the file input to allow re-uploading the same file
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const startUpload = (filesToUpload) => {
		filesToUpload.forEach((fileObj) => {
		// Simulate upload progress
		const interval = setInterval(() => {
			setFiles((currentFiles) =>
			currentFiles.map((f) =>
				f.file === fileObj.file
				? { ...f, progress: Math.min(f.progress + 20, 100) }
				: f
			)
			);
		}, 200);

		setTimeout(() => {
			clearInterval(interval);
			setFiles((currentFiles) =>
			currentFiles.map((f) =>
				f.file === fileObj.file ? { ...f, progress: 100, status: "Completed" } : f
			)
			);
		}, 1000 + Math.random() * 2000);
		});
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(true);
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragging(false);
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
		handleFileUpload(e.dataTransfer.files);
		e.dataTransfer.clearData();
		}
	};
	const handleRemoveFile = (fileToRemove) => {
		setFiles((currentFiles) => currentFiles.filter((f) => f.file !== fileToRemove));
		
	};
	const calculation = (fileObj)=>{
		let fileCur = fileObj.file.size * fileObj.progress / 100000
		return fileCur
	}
	// Helper function to determine the file icon based on file extension
	const getFileIcon = (fileName) => {
		const extension = fileName.split(".").pop().toLowerCase();
		switch (extension) {
		case "pdf":
			return "/photos/pdf-icon.png"; // Path to PDF icon
		case "doc":
		case "docx":
			return "/photos/doc-icon.png"; // Path to Word icon
		case "jpg":
		case "jpeg":
		case "png":
		case "gif":
			return "/photos/png-icon.png"; // Path to Image icon
		case "xls":
		case "xlsx":
			return "/photos/excel-icon.png"; // Path to Excel icon
		default:
			return "/photos/file-icon.png"; // Default icon for other file types
		}
	};
	return (
		<>
		<Aos/>
		{/* {status == "unauthenticated" && open && <SignInPopUp setOpen={setOpen}/>} */}
		<div className=" h-fit overflow-x-hidden">
			{/* {t('title')} */}

			<div className="relative w-full px-20 flex items-center h-screen bg-[#0259BC]">
				<Image src="/photos/Vector13.png" alt="Bg" width={9999} height={9999} 
					className="absolute bottom-0 left-0"
				/>
				<Image src="/photos/Vector14.png" alt="Bg" width={9999} height={9999} 
					className="absolute bottom-0 left-0"
				/>
				{/* <div className="absolute w-1/2 h-0 right-0 
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
				</div> */}

				<div 
					className="absolute place-items-start w-4/5 md:w-2/5 flex flex-col md:flex gap-5 md:gap-5"
					data-aos="fade-left"
				>
					<div className="text-5xl  w-full font-exdivbold "> 
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

			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div className="relative bg-white p-6 rounded-3xl w-full max-w-md mx-auto mt-8 " data-aos="fade-up">
					<button className="absolute top-3.5 right-3.5" >
						<Image src="/photos/x.png" 
								alt="Cloud" width={20} height={20}/>
					</button>
					
					<div className="flex flex-row border-b-2 border-b-solid border-b-[#CBD0DC] mb-5">
						<div className="justify-items-center content-center" style={{width: "40px", height: "40px", border: "1px solid #000", borderRadius: '100%'}}>
							<Image src="/photos/cloud-add.png" 
								alt="Cloud" width={30} height={30}/>
						</div>
						<div className="ml-5">
							<p className="text-[17px] text-[#292D32]">Upload files</p>
							<p className="text-[#A9ACB4] text-sm mb-4">
								Select and upload the files of your choice
							</p>
						</div>
					</div>
					<div className="border-dashed border-2 border-gray-300 rounded-lg p-6 text-center"
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					>
						<input 
						type="file"
						multiple
						onChange={(e)=>handleFileUpload(e.target.files)}
						ref={fileInputRef}
						className="hidden"
						id="file-upload"
						/>
						<label className="cursor-pointer text-blue-600" style={{height: "100%", width: "100%"}}>
							<div className="text-gray-400 justify-items-center">
								<Image src="/photos/cloud-add.png" 
									alt="Cloud" width={20} height={20}/>
							</div>
							<span className="block text-[#292D32] mt-2">Choose a file or drag & drop it here</span>
							<span className="text-xs text-[#A9ACB4]">JPEG, PNG, PDG, and MP4 formats, up to 50MB</span>
							<button onClick={() => document.getElementById('file-upload').click()} className="mt-4 px-4 py-2 bg-white text-[#54575C] rounded-md border-2 border-solid border-[#CBD0DC]">Browse File</button>
						</label>
					</div>

					<div className="mt-4 space-y-4">
						{files.map((fileObj, index) => (
						<div key={index} className="relative p-4 rounded-lg bg-gray-100 flex items-center justify-between">
							<div className="flex flex-col items-center space-x-3">
								<div className="flex items-center">

								<img src={getFileIcon(fileObj.file.name)} alt="File Icon" width={35} height={35} />
								<div className="px-4">
									<p className="text-gray-800 text-sm font-medium">{fileObj.file.name}</p>
									<p className="text-xs text-gray-500">
										{fileObj.progress < 100 ?( 
											<div className="flex flex-row">
												{`${calculation(fileObj)} KB of ${fileObj.file.size / 1000} KB •`}
												<Image src="/photos/loading.png" className="mx-1 text-[#375EF9] animate-spin"
													alt="Loading" width={15} height={15}/>
												{` Uploading...`}
											</div>
										): (
											<div className="flex flex-row">
												{`${calculation(fileObj)} KB of ${fileObj.file.size / 1000} KB •`}
												<Image src="/photos/complete.png" className="mx-1 text-[#375EF9]"
													alt="Loading" width={15} height={15}/>
												{` Completed`}
											</div>
										)}
									</p>
								</div>
								</div>
								<div className="flex items-center space-x-2 w-full">
								{fileObj.progress < 100 ? (
									<div>
										<div className="w-full bg-gray-200 rounded-full h-1">
										<div
											className="h-full bg-blue-500 rounded-full w-full"
											style={{ width: `${fileObj.progress}%` }}
											// style={{width: "100px"}}
											></div>
										</div>
										<button onClick={() => handleRemoveFile(fileObj.file)} className="absolute top-2 right-2" >
											<Image src="/photos/x.png" 
													alt="x" width={15} height={15}/>
										</button>
									</div>
									
									
								) : (
									<button onClick={() => handleRemoveFile(fileObj.file)} className="absolute top-2 right-2" >
										<Image src="/photos/trash.png" 
											alt="trash" width={15} height={15}/>
									</button>
								)}
								
								</div>
							</div>
						</div>
						))}
					</div>
				</div>
       		</div>
          
		</div>
		</>
		
	);
}

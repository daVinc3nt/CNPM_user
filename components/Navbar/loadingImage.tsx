"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { UploadOperation } from "@/engonow-library/main";

export interface Props {
	filePath: string;
	style: string;
	width: number;
	height: number;
}
export default function LoadingImage({
	filePath,
	style,
	width,
	height,
}: Props) {
	const [link, setLink] = useState("/photos/SunGlass.jpg");
	useEffect(() => {
		const fetch = () => {
			const UploadAction = new UploadOperation();
			UploadAction.search(filePath, null).then((res) => {
				if (res.success) setLink(res.data);
			});
		};
		fetch();
	}, [filePath]);
	return (
		<>
			<Image
				src={link}
				alt="Picture"
				width={width}
				height={height}
				className={style}
				unoptimized
				onError={() => {
					const oldLink = link;
					setLink("/photos/SunGlass.jpg");
					setTimeout(() => {
						setLink(oldLink);
					}, 50);
				}}
			/>
		</>
	);
}
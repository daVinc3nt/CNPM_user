"use client";
import React, { useEffect, useRef, useState } from "react";
import { useSession } from "@/providers/SessionProvider";
import CustomLoadingElement from "../../../loading";
import { FileOperation, PaymentOperation } from "@/BE-library/main";
import moment from "moment";
interface File{
    id: number,
	size: number,
	name: string,
	upload_date: Date,
	url: string,
	file_format: string
}
export default function  ViewFiles() {
    const {session, status} =useSession();
    const [files, setFiles] = useState<File[]>([]);
    const action = new FileOperation();
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await action.searchAllUserFiles(session?.sid)
            setFiles(res.data)
        };
        if (status == "authenticated")
            fetchData();
    }, [status]);
    return (
        <>
            {status == "authenticated" && session ?
            <div>
                <div className="grid grid-cols-6 text-center items-center p-4 text-lg font-bold w-full">
						<div>ID</div>
						<div>Kích thước file</div>
						<div>Tên file</div>
						<div>Loại file</div>
						<div>Tải xuống</div>
						<div>Vào lúc</div>
				</div>
                <div className="flex flex-col gap-10 overflow-y-scroll hide-scrollbar flex-1">
						{files?.sort((a, b) => {
                            return b.id - a.id;
						}).map(({ id, size, name, file_format, url, upload_date}) => (
                            <div
							className="grid grid-cols-6 text-center items-center p-4 text-lg font-medium w-full rounded-lg shadow-md"
							key={id}
							>
							<div>{id}</div>
							<div>{size/1024} byte</div>
							<div>{name + "." + file_format} </div>
							<div>{file_format}</div>
							<a href={url} download={name + "." + file_format}>Tải xuống</a>
							<div className="flex flex-col items-center space-y-1">
								<span>{moment(new Date(upload_date[0], upload_date[1] - 1, upload_date[2], upload_date[3], upload_date[4], upload_date[5])).format("DD/MM/YYYY")}</span>
								<span>{moment(new Date(upload_date[0], upload_date[1] - 1, upload_date[2], upload_date[3], upload_date[4], upload_date[5])).format("HH:mm:ss")}</span>
							</div>
							</div>
						))}
					</div>
            </div>
            :
            <div className="h-screen  w-screen">
				<CustomLoadingElement/>
			</div>
            }
        </>
    );
}
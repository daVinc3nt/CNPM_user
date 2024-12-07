"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "@/providers/SessionProvider";
import CustomLoadingElement from "../../loading";
import moment from "moment";
import { PaymentOperation } from "@/BE-library/main";

interface Payment {
	id: number,
	balance: number,
	amount: number,
	status: string,
	method: string,
	transactionDate: Date
}
function getStatusClass(status) {
	switch (status) {
	  case 'in progress':
		return 'text-yellow-500';
	  case 'successful':
		return 'text-green-500';
	  case 'failed':
		return 'text-red-500';
	  default:
		return ''; // Hoặc một lớp mặc định nếu cần
	}
}
export default function ViewPayments(){
    const {session, status} =useSession()
	const [ListPayment, setListPayment] = useState<Payment[]>(null)
	const action = new PaymentOperation()
	useEffect(() => {
        const fetchData = async () => {
            const res = await action.searchByStudent(session?.sid)
			// const res = await action.searchStudentByID(1, "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJ1c2VySWQiOjYsInN1YiI6InRhbnRhaUBleGFtcGxlLmNvbSIsImV4cCI6MTczNDkyMDQwOH0.dgKU2O0wOScCWnNpR_FM9IrJZAFN7I_rN_jD53R903I")
			console.log(res)
			setListPayment(res.data)
        };
		if (status == "authenticated")
        	fetchData();
    }, [status]);
    return (
        <>

            {status === "authenticated" && session ?
                <div>
                    <div className="grid grid-cols-6 text-center items-center p-4 text-lg font-bold w-full">
							<div>ID</div>
							<div>Số tờ mua</div>
							<div>Thanh toán</div>
							<div>Trạng thái</div>
							<div>Phương thức</div>
							<div>Vào lúc</div>
					</div>
					<div className="flex flex-col gap-10 overflow-y-scroll hide-scrollbar flex-1">
						{ListPayment?.sort((a, b) => {
                            return b.id - a.id;
						}).map(({ id, balance, amount, status, method, transactionDate}) => (
                            <div
							className="grid grid-cols-6 text-center items-center p-4 text-lg font-medium w-full rounded-lg shadow-md"
							key={id}
							>
							<div>{id}</div>
							<div>{balance} tờ</div>
							<div>{amount} vnd</div>
							<div className={`${getStatusClass(status)}`}>{status}</div>
							<div>{method}</div>
							<div className="flex flex-col items-center space-y-1">
								<span>{moment(new Date(transactionDate[0], transactionDate[1] - 1, transactionDate[2], transactionDate[3], transactionDate[4], transactionDate[5])).format("DD/MM/YYYY")}</span>
								<span>{moment(new Date(transactionDate[0], transactionDate[1] - 1, transactionDate[2], transactionDate[3], transactionDate[4], transactionDate[5])).format("HH:mm:ss")}</span>
							</div>
							</div>
						))}
					</div>
                </div>
                    :<CustomLoadingElement/>
                }
        </>
    );
}
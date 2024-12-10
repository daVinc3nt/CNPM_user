"use client";
import { FormattedMessage } from "react-intl";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import DetailStaff from "./detailProduct";
import { Checkbox } from "@/components/TableUI/checkbox";

export type Payment = {
  id: number;
  student: {
    studentId: number;
    fullName: string;
    email: string;
    joinDate: number[];
    lastLogin: number[];
    studentBalance: number;
    role: {
      id: number;
      name: string;
    };
    imageUrl: string;
    accountNonExpired: boolean,
    credentialsNonExpired: boolean,
    accountNonLocked: boolean
  };
  balance: number;
  amount: number;
  method: string;
  transactionDate: number[];
  status: string;
  orderId: string;
  requestId: string;
};

type MyColumnDef<T> = ColumnDef<T> & {
  reloadData?: () => void;
};

export async function columns(
  reloadData: () => void
): Promise<MyColumnDef<Payment>[]> {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() ? "indeterminate" : false)
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ID
        </Button>
      ),
    },
    {
      accessorFn: (row) => row.student?.fullName,
      id: "studentFullName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Student Name
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      ),
    },
    {
      accessorKey: "balance",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Balance
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "amount",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pay
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        return <span>{row.original.amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</span>;
      }
    },
    {
      accessorKey: "method",
      header: ({ column }) => (
        <Button
          variant="ghost"
        >
          Payment Method
        </Button>
      ),
    },
    {
      accessorKey: "transactionDate",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Transaction Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const transactionDateArray = row.original.transactionDate;
        if (Array.isArray(transactionDateArray) && transactionDateArray.length >= 6) {
          const [year, month, day, hour, minute, second] = transactionDateArray;
          const formattedDate = new Date(year, month - 1, day, hour, minute, second).toLocaleString("vi-VN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            // second: "2-digit",
            hour12: false,
          });
          return <span>{formattedDate}</span>;
        }
        return <span>Invalid Date</span>;
      }
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Button
          variant="ghost"
        >
          Status
        </Button>
      ),
      cell: ({ row }) => {
        const status = row.original.status;
        let statusClass = '';
        let backgroundClass = '';
    
        // Gán màu sắc nền cho các trạng thái khác nhau
        if (status === "in progress") {
          statusClass = "text-yellow-800"; // Màu chữ vàng
          backgroundClass = "bg-yellow-200"; // Nền vàng nhạt
        } else if (status === "failed") {
          statusClass = "text-red-800"; // Màu chữ đỏ
          backgroundClass = "bg-red-200"; // Nền đỏ nhạt
        } else if (status === "successful") {
          statusClass = "text-green-500"; // Màu chữ xanh
          backgroundClass = "bg-green-200"; // Nền xanh nhạt
        } else {
          statusClass = "text-gray-800"; // Màu chữ xám
          backgroundClass = "bg-gray-200"; // Nền xám nhạt
        }
    
        return (
          <span className={`${statusClass} ${backgroundClass} px-2 py-1 rounded-md`}>
            {status}
          </span>
        );
      }
    },     
    {
      accessorKey: "Chi tiết/Sửa đổi",
      header: () => "Detail",
      cell: function Cell({ row }) {
        const [modalIsOpen, setModalIsOpen] = useState(false);

        const openModal = () => {
          setModalIsOpen(true);
        };

        const closeModal = () => {
          setModalIsOpen(false);
        };

        return (
          <div className="relative flex content-center mr-2">
            <Button
              onClick={openModal}
              className="font-bold hover:text-black hover:text-[#1488DB] hover:underline py-1 px-[0.65rem] "
            >
              Thông tin chi tiết
            </Button>
            {modalIsOpen && (
              <DetailStaff
                onClose={closeModal}
                dataInitial={row.original}
                reload={reloadData}
              />
            )}
          </div>
        );
      },
    },
  ];
}

"use client";
import { FormattedMessage } from "react-intl";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import DetailStaff from "./detailProduct";
import { Checkbox } from "@/components/TableUI/checkbox";
export type product = {
  student_id: number,
  full_name: string,
  email: string,
  image_url: string,
};
type MyColumnDef<T> = ColumnDef<T> & {
  reloadData?: () => void;
};
export async function columns(
  reloadData: () => void,
): Promise<MyColumnDef<product>[]> {
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
        accessorKey: "student_id",
        header: ({ column }) => {
          return (
            <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              ID
              {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
            </Button>
          );
        },
        
      },
      {
        accessorKey: "full_name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Họ và tên
              {/* <FormattedMessage id="student.fullname" /> */}
              {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
            </Button>
          );
        },
      },
      {
        accessorKey: "email",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Email
              {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
            </Button>
          );
        },
      },
      {
        accessorKey: "Chi tiết/Sửa đổi",
        header: () => {
          return "Detail";
        },
        cell: function Cell ({ row }) {
          const [modalIsOpen, setModalIsOpen] = useState(false);

          const openModal = () => {
            setModalIsOpen(true);
          };

          const closeModal = () => {
            setModalIsOpen(false);
          };

          return (
            <div className="relative flex content-center  mr-2">
              <Button
                onClick={openModal}
                className="font-bold hover:text-black hover:text-[#1488DB] hover:underline py-1 px-[0.65rem] "
              >
                Thông tin chi tiết
              </Button>
              {modalIsOpen && (
                <DetailStaff onClose={closeModal} dataInitial={row.original} reload={reloadData} />
              )}
            </div>
          );
        },
      }
    ]
}
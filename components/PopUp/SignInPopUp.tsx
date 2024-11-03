"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { IoMdClose } from "react-icons/io"

export default  function SignInPopUp ({setOpen}) {
  const t= useTranslations("home")
    return (
        <div className="relative z-[1000] hidden lg:block" aria-labelledby="modal-Tittle" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="fixed flex gap-5 m-auto inset-x-0 inset-y-0 rounded-xl bg-do_600 z-10 w-1/2 h-fit overflow-y-auto">
          <Image
            alt=""
            src="/photos/signUp.png"
            sizes="100vw"
            style={{
              width: '50%',
              height: 'auto',
            }}
            width={300}
            height={300}
          />
          <div className="flex relative flex-col py-10 px-5 gap-10 justify-start w-full items-center">
          <div className=" text-xl lg:text-5xl text-white font-semibold">
            {t("not_login")}
          </div>
          <Link 
          href="/login"
          className="rounded-full py-2 px-4 bg-white text-red-500 active:scale-110 duration-300">
            {t("login")}
          </Link>
          <IoMdClose
            onClick={()=>setOpen(false)}
            size={30} className="absolute top-5 text-white right-5"/>
          </div>
        </div>
        </div>
    )
}
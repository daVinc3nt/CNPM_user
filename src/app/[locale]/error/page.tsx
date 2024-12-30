"use client"
 
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
 
enum Error {
  Configuration = "Configuration",
}
 
const errorMap = {
  [Error.Configuration]: (
    <p>
      There was a problem when trying to authenticate. Please contact us if this
      error persists. Unique error code:{" "}
      <code className="text-xs bg-slate-100 p-1 rounded-sm">Configuration</code>
    </p>
  ),
}
 
function AuthErrorPage() {
  const search = useSearchParams()
  const error = search.get("error") as Error
 
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <a
        href="#"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-row justify-center items-center gap-2">
          Bạn phải dùng mail có đuôi là @hcmut.edu.vn nhé
        </h5>
        <Link
            href="/login"
            className="h-fit w-fit p-4 bg-[#ea2b2b] text-white font-bold rounded-full active:scale-125 duration-300 ease-in-out"
        >
          Quay lại
        </Link>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          {errorMap[error] || "Please contact us if this error persists."}
        </div>
      </a>
    </div>
  )
}
export default AuthErrorPage
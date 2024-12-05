"use client"
import { signIn } from "next-auth/react"; 
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie"
import { toast } from "sonner";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useTranslations } from "next-intl";
interface CredentialsFormProps {
    csrfToken?: string;
}
interface formData {
    username: string,
    password: string,
}
export function CredentialsForm(props: CredentialsFormProps) {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] =useState<formData>({
		username: "",
    	password: ""
	}
	)
	const t= useTranslations("LogPage")
	const [type, setType] = useState('password');
	const handleToggle = () => {
		if (type==='password'){
		   setType('text')
		} else {
		   setType('password')
		}
	 }
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const { username, password } = formData;
    //     ////console.log(data.get ("password"))
    //     const Auth = new AuthOperation()
    //     const res = await Auth.login({ identifier: username, password:  password })
    //     console.log(res)
    //     if (res.data)
    //         {
    //             Cookies.set("uid", res.data.id)
    //         }
    //     if (res && res.success) {
    //             router.push("/");
    //         }
	// 	else if (res && res.status === 401 && res.success) {
    //             ////console.log ("Error: ", signInResponse); 
    //             toast.warning(res.message)
    //         }
	// 		 else {
    //             ////console.log ("Error: ", signInResponse); 
    //             toast.warning(res.message)
    //         }
    //     }
    return (
		<form
			className="h-full w-full mt-8 text-black  flex flex-col items-center"
			action=""
			method="POST"
			onSubmit={()=>{}}>
			<div className="relative w-full">
				<input
					id="username"
					name="username"
					type="text"
					className="peer h-10 w-full bg-transparent border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-700"
					placeholder=""
					value={formData.username}
					onChange={(e) => {
						const newForm = e.target.value;
						if (newForm.length >40)
							{
								toast.warning("Vui lòng nhập dưới 20 ký tự bạn nhé!")
								return
							}
						const updatedFormValues = {
							...formData,
							username: newForm,
						};
						setFormData(updatedFormValues);
					}}
					required
				/>
				<label
					htmlFor="username"
					className=" absolute left-0 -top-5 text-gray-600 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm">
					Username/email
				</label>
			</div>

			<div className="mt-10 w-full sm:mt-10 relative flex gap-5">
				<div className="w-full items-center flex gap-5">
					<input
						name="password"
						id="password"
						type={type}
						className=" peer h-10 w-full border-b-2 bg-transparent  border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-700"
						placeholder=""
						onChange={(e) => {
							const newForm = e.target.value;
							const updatedFormValues = {
								...formData,
								password: newForm,
							};
							setFormData(updatedFormValues);
						}}
						required
					/>		
					<label
						htmlFor="password"
						className="absolute left-0 -top-5 text-gray-600 text-xs sm:text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
						Password
					</label>
					{type === "text" ? 
					<FaEye 
					className="text-gray-600 cursor-pointer" 
					size={20} onClick={handleToggle}/>: 
					<FaEyeSlash
					className="text-gray-600 cursor-pointer"
					onClick={handleToggle} size={20}/>}
				{/* <p className="text-red-500 fixed mt-2 text-xxs sm:text-sm">{formErrors.phoneNumberEr}</p> */}
				</div>
			</div>
			<p className="text-red-500  mt-5 text-xxs sm:text-sm">{error}</p>
			<button
				className="mt-5 relative bg-blue-900 px-4 py-2 rounded-full w-2/3 text-white text-sm md:text-xl"
				onClick={()=>{}}>
				{t("login")}
			</button>
		</form>
	);
}
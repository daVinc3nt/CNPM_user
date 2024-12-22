import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Button } from "@nextui-org/react";
import CustomDropdown from "./dropdown";
import { toast } from "sonner";
import { LocationOperation, FileFormatOperation } from "@/BE-library/main";
interface AddStaffProps {
  onClose: () => void;
  reload: any;
}
interface Location {
  id: string;
  local: string;
}
const AddStaff: React.FC<AddStaffProps> = ({ onClose, reload }) => {
  const openModal = (type) => {
    setType(type);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [selectedLocation, setselectlocation] = useState<string>("");
  const [isShaking, setIsShaking] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [type, setType] = useState();
  // const intl = useIntl();

  const [formatFile, setFormatFile] = useState<any>();
  const handleClickOutside = (event: MouseEvent) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 300);
    }
  };

  const handleClose = () => {
    console.log(location)
    setIsVisible(false);
  };

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onClose();
    }
  };

  const handleInputChange = (key: string, value: any) => {
    if (key === "location") {
      setFormatFile((prevState) => ({
        ...prevState,
        [key]: {
          id: value.id
        },
      }));
    }
    else setFormatFile((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const senddata = async () => {
      const action = new FileFormatOperation()
      const cnpm_token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJ1c2VySWQiOjYsInN1YiI6InRhbnRhaUBleGFtcGxlLmNvbSIsImV4cCI6MTczNjQ4MTc5M30.Rl9U4wkyNbdb2DjdWNORY9liL07sXdmwvdqzOZZBF1c";
      const res = await action.create(formatFile, cnpm_token)
      handleClose()
      reload();
    }
    senddata();
  };

  return (

    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={handleAnimationComplete}
      style={{ backdropFilter: "blur(12px)" }}
    >
      <motion.div
        ref={notificationRef}
        className={`relative w-[98%] sm:w-9/12 lg:w-1/2 bg-white dark:bg-[#14141a] rounded-xl p-4 overflow-y-auto ${isShaking ? "animate-shake" : ""
          }`}
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative items-center justify-center flex-col flex h-10 w-full border-b-2 border-[#545e7b]">
          <div className="font-bold text-lg sm:text-2xl pb-2 text-white w-full text-center">
            Add product
          </div>
          <IoMdClose className=" absolute right-0 w-8 h-8 cursor-pointer
            rounded-full mb-2 text-white hover:bg-gray-400 hover:text-black"
            onClick={handleClose} />
        </div>
        <form
          method="POST" onSubmit={() => { console.log("hello") }}
        >
          <div className="h-fit border border-[#545e7b] mt-4 no-scrollbar flex flex-col items-center bg-white  dark:bg-[#14141a] p-5 rounded-md text-black dark:text-white">
            <div
              className="w-fit h-fit"
            >
              <div className="flex flex-col gap-3">
                <input required
                  type="string"
                  className={`text-xs md:text-sm border border-gray-600 rounded  bg-white dark:bg-[#14141a] h-10 p-2 w-full
                  `}
                  placeholder="Nhập tên định dạng"
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
            </div>
          </div>
          <Button
            className="w-full rounded-lg mt-5 mb-1 py-3 border-green-700 hover:bg-green-700 text-green-500
          bg-transparent drop-shadow-md hover:drop-shadow-xl hover:text-white border hover:shadow-md"
            onClick={handleSubmit}
            type="submit"
          >
            Add
          </Button>

        </form>
      </motion.div>
    </motion.div >
  );
};

export default AddStaff;

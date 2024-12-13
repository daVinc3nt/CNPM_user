import React, { useRef, useEffect, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdSave } from "react-icons/md";
import { Button, select } from "@nextui-org/react";
import { FaPen } from "react-icons/fa";
import { TabSlider } from "@/components/SliderTab/TabSlider";
import { PrinterOperation } from "@/BE-library/main";

interface DetailStaffProps {
  onClose: () => void;
  dataInitial: any;
  reload: any;
}
const DetailStaff: React.FC<DetailStaffProps> = ({ onClose, dataInitial, reload }) => {
  const [isShaking, setIsShaking] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [data, setData] = useState<any>(dataInitial);
  const [updateData, setupdateData] = useState<any>(dataInitial);
  const filterData = [
    { id: 0, name: "Thông tin máy in", value: "details" },
    { id: 1, name: "Thông tin spso", value: "students" },
  ]
  const [filter, setFilter] = useState<"purchaseStats" | "costHist" | "priceHist" | "inventory" | "stats" | "details"| "students">("details")
  const handleUpdateData = (e, key: string, input: string = "string") => {
    if (input == "number")
      setupdateData({ ...updateData, [key]: parseInt(e.target.value) });
    else
      setupdateData({ ...updateData, [key]: e.target.value });
  }

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
  const handleSaveClick = async () => {
    const action =new PrinterOperation()
    setIsEditing(false);
    delete updateData?.spso?.authorities;
    const cnpm_token = "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJ1c2VySWQiOjYsInN1YiI6InRhbnRhaUBleGFtcGxlLmNvbSIsImV4cCI6MTczNjQ4MTc5M30.Rl9U4wkyNbdb2DjdWNORY9liL07sXdmwvdqzOZZBF1c";
    const res =await action.update(data["id"], updateData, cnpm_token)

    reload()
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  const handleClose = () => {
    setIsVisible(false);
  };

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onClose();
    }
  };
  const [isEditing, setIsEditing] = useState(false);
  const ToggleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const traverse = (obj, isEditing, canEdit?) => {
    console.log(updateData)
    const editableElements = [];
    const nonEditableElements = [];

    obj && Object?.keys(obj)?.forEach((key) => {
      if (obj[key] && typeof obj[key] === 'object') {
        traverse(obj[key], isEditing);
      } else {
        const formattedKey = `student.${key}`;
        const formattedValue = obj[key] ? obj[key] : "No info"
        const element = (
          <div key={key} id="order_id" className="bg-gray-100 p-3 rounded-xl shadow-inner  dark:text-black">
            <div className="font-bold text-base text-black dark:text-black">
              {key.replace(/([A-Z])/g, " $1")}
            </div>
            {isEditing ? (
              (key != "status") ?
              <input
                className={`text-gray-500 w-fit inline-block break-all dark:text-black`
                  + !(key === "id" || key === "a4RemainingPages" || key === "a3RemainingPages") ? "border-b-2" : ""}
                type="text"
                value={obj[key]}
                onChange={(e) => {
                  setData({ ...obj, [key]: e.target.value });
                  handleUpdateData(e, key);
                }}
                disabled={key === "id"  }
                
              />
              :
              <select
              onChange={(e) => {
                setData({ ...obj, [key]: e.target.value });
                handleUpdateData(e, key);
              }}
              value={obj[key]}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            ) : (
              <div className="text-gray-500 w-fit inline-block break-all  dark:text-black">{formattedValue}</div>
            )}
          </div>
        );
        if (true && key != "password" && key != "enabled" && key != "accountNonExpired" && key != "credentialsNonExpired" && key != "accountNonLocked" ) {
          editableElements.push(element);
        } else {
          // nonEditableElements.push(element);
        }
      }
    });
    return (
      <div className="flex flex-col">
        {/* <div className="text-xl text-black dark:text-white font-bold uppercase text-center">
          Thông tin 1
        </div> */}
        <div className="grid-cols-2 grid lg:grid-cols-3 p-10 gap-4">
          {editableElements}
        </div>

        {/* <div className="text-xl text-black dark:text-white font-bold uppercase text-center">
          Thông tin 2
        </div> */}
        <div className="grid-cols-2 grid lg:grid-cols-3 p-10 gap-4">
          {nonEditableElements}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-60 z-50 text-[#545e7b]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={handleAnimationComplete}
      style={{
        backdropFilter: "blur(12px)",
      }}
    >
      <motion.div
        ref={notificationRef}
        className={`relative w-11/12 bg-white dark:bg-[#14141a] h-5/6 rounded-xl p-4
          ${isShaking ? "animate-shake" : ""}`}
        initial={{ scale: 0 }}
        animate={{ scale: isVisible ? 1 : 0 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative items-center justify-center flex-col flex h-10 w-full border-b-2 border-[#545e7b]">
          <div className="font-bold text-lg sm:text-2xl pb-2 text-black dark:text-white w-full text-center">
            Thông tin chi tiết
          </div>

          <IoMdClose className=" absolute right-0 w-8 h-8 cursor-pointer
            rounded-full mb-2 text-black dark:text-white hover:bg-gray-400 hover:text-black"
            onClick={handleClose} />
        </div>
        <TabSlider allTabs={filterData} onSelectOption={setFilter} />
        <div className="w-full h-4/6 border border-[#545e7b] mt-4 no-scrollbar
        justify-center flex flex-wrap gap-5 bg-gray-100 dark:bg-[#14141a] p-5 rounded-md 
        dark:text-white text-black  overflow-y-scroll">
          {
            filter === "details" && traverse(data, isEditing)
          }
          {
            filter === "students" && traverse(data.spso, isEditing)
          }
          
        </div>
        <div className="w-full flex">
          {!isEditing ? (
            <Button
              className="w-full rounded-lg mt-5 mb-1 py-3 border-green-700 hover:bg-green-700 text-green-500
              bg-transparent drop-shadow-md hover:drop-shadow-xl hover:text-white border 
              hover:shadow-md"
              onClick={ToggleEditClick}
            >
              <FaPen className="xs:mr-2" />
              <span className=" xs:block">
                Sửa
              </span>
            </Button>
          ) : (
            <div className="flex flex-row w-full">
              <Button
                className="w-full rounded-lg mt-5 mb-1 py-3 border-green-700 hover:bg-green-700 text-green-500
              bg-transparent drop-shadow-md hover:drop-shadow-xl hover:text-white border 
              hover:shadow-md"
                onClick={ToggleEditClick}
              >
                <IoMdClose className="xs:mr-2" />
                <span className="xs:block">
                  Quay lại
                </span>
              </Button>
              <Button
                className="w-full rounded-lg mt-5 mb-1 py-3 border-green-700 hover:bg-green-700 text-green-500
              bg-transparent drop-shadow-md hover:drop-shadow-xl hover:text-white border 
              hover:shadow-md"
                onClick={handleSaveClick}
              >
                <MdSave className="xs:mr-2" />
                <span className="xs:block">
                  Lưu
                </span>
              </Button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailStaff;
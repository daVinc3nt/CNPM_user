"use client"
import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

interface CustomDropdownProps {
  label: string;
  options: any[];
  selectedOption: any;
  onSelectOption: (option: any) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  label,
  options,
  selectedOption,
  onSelectOption,
}) => {
  const [selected, setSelected] = useState(selectedOption);

  const handleOptionClick = (option: any) => {
    if (selected === option) {
      onSelectOption("");
      setSelected("");
    } else {
      onSelectOption(option);
      setSelected(option);
    }
  };

  return (
    <>
      <Dropdown 
        showArrow
        placement = "bottom" 
        className="z-50" shouldCloseOnInteractOutside={(e) => true}>
        <DropdownTrigger>
          <Button
            className="text-xs md:text-sm text-black border border-gray-300 rounded-xl h-10 w-fit"
            aria-label={label}
          >
             {selectedOption? selectedOption: label}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          className=" bg-white border border-gray-300 no-scrollbar rounded w-full h-20 overflow-y-scroll"
          aria-labelledby="dropdownMenuButton"
        >
          {options.map((option, index) => (
            <DropdownItem key={index} textValue={option} >
              <Button
                onClick={() => handleOptionClick(option)}
                aria-label={option}
                className={`text-center text-black w-full px-2 ${selected === option ? 'bg-gray-400/50 rounded' : ''}`}
              >
                {option}
              </Button>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default CustomDropdown;

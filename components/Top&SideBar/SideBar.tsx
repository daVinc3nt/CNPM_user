import { useState } from "react";
import Side from "./Side";
import {
  ReceiptLong,
} from "@mui/icons-material";
import { FiPrinter } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
// import { FormattedMessage } from "react-intl";
const SideItemData = [
  {
    id: 0,
    title: "Printers",
    url: "/product",
    icon: <FiPrinter className="text-2xl lg:block" />,
  },
  {
    id: 1,
    title: "Users",
    url: "/users",
    icon: <FaUsers className="text-2xl lg:block" />,
  },
  {
    id: 2,
    title: "Payments",
    url: "/payment",
    icon: <BsCashCoin className="text-2xl lg:block" />,
  }
];
export default function SideBar({ toggleCollapse }) {
  const [dropdown, Setdropdown] = useState(false);
  return (
    <Side
      menuItems={SideItemData}
      toggleCollapse={toggleCollapse}
    />
  );
}

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
    title: "Máy in",
    url: "/printer",
    icon: <FiPrinter className="text-2xl lg:block" />,
  },
  {
    id: 1,
    title: "Người dùng",
    url: "/users",
    icon: <FaUsers className="text-2xl lg:block" />,
  },
  {
    id: 2,
    title: "Hoá đơn",
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

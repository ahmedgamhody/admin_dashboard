import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import FilterHdrOutlinedIcon from "@mui/icons-material/FilterHdrOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
export const Links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <HomeOutlinedIcon />,
  },
  {
    name: "Manage Team",
    path: "/team",
    icon: <GroupOutlinedIcon />,
  },
  {
    name: "Contacts Information",
    path: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    name: "Invoices Balances",
    path: "/invoices",
    icon: <ReceiptOutlinedIcon />,
    divider: true,
  },
  ////
  {
    name: "Profile Form",
    path: "/profile",
    icon: <PersonOutlinedIcon />,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: <CalendarMonthOutlinedIcon />,
  },
  {
    name: "FAQ Page",
    path: "/faq-page",
    icon: <LiveHelpOutlinedIcon />,
    divider: true,
  },
  ///
  {
    name: "Bar Chart",
    path: "/bar-chart",
    icon: <BarChartOutlinedIcon />,
  },
  {
    name: "Pie Chart",
    path: "/pie-chart",
    icon: <PieChartOutlinedIcon />,
  },
  {
    name: "Line Chart",
    path: "/line-chart",
    icon: <TimelineIcon />,
  },
  {
    name: "Geography Chart",
    path: "/geography-chart",
    icon: <FilterHdrOutlinedIcon />,
  },
];

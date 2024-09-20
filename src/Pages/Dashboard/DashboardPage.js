import Row1 from "./Dashboard Sections/Row1";
import Row2 from "./Dashboard Sections/Row2";
import Row3 from "./Dashboard Sections/Row3";
import Button from "@mui/material/Button";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Stack } from "@mui/material";
import Header from "../../components/Header";
function Dashboard() {
  return (
    <div>
      <Stack
        justifyContent={"space-between"}
        alignItems={"center"}
        direction={"row"}
      >
        <Header title={"Dashboard"} subTitle={"Welcome to my dashboard"} />
        <Button variant="contained" color="primary">
          <DownloadOutlinedIcon sx={{ marginRight: "5px" }} />
          DOWNLOAD REPORTS
        </Button>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

export default Dashboard;

import { Stack, useTheme } from "@mui/material";
import Row1Com from "./Row1Com";
import TrafficIcon from "@mui/icons-material/Traffic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import EmailIcon from "@mui/icons-material/Email";
import { data1, data2, data3, data4 } from "./Row1ComData";
function Row1() {
  const them = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >
      <Row1Com
        icon={
          <EmailIcon
            sx={{ fontSize: "24px", color: them.palette.secondary.main }}
          />
        }
        title="12,132"
        subTitle="Emails Sent"
        pricent="+14%"
        data={data1}
        scheme={"category10"}
      />
      <Row1Com
        icon={
          <PointOfSaleIcon
            sx={{ fontSize: "24px", color: them.palette.secondary.main }}
          />
        }
        title="431,123"
        subTitle="Sales obtained"
        pricent="+21%"
        data={data2}
        scheme={"accent"}
      />
      <Row1Com
        icon={
          <PersonAddIcon
            sx={{ fontSize: "24px", color: them.palette.secondary.main }}
          />
        }
        title="32,441"
        subTitle="New Clients"
        pricent="+56%"
        data={data3}
        scheme={"pink_yellowGreen"}
      />
      <Row1Com
        icon={
          <TrafficIcon
            sx={{ fontSize: "24px", color: them.palette.secondary.main }}
          />
        }
        title="1,325,195"
        subTitle="Traffic Received"
        pricent="+43%"
        data={data4}
        scheme={"nivo"}
      />
    </Stack>
  );
}

export default Row1;

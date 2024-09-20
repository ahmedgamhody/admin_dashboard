import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../Pie Chart/Pie";
import Geography from "../../Geography Chart/Geography";
import Bar from "../../Bar Chart/Bar";

function Row3() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} mt={3} gap={2}>
      <Paper sx={{ width: "28%", minWidth: "350px", flexGrow: 1 }}>
        <Typography
          sx={{
            padding: "20px 20px 0 20px",
          }}
          variant="h5"
          fontWeight={"600"}
          color={theme.palette.secondary.main}
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography
          align="center"
          variant="h6"
          sx={{
            mt: "15px",
          }}
        >
          $48,236 revenue genrtated
        </Typography>
        <Typography align="center" px={0.7} pb={3} variant="body2">
          Includes extra misc expenditures and cost
        </Typography>
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "350px", flexGrow: 1 }}>
        <Typography
          sx={{
            padding: "20px 20px 0 20px",
          }}
          fontWeight={"600"}
          variant="h5"
          color={theme.palette.secondary.main}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>
      <Paper sx={{ width: "33%", minWidth: "350px", flexGrow: 1 }}>
        <Geography isDashboard={true} />
      </Paper>
    </Stack>
  );
}

export default Row3;

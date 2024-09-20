import {
  Box,
  Paper,
  Stack,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import Line from "../../Line Chart/Line";
import { DownloadOutlined } from "@mui/icons-material";
import { recentTransactionData } from "./recentTransactionData";

function Row2() {
  const them = useTheme();
  const showPaper = recentTransactionData.map((item, index) => {
    return (
      <Paper
        key={index}
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Box p={1.2}>
          <Typography variant="body1" fontWeight="600">
            {item.txId}
          </Typography>
          <Typography variant="body2">{item.user}</Typography>
        </Box>
        <Typography variant="body2">{item.date}</Typography>
        <Typography
          variant="body2"
          p={1}
          borderRadius={1.4}
          bgcolor={them.palette.error.main}
          color={them.palette.getContrastText(them.palette.error.main)}
        >
          {item.cost}$
        </Typography>
      </Paper>
    );
  });
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={2} mt={3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1, minWidth: "400px" }}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography
              variant="h6"
              color={them.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>
        <Line isDashboard={true} />
      </Paper>
      <Box
        sx={{
          minWidth: "280px",
          height: 380,
          flexGrow: 1,
          overflow: "auto",
        }}
        p={1}
      >
        <Paper>
          <Typography
            variant="h6"
            color={them.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
          >
            Recent Transaction
          </Typography>
        </Paper>
        {showPaper}
      </Box>
    </Stack>
  );
}

export default Row2;

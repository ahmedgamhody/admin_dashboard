import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./ManageTeamData";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockPersonOutlinedIcon from "@mui/icons-material/LockPersonOutlined";
import Header from "../../components/Header";
function ManageTeamPage() {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              padding: "6px",
              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "User"
                  ? "#009688"
                  : theme.palette.secondary.dark,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              textAlign: "center",
              mx: "auto",
              mt: "8px",
              color: "white",
            }}
          >
            {access === "Admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "User" && <LockOpenOutlinedIcon />}
            {access === "Manager" && <LockPersonOutlinedIcon />}
            <Typography variant="body1" sx={{ marginLeft: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 600, width: "98%", margin: "0 auto" }}>
      <Header title={"Team"} subTitle={"Managing the Team Members"} />
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default ManageTeamPage;

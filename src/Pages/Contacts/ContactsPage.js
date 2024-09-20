import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./ContactsData";
import Header from "../../components/Header";

function ContactsPage() {
  return (
    <div style={{ height: 600, width: "98%", margin: "0 auto" }}>
      <Header
        title={"Contacts"}
        subTitle={"List of Contacts for Future Reference"}
      />
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
}

export default ContactsPage;

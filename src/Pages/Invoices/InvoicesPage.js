import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./InvoicesData";
import Header from "../../components/Header";

function InvoicesPage() {
  return (
    <div style={{ height: 600, width: "98%", margin: "0 auto" }}>
      <Header title={"invoices"} subTitle={"List of Invoices for Balances"} />
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </div>
  );
}

export default InvoicesPage;

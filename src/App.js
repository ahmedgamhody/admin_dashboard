import { Route, Routes } from "react-router-dom";
import WebSite from "./website/WebSite";
import Dashboard from "./Pages/Dashboard/DashboardPage";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { ModeChange } from "./components/context/ModeContext";
import ManageTeamPage from "./Pages/Manage Team/ManageTeamPage";
import ContactsPage from "./Pages/Contacts/ContactsPage";
import ProfileFormPage from "./Pages/Profile Form/ProfileFormPage";
import InvoicesPage from "./Pages/Invoices/InvoicesPage";
import CalendarPage from "./Pages/Calendar/CalendarPage";
import FAQPage from "./Pages/FAQ/FAQPage";
import BarChartPage from "./Pages/Bar Chart/BarChartPage";
import PieChartPage from "./Pages/Pie Chart/PieChartPage";
import GeographyChartPage from "./Pages/Geography Chart/GeographyChartPage";
import LineChartPage from "./Pages/Line Chart/LineChartPage";
import Err404 from "./Pages/Erorr404/Error404";
function App() {
  const mode = React.useContext(ModeChange);

  const darkTheme = createTheme({
    palette: {
      mode: mode.mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route element={<WebSite />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<ManageTeamPage />} />
            <Route path="/profile" element={<ProfileFormPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/invoices" element={<InvoicesPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/faq-page" element={<FAQPage />} />
            <Route path="/bar-chart" element={<BarChartPage />} />
            <Route path="/pie-chart" element={<PieChartPage />} />
            <Route path="/line-chart" element={<LineChartPage />} />
            <Route path="/geography-chart" element={<GeographyChartPage />} />
            <Route path="*" element={<Err404 />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;

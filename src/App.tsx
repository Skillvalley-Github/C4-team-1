import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./scenes/navbar";
import Dashboard from "./scenes/dashboard";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <>
      {/* <BrowserRouter> */}
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box width="100%" height="100%" padding="0rem 2rem 4rem 2rem">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/payroll" element={<div>Payroll System</div>} />
            <Route path="/attendance" element={<div>Attendance System</div>} />
            <Route path="/employeedata" element={<div>Employee Data</div>} />
          </Routes>
        </Box>
      </ThemeProvider>
      {/* </BrowserRouter> */}
    </>
  );
};

export default App;

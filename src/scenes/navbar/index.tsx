import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { FusionSync } from "../../assets";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <Box width="13%" height="4%">
          <img src={FusionSync} alt="Logo" />
        </Box>

        {/* RIGHT SIDE */}
        <FlexBetween gap="2rem">
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/"
              onClick={() => setSelected("dashboard")}
              style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}>
              Dashboard
            </Link>
          </Box>

          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/attendance"
              onClick={() => setSelected("attendance")}
              style={{
                color: selected === "attendance" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}>
              Attendance
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/employeedata"
              onClick={() => setSelected("employeedata")}
              style={{
                color: selected === "employeedata" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}>
              Employeedata
            </Link>
          </Box>
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
              to="/payroll"
              onClick={() => setSelected("payroll")}
              style={{
                color: selected === "payroll" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}>
              Payroll
            </Link>
          </Box>
        </FlexBetween>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;

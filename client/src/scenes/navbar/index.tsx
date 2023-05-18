import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme(); //Accessing palette object from themeSettings using useTheme() hook
  const [selected, setSelected] = useState("dashboard");

  return (
    //FlexBetween is user defined reusable component
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <ApiIcon fontSize="large" />
        <Typography variant="h4" fontSize="16px">
          FinZio
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            DashBoard
          </Link>
        </Box>
        <Box>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;

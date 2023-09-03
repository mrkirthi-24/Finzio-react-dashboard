import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const { palette } = useTheme(); //Accessing palette object from themeSettings using useTheme() hook

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
        <NavLink
          to="/"
          label="Dashboard"
          selected={selected}
          setSelected={setSelected}
        />
        <NavLink
          to="/predictions"
          label="Predictions"
          selected={selected}
          setSelected={setSelected}
        />
      </FlexBetween>
    </FlexBetween>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  selected: string;
  setSelected: (selected: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  selected,
  setSelected,
  label,
}) => {
  const { palette } = useTheme();

  return (
    <Box sx={{ "&:hover": { color: palette.primary[100], fontWeight: 600 } }}>
      <Link
        to={to}
        onClick={() => setSelected(label)}
        style={{
          color: selected === label ? "inherit" : palette.grey[700],
          textDecoration: "inherit",
        }}
      >
        {label}
      </Link>
    </Box>
  );
};

export default Navbar;

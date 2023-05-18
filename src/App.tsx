import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "@/scenes/navbar";
import { themeSettings } from "./theme";
import DashBoard from "./scenes/dashboard";
import Predictions from "./scenes/predictions";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* The Box component serves as a wrapper component for most of the CSS utility needs. 
          It creates a new DOM element. "div" by default. To create any other element specify using [component prop] */}
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 1rem">
            <Navbar />
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

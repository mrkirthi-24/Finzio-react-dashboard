import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import { themeSettings } from "./theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* The CssBaseline component helps to kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          hello world
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

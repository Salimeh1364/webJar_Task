import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles'
import theme from "./projectSetting/theme.js"

// import IndexRe from "./Resp/Login/IndexRe";

import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<Dashboard />} />
        
          {/* <Route path="/Dashboard/*" element={<Dashboard/>} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

import { createTheme } from "@mui/material/styles"

const theme = createTheme({

  // TYPOGRAPHY
  typography: {
    fontFamily: ["IRANYekan", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#00c853"
    },
    secondary: {
      main: "#494c7d"
    }
  }
  
});

export default theme
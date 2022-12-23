import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#076763",
    },
    secondary: {
      main: "#19857b",
    },
    light: {
      main: "rgba(0, 0, 0, 0.6)",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      fade: "#F8F9FB",
    },
    line: {
      main: "rgba(0, 0, 0, 0.15)",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {},
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          ":active": {
            boxShadow: "none",
          },
          ":hover": {
            boxShadow: "none",
          },
        },
      },
      contained: {
        color: "white",
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: "96rem",
      },
    },
    MuiPaper: {
      root: {
        transition: "background 225ms ease-in",
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: ["Inter var", "sans-serif"].join(","),
    },
  },
});

export default theme;

import { createTheme } from "@mui/material";
import palette from "../styles/theme.scss";

export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: palette.primary,
      },
      secondary: {
        main: palette.secondary,
      }
    }
  })
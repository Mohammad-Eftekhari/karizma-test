import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/default";
import MainPage from "./pages/MainPage";

function MainApp() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainPage />
      </ThemeProvider>
    </Provider>
  );
}

export default MainApp;

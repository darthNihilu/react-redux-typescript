import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import ResetCSS from "./ResetCSS";
import store from "./state/store";

const theme = {
  color: {
    baseColor: "#A64CFF",
    themeColor: "#25242C",
  },
};

const Providers: React.FC = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ResetCSS />
      {children}
    </ThemeProvider>
  </Provider>
);

export default Providers;

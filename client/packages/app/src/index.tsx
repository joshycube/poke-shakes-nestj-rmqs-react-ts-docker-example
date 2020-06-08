import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import messages from "@pokeshakesclient/shared/translations";
import store from "./redux/store";
import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IntlProvider locale="en" messages={messages["en"]}>
        <Routes />
      </IntlProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

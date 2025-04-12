import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import NewPage from "./newPage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newPage" element={<NewPage />} />
      </Routes>
      </Provider>
    </BrowserRouter>
);
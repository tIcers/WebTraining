import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const math = <h1> 2 + 3 = {2 + 3}</h1>;

root.render(math);

import { App } from "./app"

import { createRoot } from "react-dom/client"

const appElement = document.getElementById("root")

if (appElement) {
    const root = createRoot(appElement)
    root.render(<App />)
}

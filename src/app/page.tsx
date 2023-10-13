"use client"
import { BrowserRouter } from "react-router-dom"
import App from "./routes/routes";
import { ContextProvider } from "./context/Context";

const Page = () => {

  return ( 
    <ContextProvider>
      <App/>
    </ContextProvider>
  )
}

export default Page;
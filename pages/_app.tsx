import "../styles/globals.css";
import DefaultLayout from "../layouts/DefaultLayout";
import '../styles/auth.css'
import '../styles/Chat.css'
import '../styles/Index.css'



import "../config/fcl";
import { FlowProvider, useFlow } from "../context/FlowContext";
import { ContextProvider } from "../context";

export function MyApp({ Component, pageProps }) {

  return (
    <FlowProvider>
      <DefaultLayout>

      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
      
      </DefaultLayout>
    </FlowProvider>
    
  );
}

export default MyApp;
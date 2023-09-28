import "../styles/globals.css";
import DefaultLayout from "../layouts/DefaultLayout";
import '../styles/auth.css'
import '../styles/Chats.css'
import '../styles/Index.css'



import "../config/fcl";
import { FlowProvider, useFlow } from "../context/FlowContext";
// import { UserProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }) {

  return (
    <FlowProvider>
      <DefaultLayout>

        {/* <UserProvider> */}
        <Component {...pageProps} />
        {/* </UserProvider> */}
      </DefaultLayout>
    </FlowProvider>
  );
}

export default MyApp;
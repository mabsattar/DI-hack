import React, { useState, useEffect, useContext} from "react";
import dynamic from "next/dynamic";
import { FlowProvider, useFlow } from "../context/FlowContext";
import DefaultLayout from '../layouts/DefaultLayout';
import { ChatEngine, ChatFeed, ChatSettings } from 'react-chat-engine';
import { useWeb3 } from '../context/Web3Context';
import { useUser } from '../context/UserContext'; 



const ChatApp = () => {
  const { web3 } = useWeb3(); // Use your Web3 context to access the user's wallet address
  const { flowData } = useFlow(); // Use your Flow context for any additional data you need
  const { user } = useUser(); // Use your User context to access user-specific data

  const projectID = '7ca19379-2cc5-401b-ab3c-2a2022badd5c '; // Replace with your ChatEngine Project ID

  // State to store the wallet address
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    // Check if the wallet address is available from your Web3 context
    if (web3) {
      // Obtain the user's wallet address
      const address = web3.eth.accounts[0]; // Replace with the appropriate method to get the address

      // Set the wallet address in the component state
      setWalletAddress(address);
    }
  }, [web3]);

  // Check if walletAddress is defined before creating chatSettings
  let chatSettings = null;
  if (walletAddress) {
    chatSettings = new ChatSettings({ userName: walletAddress });
  }

  return (
    <div>
      <h1>Welcome to Chats</h1>
      {walletAddress ? (
        <ChatEngine         
        projectID={'7ca19379-2cc5-401b-ab3c-2a2022badd5c'} chatSettings={chatSettings}>
          {/* Chat content goes here */}
        </ChatEngine>
      ) : (
        <div>
          {/* Display a message or UI for users who are not logged in */}
          <p>Please connect your wallet to use the chat.</p>
        </div>
      )}
    </div>
  );
};

export default ChatApp;



 /*
const username = userWalletAddress; // Use the user's wallet address as the username
const chatSettings = new ChatSettings({ credentials: null });



const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
); 

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);


  
export default function ChatApp() {
  

 /* useEffect(() => {
    if (typeof document != null) {
      setShowChat(true)
    }
  }); 

  const {showChat, setShowChat} = useState(false)

  if (!showChat) return <div />;

  axios.put(
    "https://api.chatengine.io/users/") */



 
/*
  return (
    <div>
        <FlowProvider>

      <DefaultLayout>
         
    
   <div className='background'>
    <div className='shadow'>
      <ChatEngine
      height='calc(100vh - 200px)'
      projectID=""
    
      renderNewMessageForm={() => <MessageFormSocial />}
      />
    </div>   
    
   </div>

         <UserProvider> 

         

         </UserProvider>

        </DefaultLayout>

     </FlowProvider>
  

</div>

  )
}



/*import React, { useContext } from "react";
import { Context } from '../context/Chat';
import { useRouter } from "next/router";
import axios from "axios";


export function Auth() {
    const { username, setUsername, secret, setSecret, } = useContext(Context);

    const router = useRouter()
  

    function onSubmit(e) {
        e.preventDefault()

        if (username.length === 0 || secret.length === 0) return

        axios.put(
            "https://api.chatengine.io/users/",
            { username, secret},
            { headers: { "Private-key": 'd8731d1f-5a00-4b6a-a920-b2dd13a957b1'}}
        )
        .then(r => router.push('/chats'))
    }

    return (
        <div className="background-white">
            <div className="auth-container  ">
                <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
                    <div className="auth-title"> Lancet Chat</div>

                    <div className='input-container'>
                        <input
                            placeholder='Email'
                            className='text-input'
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='input-container'>
                        <input
                        type='password'
                            placeholder='Password'
                            className='text-input'
                            onChange={(e) => setSecret(e.target.value)}
                        />
                    </div>                    
                        
                    <button
                    type='submit' className='submit-button'                    
                    
                    >                        
                        Login              
                                               
                    </button>                    

                </form>

            </div>          

        </div>

    );
}

export default Auth;*/
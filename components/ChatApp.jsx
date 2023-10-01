import React, { useState, useEffect } from "react";
import { FlowProvider, useFlow } from "../context/FlowContext";
import DefaultLayout from '../layouts/DefaultLayout';
import { ChatEngine, ChatFeed, ChatSettings } from 'react-chat-engine';
import { useWeb3 } from '../context/Web3Context';
import { useUser, UserProvider } from '../context/UserContext';

const ChatApp = () => {
  const { web3 } = useWeb3();
  const { user } = useUser();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const projectID = 'YOUR_CHAT_ENGINE_PROJECT_ID'; // Replace with your ChatEngine Project ID

  // Ensure IntersectionObserver is defined before using it
  useEffect(() => {
    if (typeof window !== "undefined" && !window.IntersectionObserver) {
      // Load IntersectionObserver polyfill if it's not available
      import("intersection-observer")
        .then(() => {
          // IntersectionObserver is now available
        })
        .catch((error) => {
          console.error("Error loading IntersectionObserver polyfill:", error);
        });
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };

  // Rest of your component code remains the same

  return (
    <div>
      <FlowProvider>
        <DefaultLayout>
          <div className='background'>
            <div className='shadow'>
              <ChatEngine
                height='calc(100vh - 200px)'
                projectID={projectID}
                userName={user && user.walletAddress}
                userSecret='YOUR_USER_SECRET' // Replace with your user secret if needed
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
              />
              <form onSubmit={handleFormSubmit}>
                <input
                  type='text'
                  placeholder='Type your message...'
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button type='submit'>Send</button>
              </form>
            </div>
          </div>
          <UserProvider>
            {/* User provider content */}
          </UserProvider>
        </DefaultLayout>
      </FlowProvider>
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
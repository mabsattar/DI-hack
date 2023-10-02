import React, { useState, useEffect } from "react";



const ChatApp = () => {





  return (
    <div class= "chat-container">
      <div class="chat-header">
        <h1>Chat App </h1>
      </div>       
       
        
      
    </div>
    
  )
}

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
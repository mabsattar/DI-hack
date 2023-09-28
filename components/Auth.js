import React, { useContext } from "react";
import { Context } from '../context';
import { useRouter } from "next/router";
import axios from "axios";


export function Auth() {
    return (
      <div className="background">
        <div className="auth-container"></div>
        <form className='auth-form' onSubmit={e => e.preventDefault()}>
  
        </form>
        
      </div>
  
    );
  }
  
  export default Auth;
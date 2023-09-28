import React, { useContext } from "react";
import { Context } from '../context';
import { useRouter } from "next/router";
import axios from "axios";


export function Auth() {
    const { setUsername, setSecret, } = useContext(Context);

    return (
        <div className="background">
            <div className="auth-container">
                <form className='auth-form' onSubmit={e => e.preventDefault()}>
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
                            placeholder='Password'
                            className='text-input'
                            onChange={e => setSecret(e.target.value)}
                        />
                    </div>

                </form>



            </div>

        </div>

    );
}

export default Auth;
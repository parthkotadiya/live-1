import { useState } from "react"
import FOOTER from "./footer"
import HEADER from "./header"

function MYACC() {

    const[login ,setLogin]=useState({email:"",pass:""})
    const data=(e)=>{
        setLogin({...login,[e.target.name]: e.target.value })
    }


   
    return (
        <>

            <HEADER />
            <div className="bg-red-400 text-center p-12">
                <h1 className="text-4xl">My Account</h1>
                <br />

                <h1>Home- my account</h1>

            </div>
            <div className="flex justify-around gap-5 container">
                <div className="w-1/2">
                    <h1>LOGIN</h1>
                    <br />
                    <hr />
                    <br />
                    <br />
                    <label htmlFor="email" >Username or email address</label>
                    <br />
                    <input className="border-2 border-black w-full p-2" value={login.email} onChange={data} type="email" id="email" name="email" />
                    <br />
                    <br />
                    <label htmlFor="password" >password</label>
                    <br />
                    <input type="password" id="pass" className="border-2 border-black w-full p-2"  onChange={data} value={login.pass} name="pass" />
                    <br />
                    <br />
                    <button type="button" className="demo50" >Log in</button>




                </div>
                <div className=" w-1/2">
                    <h1>REGISTER</h1>
                    <br />
                    <hr />
                    <br />
                    <br />
                    <label htmlFor="email" >Email address</label>
                    <br />
                    <input className="border-2 border-black w-full p-2" type="email" id="email1" name="email1" />
                    <br />
                    <br />
                    <h1>A password will be sent to your email address.</h1>
                    <br />
                    <p>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                    </p>
                    <br />
                    <button type="button" className="demo50" >REGISTER</button>


                </div>
            </div>
            <FOOTER />
        </>
    )
}
export default MYACC
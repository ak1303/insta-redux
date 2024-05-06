import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import endpoints from "../../network/endpoints";
import { AuthContext } from "../../App";

const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {setIsLoggedIn} = useContext(AuthContext);
const navigate = useNavigate();

const loginUser= (e)=>{
    console.log(email, password);
    e.preventDefault();
    const data ={email,password};
    axios({
        url: endpoints.login,
        method: 'POST',
        data: data
    }).then((response)=>{
        const token = response.data.token;
        localStorage.setItem('token', token);
        alert('Login successful')
        setIsLoggedIn(true);
        navigate('/')
    }).catch((error)=>{
        alert('Error occured, try again. ' + error.response.data.message)
    })
}

  return (
    <div className="flex justify-center items-center gap-10 h-screen">
        <div className="h-3/4">
            <img src="https://www.nicepng.com/png/detail/60-604249_phone-instagram-natur-visitenkarte-der-kamera-moderne-einfache.png" alt="Instagram" 
                className=" h-full rounded-lg"
            />
        </div>
        <div className="flex flex-col gap-5 w-1/4 h-3/4">
            <div className="border-2 pt-5 px-4 pb-2 flex-1 rounded-lg" >
                <h1 className="text-center text-xl font-bold font-serif mt-5">Instagram</h1>
                <form className="flex flex-col gap-8 w-full p-2 justify-center h-full" onSubmit={loginUser}>
                    <input 
                        type="email" 
                        name="email" id="email" 
                        value = {email} 
                        autoComplete="username@123"
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder="Enter Email"
                        className="w-full p-1 border outline-none rounded"
                    />
                    <input 
                        type="password" 
                        value={password}
                        autoComplete="new-password"
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-full p-1 border outline-none rounded"
                    />
                    <button className="w-full rounded-lg p-1 bg-[#4cb5f9] text-white">Login</button>
                </form>
            </div>
            <div className=" text-slate-900 border border-[lightgrey] p-5 text-center rounded-lg">
            Don't have an account? <Link to="/signup" className=" font-mono font-semibold text-[#4cb5f9]">Sign up</Link> 
            </div>
        </div>
    </div>
  )
}

export default Login
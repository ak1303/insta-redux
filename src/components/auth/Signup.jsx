import { useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import endpoints from "../../network/endpoints";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const navigate = useNavigate();
    const signupUser = (e) => {
        e.preventDefault();
        console.log(name, password, gender, email, city);
        const data = {name, password, gender, email, city};
        axios({
            url:endpoints.signup,
            method: 'POST',
            data: data
        }).then((response) => {// axios reject promise on http error also  so 400,500 code will be in catch block
                alert('Signup successful')
                navigate('/login');
        }).catch((err)=>{
            console.log(err.response.data.message);
            alert('Error occured, please try again, '+ err.response.data.message);
        })
    }
    
    const selectGender = (e) => {
        if(e.target.checked)
            setGender(e.target.value)
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
                    <form className="flex flex-col gap-4 w-full p-2 justify-center h-full" onSubmit={signupUser}>
                        <input 
                            type="name" 
                            name="name" id="name" 
                            value = {name} 
                            onChange={(e)=>setName(e.target.value)}
                            placeholder="Enter Name"
                            className="w-full p-1 border outline-none rounded"
                        />
                        <input 
                            type="email" 
                            name="email" id="email" 
                            value = {email} 
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Enter Email"
                            required
                            className="w-full p-1 border outline-none rounded"
                        />
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Enter Password"
                            className="w-full p-1 border outline-none rounded"
                        />
                        
                        <input 
                            type="text" 
                            name="city" id="city" 
                            value = {city} 
                            onChange={(e)=>setCity(e.target.value)}
                            placeholder="Enter City"
                            className="w-full p-1 border outline-none rounded"
                        />
                        <div className="w-full p-1 flex justify-between  outline-none rounded">
                            <div>
                                <input type="radio" id="male" name="gender" value="MALE" onChange={selectGender}/>
                                <label htmlFor="male" className="ms-2">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="gender" value="FEMALE" onChange={selectGender}/>
                                <label htmlFor="female" className="ms-2">Female</label>
                            </div>
                            <div>
                                <input type="radio" id="others" name="gender" value="OTHERS" onChange={selectGender}/>
                                <label htmlFor="female" className="ms-2">Others</label>
                            </div>
                        </div>
                        <button className="w-full rounded-lg p-1 bg-[#4cb5f9] text-white">Sign up</button>
                    </form>
                </div>
                <div className=" text-slate-900 border border-[lightgrey] p-5 text-center rounded-lg">
                Already have an account? <Link to="/login" className=" font-mono font-semibold text-[#4cb5f9]">Sign in</Link> 
                </div>
            </div>
        </div>
      )
}

export default Signup

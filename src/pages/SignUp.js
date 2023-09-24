import {BsXCircleFill} from "react-icons/bs";
import { setsignin , useCreateUserMutation} from '../store';
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";

function SignUp ({setshowsignup}) {
const [firstname, setfirstname] = useState(null);
const [lastname, setlastname] = useState(null);
const [email, setemail] = useState(null);
const [password, setpassword] = useState(null);
const [CreateUser] = useCreateUserMutation();

const handlefirstname = (event) =>  {
    setfirstname(event.target.value);
}
const handlelastname = (event) => {
    setlastname(event.target.value);
}
const handleemail = (event) => {
    setemail(event.target.value);
}
const handlepass = (event) => {
    setpassword(event.target.value);
}
const handlesubmmit = (event) =>{
    event.preventDefault();
    CreateUser({firstname,lastname,email,password})
    setemail('');
    setfirstname('');
    setlastname('');
    setpassword('');


}

    const dispatch = useDispatch();
    const handleclick = () => {
        dispatch(setsignin(false));
    }
    return <div className="  absolute z-10 bg-slate-50 rounded-2xl pb-16 shadow-2xl mt-2 w-1/3 right-4 ">
    <div className="flex flex-col">
        <div className="flex flex-row  justify-between font-serif">
       <div className="p-3 mt-5  text-xl"> CREATE AN ACCOUNT</div>
       <div onClick={handleclick} className="p-3 cursor-pointer flex flex-row items-center"><BsXCircleFill   className="mr-2" /> close</div></div>
       <div className="mt-2 font-serif p-2">
                    <p>Already have Account?</p>
                    <p onClick={()=>{setshowsignup(false)}}  className="font-bold ml-2 text-blue-400 cursor-pointer">Log-In</p>
                  </div>
        <div className="flex flex-col">
            <form onSubmit={handlesubmmit} className="flex flex-col font-serif ml-10">
                <label className="p-3 text-2xl font-bold">First Name</label>
                <input onChange={handlefirstname} value={firstname} placeholder="Enter Your First Name"  className="p-3 w-1/2 border-b
                 rounded-2xl shadow-2xl"></input>
                 <label className="p-3 text-2xl font-bold">Last Name</label>
                <input onChange={handlelastname} value={lastname} placeholder="Enter Your Last Name"  className="p-3 w-1/2 border-b
                 rounded-2xl shadow-2xl"></input>
                 <label className="p-3 text-2xl font-bold">Email Address *</label>
                <input  onChange={handleemail} value={email} placeholder="Enter Your Email"  className="p-3 w-1/2 border-b
                 rounded-2xl shadow-2xl"></input>
                 <label className="p-3 text-2xl font-bold">Password</label>
                <input type="number"  onChange={handlepass} value={password} placeholder="Enter Your Password"  className="p-3 w-1/2 border-b
                 rounded-2xl shadow-2xl"></input>
                 </form>
                 <div onClick={handlesubmmit} className="flex p-3 bg-slate-500 shadow-2xl w-1/4  ml-16
                 cusror-pointer mt-10 hover:bg-slate-50  text-white cursor-pointer hover:text-slate-500 rounded-2xl
                  font-serif items-center justify-center font-bold">Sign-Up</div>
                  
        </div>
    </div>
    </div>
}

export default SignUp ;
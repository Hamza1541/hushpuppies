import { useSelector,useDispatch } from "react-redux";
import {currentuser , iscurentuser, setsignin, useFetchUserQuery,setsigninn, skhamkha, emptyCart } from '../store';

import {BsXCircleFill} from "react-icons/bs";
import { useState } from "react";
import SignUp from "./SignUp";
import { RxCross2 } from "react-icons/rx";

function SignIn() {
    const[showsignup,setshowsignup] = useState(false);
    const [email , setemail] =  useState(null);
    const [bring, setbring] = useState(null);
    const [pass , setpass] = useState(null)
   
;    const dispatch = useDispatch();

const handleemail = (event) => {
    setemail(event.target.value);
}
const handlepass = (event) => {
    setpass(event.target.value)
}
const handleitnow = ()=> {
    dispatch(skhamkha(false));
    dispatch(currentuser(null));
    dispatch(iscurentuser(false));
    dispatch(emptyCart());
  
    setemail('');
    setpass('');
    
}

const handlesubmitplease = (event) => {
    event.preventDefault();
    setbring(pass);
    dispatch(skhamkha(true));
  
    //setemail('');
    //setpass('');
    
}
const khamkha = useSelector((state)=>{
    return state.userss.khamkha;
})
const hellomr = (item) =>  {
dispatch(currentuser(item));
dispatch(iscurentuser(true));
dispatch(setsigninn());

}
const {data,error,isLoading} = useFetchUserQuery(bring);

let renderdata = null;
if(isLoading){
    renderdata = <div>isLoading</div>
}
else if(error){
    renderdata = <div>error</div>
}
else if(data){
    if(data.length !== 0){
      
        renderdata = data.map((item)=>{
            return <div key={item.id} className="pb-10 pt-10  absolute z-10 bg-slate-50 rounded-2xl shadow-2xl mt-2 w-1/3 right-4">
                <div onClick={()=>{hellomr(item)}}   className="ml-10 text-2xl hover:text-4xl"><RxCross2   /></div>
                <div className="rounded-lg  flex justify-center items-center p-5" >
                <img className="border-4 border-slate-300 rounded-2xl transition-transform transform hover:scale-125" src={item.profilepic} />
                </div>
                <p className="pt-3 text-2xl font-serif border-b-4 p-5 border-slate-100 hover:font-bold tracking-tight cursor-pointer
                 flex items-center justify-center ">Name :  <span className="font-bold"> {item.name}  {item.lastname}</span></p>
                <p className="pt-3 text-2xl font-serif p-5 border-b-4 border-slate-100 hover:font-bold tracking-tight cursor-pointer
                 flex items-center justify-center">Email Address : <span className="font-bold">{item.email} </span> </p>
                  <p onClick={handleitnow} className="pt-10 text-2xl font-serif  hover:font-bold tracking-tight cursor-pointer
                 flex items-center justify-center ">Logout?</p></div>
        })
    }
    else if(data.length === 0){
        renderdata = <div className="pb-30 bg-slate-800 flex items-center justify-center flex flex-col  absolute z-10 bg-slate-50 rounded-2xl shadow-2xl mt-2 w-1/3 right-4">
            
            <div><p onClick={handleitnow} className="text-2xl p-10 text-blue-100
             cursor-pointer hover:text-slate-100">LOG - OUT ? </p></div>
            </div>
    }
    // renderdata = data.filter((item)=> bring === item.password).map((item)=>{
      //  if(item === null) {
        //    return <div>i  ams orry</div>
        //}
         //else {
        //return <div>{item.name}</div>
    //}
     //});
      //  if(happy){
         //   return <div>{item.name}</div>
       // }
       // else {
         //   return <div>na bava g naa</div>
       // }
  
       // return <div>
          //  {happy ? <div className="pb-10 absolute z-10 bg-slate-50 rounded-2xl shadow-2xl mt-2 w-1/3 right-4">{item.name}</div> : <div>na bava g password tuahada galat ey </div> }
       // </div>
    //})
//}
    }
    const signin = useSelector((state)=>{
        return state.navbar.signin;
    })
    const handleclickp = () => {
        dispatch(setsignin(false));
    }
    let signinnn = <div className=" pb-10 absolute z-10 bg-slate-50 rounded-2xl shadow-2xl mt-2 w-1/3 right-4 ">
    <div className="flex flex-col">
        <div className="flex flex-row justify-between font-serif">
       <div className="p-3 mt-5  text-xl"> CUSTOMER LOGIN:</div>
       <div onClick={handleclickp} className="p-3   flex flex-row items-center"><BsXCircleFill  className="mr-2" /> close</div></div>
       <div className="mt-3 font-serif p-3">
                    <p>Dont Have Account? Create Now</p>
                    <p onClick={()=>{setshowsignup(true)}} className="font-bold ml-2 text-blue-400 cursor-pointer">Sign-Up</p>
                  </div>
        <div className="flex flex-col">
            <form  onSubmit ={handlesubmitplease} className="flex flex-col font-serif ml-10">
                <label className="p-3 text-2xl font-bold">User Name</label>
                <input required onChange={handleemail} value={email}  placeholder="Enter Your Name"  className="p-3 w-1/2 border-b
                 rounded-2xl shadow-2xl"></input>
                 <label className="p-3 text-2xl font-bold">Password</label>
                <input required type="number" value={pass} onChange={handlepass} placeholder="Enter Your Password"  className="p-3 w-1/2 border-b
                 rounded-2xl shadow-2xl"></input>
                 </form>
                 <div onClick={handlesubmitplease} className="flex p-3 bg-slate-500 shadow-2xl w-1/4  ml-16
                 cusror-pointer mt-10 hover:bg-slate-50 text-white  cursor-pointer hover:text-slate-500 rounded-2xl
                  font-serif items-center justify-center font-bold">Log-In</div>
                  
        </div>
    </div>
    </div>
    if(khamkha){
        signinnn = <div>{renderdata}</div>
    }
    return  <div>{ showsignup? <div><SignUp setshowsignup = {setshowsignup} /> </div> : <div>{signinnn} </div>}</div>

}

export default SignIn;
import reallogo from '../assets/reallogo.png';
import {BsSearch , BsPersonCircle , BsMinecartLoaded , BsHeartFill , BsXCircleFill} from "react-icons/bs";
import {RxCross2} from "react-icons/rx";
import { useState } from 'react';
import { useFetchGenderQuery } from '../store/api/GenderApi';
import {useAddgCollectionMutation} from '../store//api/GenderCollectionApi';
import ShowNavMenu from '../components/shownavmenu';
import { AddPath,Addgid,showNav,seta,setsignin, setsigninn, skhamkha,setissearch,setsearchterm } from '../store';
import { useDispatch,useSelector } from "react-redux";
import SignIn from '../pages/SignIn';
import Search from "../pages/Search";


function NavBar () {
  
    const {data,isError,isLoading} = useFetchGenderQuery();
    const [localsearchterm, setlocalsearchterm] = useState(null);
    const [showsearchbar, setsearchbar] = useState(false);
   // const [a , seta] = useState(null);
    const dispatch = useDispatch();
    const handlesignin = () =>  {
        dispatch(setsigninn());
    }
    const iscurentuser = useSelector((state)=>{
        return state.userss.iscurentuser
    });
    const curentuser = useSelector((state)=>{
        return state.userss.currentuser
    });
    console.log(curentuser);
    const signin = useSelector((state)=>{
        return state.navbar.signin; });
    
const shownav = useSelector((state)=>{
    return state.navbar.navbar;
})
const a = useSelector((state)=>{
    return state.navbar.a;
})
const handlenewone = () => {
    dispatch(showNav(false));
    document.body.style.overflow = 'auto';
}
const handlecart = () => {
    dispatch(showNav(false));
    document.body.style.overflow = 'auto';
    dispatch(AddPath('cart'))

}
const handlefav = () => {
    dispatch(showNav(false));
    document.body.style.overflow = 'auto';
    dispatch(AddPath('fav'));

}
    const opensearchbar = () => {
        setsearchbar(!showsearchbar);
        dispatch(showNav(false));
       // dispatch(AddPath('search'));
      dispatch(setissearch(false));
      dispatch(setsearchterm(null));
        document.body.style.overflow = 'auto';
    }
    const handleclickplease = () =>{
        dispatch(AddPath('home'));
        document.body.style.overflow = 'auto';
        dispatch(showNav(false));
      }
    const addnow = (item) => {
        setsearchbar(false);
      dispatch(showNav(true));
       //seta(item.id);
       dispatch(seta(item.id));
        dispatch(Addgid(item.label));
        document.body.style.overflow = 'hidden';
        }
        const handlekhamkha = () => {
           dispatch(skhamkha(true));
        }
        const handlesearch = (event)=>{
            dispatch(setissearch(true));
            dispatch(setsearchterm(event.target.value));
        }
  
  
let rendernavbar = null;
if(isLoading){
    rendernavbar = <div>..loading</div>
   }
   else if(isError) {
    rendernavbar = <div>error</div>
   }
   else if(data) {
    
 rendernavbar = data.map((item)=>{
    const b = a === item.id;
    return <div  onClick={()=>{addnow(item)}} className={`hover:font-bold ${b && 'font-bold border-b-2'} cursor-pointer tracking-widest`}  key={item.path}>
        {item.label}
    </div>
})
    return <div className='flex flex-col w-full'>
        <div className="flex flex-row w-full justify-between bg-slate-50 shadow-2xl  text-xl font-serif " >
        <div className="h-auto flex flex-row items-center gap-16 ml-5" >{rendernavbar}</div>
        <img onClick={handleclickplease} className='h-auto w-auto cursor-pointer ' src={reallogo} />
        <div className='flex flex-row items-center ml-36 gap-12 mr-5'>
        <div onClick={opensearchbar} className='flex flex-col'>
            <BsSearch className='hover:text-red-500 cursor-pointer text-4xl' />
            <p>Search</p>
        </div>
      <div onClick={handlesignin} className='flex flex-col'>
            <BsPersonCircle className='hover:text-red-500 ml-3 cursor-pointer text-4xl' />
            {iscurentuser? <p onClick={handlekhamkha}>{curentuser.name}</p>  :<p>Sign-In</p>}
        </div> 
        <div className='flex flex-col'>
            <BsMinecartLoaded onClick={handlecart} className='hover:text-red-500 cursor-pointer text-4xl' />
            <p>Cart</p>
        </div>
        <div className='flex flex-col'>
            <BsHeartFill onClick={handlefav}  className='hover:text-red-500 cursor-pointer ml-4 text-4xl'/>
            <p>WishList</p>
        </div>
        </div>

        
        </div>
        {showsearchbar && <div className='flex  flex-col absolute z-10 mt-28 border-2 border-slate-300 
        shadow-2xl rounded-2xl bg-slate-50 right-40'> 
            <div className=' shadow-2xl bg-slate-50 pl-5 pr-5 rounded-2xl
          ml-96 w-2/4 flex flex-row items-center gap-10'> 
        <form  className='w-full'> 
            
            <input onChange={handlesearch} placeholder='Search here!' className='focus:outline-none border-2
             border-slate-100 mt-2 w-full p-6 rounded-2xl border-slate-100 bg-slate-50' type='text'></input>
        </form>
        <BsSearch className='text-3xl' /> 
        <BsXCircleFill onClick={opensearchbar} className=' cursor-pointer text-5xl' />
        </div>
        <div> <Search /> </div> </div>}
        {shownav && <div className=' mt-18 '>
            
            <div className='bg-slate-50 border-2 border-slate-100 shadow-2xl
            rounded-2xl  p-5'>
                <div className=' pb-8 cursor-pointer font-serif items-center flex flex-row '
                onClick={handlenewone}
                > 
                <RxCross2 className='hover:text-red-500 text-2xl' /><p className='text-s 
                border-b-4 border-slate-300 hover:border-red-500'>close</p>
                </div> <ShowNavMenu 
               
                  a={a} /> </div> </div>}
                  {signin && <SignIn />}
        
    </div>
} }

export default NavBar ; 
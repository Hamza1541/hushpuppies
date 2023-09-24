import { BsSuitHeart ,BsBagPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

function Showitemss({item})  {
    const currentPath = useSelector((state)=>{
        return state.navbar.path;
      })
const hello = currentPath === 'cart';
 
    return <div className="flex flex-col font-serif items-center  text-2xl border-2 border-slate-200 shadow-2xl p-5">
        <img src={item.pic} />
        <p> Product : {item.name}</p>
        <p> Price :  {item.price}</p> 
{hello ? <BsSuitHeart className="text-4xl  cursor-pointer hover:text-red-400" /> :         <BsBagPlus className="text-4xl  cursor-pointer hover:text-red-400" />}

    </div>
}
export default Showitemss;
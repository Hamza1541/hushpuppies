import { useAddtofavMutation,  useFetchfavQuery,addtocart } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { BsSuitHeart ,BsBagPlus } from "react-icons/bs";

function Showitem({item}){
    const dispatch = useDispatch();
    const curentuser = useSelector((state)=>{
        return state.userss.currentuser
    });



    const [addtofav] = useAddtofavMutation();
    const addtofavplease = (item) => {
        addtofav({item,curentuser})

    }

    const addtocartplease = (item) =>{
        dispatch(addtocart(item));
        

    }

    return <div className="border-2 shadow-2xl rounded-2xl font-serif"> 
        <img src={item.pic} />
        <div className="flex justify-between p-2"><p className="ml-5 font-serif text-2xl">{item.name}</p> 
        <BsSuitHeart onClick={()=>{addtofavplease(item)}} className="text-3xl mr-5 hover:text-red-500 cursor-pointer" /></div>
        <p className="text-2xl ml-5 p-2">Price : Rs {item.price}</p>
        <div onClick={()=>{addtocartplease(item)}} className="flex justify-center  p-2 hover:text-red-500 cursor-pointer items-center">
            <p className="mr-3 text-l">Add to Cart</p>
            <BsBagPlus className="text-3xl" /></div>


    </div>
}
export default Showitem;
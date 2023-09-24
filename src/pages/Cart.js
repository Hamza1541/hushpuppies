import { useSelector } from "react-redux";
import Showitemss from "../components/showitemsss";
import cartsss from "../assets/cart.jpg";


function Cart(){
 const cart = useSelector((state)=>{
  return state.cart.cart;
 });
 const iscurrentuser = useSelector((state)=>{
  return state.userss. iscurentuser;
 })
 console.log(iscurrentuser)
 const rendercart = cart.map((item)=>{
  return <div> <Showitemss item={item} /></div>
 })
 const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
  

    return <div>
      {iscurrentuser? <div>
       <div className="text-2xl font-serif">TOTAL PRICE :{totalPrice}</div>
        
        <div className="grid grid-cols-3 gap-10 grid-rows-2">
        {rendercart}</div>
    </div> : <div className="text-4xl font-serif">
      <p>Please Login to Add items</p>
    <img src={cartsss} className="w-auto h-auto" /> </div> }
    </div>

}
export default Cart;
import {CartEmpty} from "./components/CartEmpty";
import {CartList} from "./components/CartList";
import {useCart} from "../../context";

export const CartPage = () => {
  const {cartList} = useCart();
  // console.log(cartList);
  
  return (
    <main>          
      {/* <CartEmpty/> */}
      {/* <CartList/> */}
      {cartList ? <CartList/> : <CartEmpty/>}
    </main>
  )
}

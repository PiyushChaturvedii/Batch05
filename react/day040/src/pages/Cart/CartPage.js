// import {CartEmpty} from "./components/CartEmpty";
import {CartList} from "./components/CartList";

export const CartPage = () => {
  return (
    <main>          
      {/* <CartEmpty/> */}
      <CartList/>
      {/* {cartlistLength? <CartList/>:<CartEmpty/>} */}
    </main>
  )
}

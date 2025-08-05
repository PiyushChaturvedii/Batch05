import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList.length})`);
  // console.log(cartList);

  return (
    <main>
      {/* <CartEmpty/> */}
      {/* <CartList/> */}
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  );
};

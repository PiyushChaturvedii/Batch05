import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export const OrderPage = () => {
  // const status = false;
  const { state } = useLocation();
  useTitle("Order Summary");

  return (
    <main>
      {/* {status ? <OrderSuccess/>: <OrderFail />} </main> */}
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}{" "}
    </main>
  );
};

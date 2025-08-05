import {OrderSuccess} from './components/OrderSuccess';
import {OrderFail} from './components/OrderFail';
import { useLocation } from 'react-router-dom';


export const OrderPage  = () => {
  // const status = false;
  const {state} = useLocation();

  return (
    <main> 
      {/* {status ? <OrderSuccess/>: <OrderFail />} </main> */}
      {state.status ? <OrderSuccess data={state.data}/>: <OrderFail />} </main>
  )
}

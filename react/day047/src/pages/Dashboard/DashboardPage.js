import { useEffect, useState } from "react";
import { getUserOrders } from "../../services/dataService";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { useTitle } from "../../hooks/useTitle";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try{
        const data = await getUserOrders();
        setOrders(data);
      }catch(error){
         toast.error(error.message, {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: true,
                          closeOnClick: true,
                          pauseOnHover: false,
                          draggable: false,
                          progress: undefined,
                          theme: "colored",
                          transition: "Zoom",
                        })
      }
    }
    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => <DashboardCard key={order.id} order={order} />)}
      </section>

      <section>{orders.length === 0 && <DashboardEmpty />}</section>
    </main>
  );
};

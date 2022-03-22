import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { getData, sendCartData } from "./store/cart-slice";
// import OutTable from "./components/exam";

//to not send data initially when the app is called with empty cart to db

function App() {
  const isInit = useRef(true);
  const showCart = useSelector((state) => state.ui.showCart);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  useEffect(() => {
    if (isInit.current) {
      isInit.current = false;
      return;
    }
    dispatch(sendCartData(cart));
    // const sendData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "sending",
    //       message: "sending data to backend",
    //     })
    //   );
    //   const response = await fetch(
    //     "https://dummy-api-f4510-default-rtdb.firebaseio.com/cart.json",
    //     {
    //       method: "PUT",
    //       body: JSON.stringify(cart),
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("some thing wrong");
    //   }
    //   const data = await response.json();
    //   console.log(data);
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "success",
    //       title: "Success!",
    //       message: "sent data Successfully!",
    //     })
    //   );
    // };
    // console.log("executing sendData")
    // sendData().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Failed!",
    //       message: "sending data Failed!",
    //     })
    //   );
    // });
  }, [cart, dispatch]);
  return (
    // <OutTable />
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

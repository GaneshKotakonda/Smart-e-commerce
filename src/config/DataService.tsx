import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./Firebase";
import { store } from "../store/store";

export const getProductsData = async () => {
  const QuerySnapShot = await getDocs(collection(db, "products"));
  const list = [];
  QuerySnapShot.forEach((doc) => list.push(doc.data()));
  return list;
};

export const fetchUserOrders = async ()=>{
  const userId = store.getState().UserSlice.UserData.uid;
  const userOrderRef = collection(doc(db,"users",userId),"orders")
  const SnapShot = await getDocs(userOrderRef)
  const OrderList=[];
  SnapShot.forEach((doc)=>{
    OrderList.push(doc.data())
  })
  return OrderList;
}
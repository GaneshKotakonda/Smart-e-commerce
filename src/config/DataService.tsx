import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./Firebase";
import { store } from "../store/store";
import axios from "axios";

export const getProductsData = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      imageURL: item.image,
      description: item.description,
      category: item.category,
      rating: item.rating,
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products from Fake Store API:", error);
    return [];
  }
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
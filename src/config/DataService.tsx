import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./Firebase";
import { store } from "../store/store";
import axios from "axios";

export const getProductsData = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products?limit=100");
    const products = response.data.products.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      imageURL: item.thumbnail,
      description: item.description,
      category: item.category,
      rating: item.rating,
      stock: item.stock,
    }));
    return products;
  } catch (error) {
    console.error("Error fetching products from DummyJSON API:", error);
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
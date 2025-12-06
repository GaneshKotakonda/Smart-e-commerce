import moment from "moment";

export const getDateFromFireStoreTimeStampObject=(FireStoreDateObj)=>{
const date = new Date(FireStoreDateObj.seconds *1000);
return moment(date).format("MMMM Do,hh:mm A")
}
import axios from "axios";

export const getcity = async () =>
  await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}customer/location/getallcities`);

    // {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("token")}`,
    //   },
    // }
  
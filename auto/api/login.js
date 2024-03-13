import axios from "axios";
export const login = async (payload) =>
  await axios.post(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}api/auth/authenticate`,
    payload
  );

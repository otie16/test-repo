import axios from "axios";
import jwt_decode from "jwt_decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://localhost:8000/api";

// Set token in headers for authenticated requests
const useAxios = () => {
  const [authTokens, setUser, setAuthTokens] = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  }).access;

  axiosInstance.interceptors.request.use(async (req) => {
    // Decode the user credentials tokens
    const user = jwt.decode(authTokens);
    // Check if the access token is expired
    const isExpired = dayjs.unix(user.exp).diff(dayjs() < 1);

    if (isExpired) return req;

    const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh,
      })
      localStorage.setItem('authToken', JSON.stringify(response.data));


      setAuthTokens(response.data)
      setUser(jwt_decode(response.data.access))

    //  Updates the Authorization header with the new access token before the request is sent.
      req.headers.Authorization = `Bearer ${(response.data.access)}`
      return req;
  });
  return axiosInstance;
};

export default useAxios
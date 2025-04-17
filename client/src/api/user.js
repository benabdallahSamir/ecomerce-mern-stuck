import axios from "axios";
import { apiUrl, urlParams } from "./constants";

export async function isLoggedIn() {
  try {
    const { status, data } = await axios.get(
      `${apiUrl}/auth/isLoged`,
      urlParams
    );
    return { status, data };
  } catch (error) {
    console.log(error);
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message,
      };
    }
    return {
      status: 10,
      message: "Server Error",
    };
  }
}

import axios from "axios";
import { apiUrl, urlParams } from "./constants";

export async function login(username, password) {
  try {
    const { status, data } = await axios.post(
      `${apiUrl}/auth/login`,
      { username, password },
      urlParams
    );
    return { status, data };
  } catch (error) {
    console.log(error);
    if (error.response) {
      return {
        status: error.response.status,
        data: error.response.data,
      };
    }
    return {
      status: 10,
      message: "Server Error",
    };
  }
}
export async function signup(username, password) {
  try {
    const { status, data } = await axios.post(
      `${apiUrl}/auth/signup`,
      { username, password },
      urlParams
    );
    return { status, data };
  } catch (error) {
    console.log(error);
    if (error.response) {
      return {
        status: error.response.status,
        data: error.response.data,
      };
    }
    return {
      status: 10,
      message: "Server Error",
    };
  }
}

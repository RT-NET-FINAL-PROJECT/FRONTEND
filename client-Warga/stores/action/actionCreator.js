import axios from "axios";
import { baseUrl } from "../../config/url";
import {
  POSTS_DETAILS_SUCCESS,
  POSTS_LOADING,
  POSTS_SUCCESS,
  SERVICES_SUCCESS,
  USERS_CURRENT_LOGIN,
  USERS_LOADING,
  USERS_LOGIN,
} from "./actionType";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function register(data) {
  return async (dispatch, getState) => {
    console.log(data);
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const {
        email,
        fullName,
        ktpNumber,
        password,
        phoneNumber,
        rt,
        statusKeluarga,
      } = data;

      const response = await axios({
        method: "post",
        url: baseUrl + "/users/register",
        data: {
          namaLengkap: fullName,
          nomorTelp: phoneNumber,
          email: email,
          password: password,
          nomorKtp: ktpNumber,
          status_keluarga: statusKeluarga,
          rt_id: +rt,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: USERS_LOADING, payload: false });
    }
  };
}

export function login(data) {
  return async (dispatch, getState) => {
    console.log(data);
    try {
      dispatch({ type: USERS_LOADING, payload: true });
      const { email, password } = data;

      const response = await axios({
        method: "post",
        url: baseUrl + "/login",
        data: {
          email,
          password,
        },
      });

      await AsyncStorage.setItem("access_token", response.data.access_token);
      await AsyncStorage.setItem("userId", `${response.data.userId}`);
      await dispatch({ type: USERS_LOGIN, payload: true });

      return response.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: USERS_LOADING, payload: false });
    }
  };
}

export function logout(navigation) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USERS_LOADING, payload: true });

      await AsyncStorage.clear();
      await dispatch({ type: USERS_LOGIN, payload: false });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: USERS_LOADING, payload: false });
    }
  };
}

export function getRts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USERS_LOADING, payload: true });

      const access_token = await AsyncStorage.getItem("access_token");
      const userId = await AsyncStorage.getItem("userId");

      const response = await axios({
        method: "get",
        url: baseUrl + "/users/" + userId,
        headers: {
          access_token,
        },
      });

      dispatch({ type: USERS_CURRENT_LOGIN, payload: response.data });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: USERS_LOADING, payload: false });
    }
  };
}

export function getCurrentLoggedIn() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: USERS_LOADING, payload: true });

      const access_token = await AsyncStorage.getItem("access_token");
      const userId = await AsyncStorage.getItem("userId");

      const response = await axios({
        method: "get",
        url: baseUrl + "/users/" + userId,
        headers: {
          access_token,
        },
      });

      dispatch({ type: USERS_CURRENT_LOGIN, payload: response.data });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: USERS_LOADING, payload: false });
    }
  };
}

export function getEventPosts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: POSTS_LOADING, payload: true });

      const access_token = await AsyncStorage.getItem("access_token");

      const response = await axios({
        method: "get",
        url: baseUrl + "/event",
        headers: {
          access_token,
        },
      });

      dispatch({ type: POSTS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: POSTS_LOADING, payload: false });
    }
  };
}

export function getAnnouncementPosts() {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: POSTS_LOADING, payload: true });

      const access_token = await AsyncStorage.getItem("access_token");

      const response = await axios({
        method: "get",
        url: baseUrl + "/pengumuman",
        headers: {
          access_token,
        },
      });

      dispatch({ type: POSTS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: POSTS_LOADING, payload: false });
    }
  };
}

export function getPostDetails(id) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: POSTS_LOADING, payload: true });

      const access_token = await AsyncStorage.getItem("access_token");

      const response = await axios({
        method: "get",
        url: baseUrl + "/event/" + id,
        headers: {
          access_token,
        },
      });

      dispatch({ type: POSTS_DETAILS_SUCCESS, payload: response.data });
      return response.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch({ type: POSTS_LOADING, payload: false });
    }
  };
}

export function commentar(id, comment) {
  return async (dispatch, getState) => {
    try {
      console.log(comment, id);
      const access_token = await AsyncStorage.getItem("access_token");
      const response = await axios({
        method: "post",
        url: baseUrl + "/users/comment",
        headers: {
          access_token,
        },
        data: {
          comment,
          post_id: id,
        },
      });
      await dispatch(getPostDetails(id));
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export function getAllServices() {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const response = await axios({
        method: "get",
        url: baseUrl + "/services",
        headers: {
          access_token,
        },
      });
      dispatch({ type: SERVICES_SUCCESS, payload: response.data });

      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export function editProfileDetails(userData) {
  return async (dispatch, getState) => {
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      const userId = await AsyncStorage.getItem("userId");
      const response = await axios({
        method: "put",
        url: baseUrl + "/users/" + userId,
        headers: {
          access_token,
        },
        data: {
          ...userData,
        },
      });
      dispatch(getCurrentLoggedIn());
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

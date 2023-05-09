//Action Creator atau kumpulan function yang mengembalikan object action

import { baseUrl } from "../../config/api"
import {
    POSTS_ERROR,
    POSTS_FETCH_ALL,
    POSTS_FETCH_LOADING
} from "./actionType";

  export const fetchPostsLoading = () => {
    return {
        type: POSTS_FETCH_LOADING,
        payload: false
    }
  }
  
  export const fetchPosts = () => {
    return (dispatch) => {
      dispatch({type : POSTS_FETCH_LOADING, payload : true})
      fetch( baseUrl + "event", {
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("something wrong");
          }
        })
        .then((data) => {
          dispatch({ type: POSTS_FETCH_ALL, payload: data });
        })
        .catch((error) => {
          dispatch({ type: POSTS_ERROR, payload: error?.message });
        })
        .finally(() => {
          const action = fetchPostsLoading()
          dispatch(action)
      });
    };
  };
  

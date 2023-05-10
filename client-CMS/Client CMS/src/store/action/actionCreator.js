//Action Creator atau kumpulan function yang mengembalikan object action

import { baseUrl } from "../../config/api"
import {
    POSTS_ERROR,
    POSTS_FETCH_ALL,
    POSTS_FETCH_LOADING,
    POSTS_ADD_LOADING,
    POSTS_ADD_RESPONSE,
    SERVICES_ERROR,
    SERVICES_FETCH_ALL,
    SERVICES_FETCH_LOADING,
    WARGAS_ERROR,
    WARGAS_FETCH_ALL,
    WARGAS_FETCH_LOADING,
    REQUESTS_ERROR,
    REQUESTS_FETCH_ALL,
    REQUESTS_FETCH_LOADING
} from "./actionType";

  export const fetchPostsLoading = () => {
    return {
        type: POSTS_FETCH_LOADING,
        payload: false
    }
  }
  export const fetchServicesLoading = () => {
    return {
        type: SERVICES_FETCH_LOADING,
        payload: false
    }
  }
  export const fetchWargasLoading = () => {
    return {
        type: WARGAS_FETCH_LOADING,
        payload: false
    }
  }
  export const fetchRequestsLoading = () => {
    return {
        type: REQUESTS_FETCH_LOADING,
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

  export const addPost = (payload) => {
    return (dispatch, getState) => {
      dispatch({type : POSTS_ADD_LOADING, payload : true})
      fetch( baseUrl + "event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("something wrong");
          }
        })
        .then((data) => {
          dispatch({type : POSTS_ADD_RESPONSE, payload : data})
        })
        .catch((error) => {
          dispatch({type : POSTS_ERROR, payload : error?.message })
        })
        .finally( _ => {
          dispatch({type : POSTS_ADD_LOADING, payload : false})
        })
    }
  }
  
  export const fetchServices = () => {
    return (dispatch) => {
      dispatch({type : SERVICES_FETCH_LOADING, payload : true})
      fetch( baseUrl + "services", {
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
          dispatch({ type: SERVICES_FETCH_ALL, payload: data });
        })
        .catch((error) => {
          dispatch({ type: SERVICES_ERROR, payload: error?.message });
        })
        .finally(() => {
          const action = fetchServicesLoading()
          dispatch(action)
      });
    };
  };

  export const fetchWargas = () => {
    return (dispatch) => {
      dispatch({type : WARGAS_FETCH_LOADING, payload : true})
      fetch( baseUrl + "rt/users", {
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
          dispatch({ type: WARGAS_FETCH_ALL, payload: data });
        })
        .catch((error) => {
          dispatch({ type: WARGAS_ERROR, payload: error?.message });
        })
        .finally(() => {
          const action = fetchWargasLoading()
          dispatch(action)
      });
    };
  };

  export const fetchRequests = () => {
    return (dispatch) => {
      dispatch({type : REQUESTS_FETCH_LOADING, payload : true})
      fetch( baseUrl + "rt/users/submissions", {
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
          dispatch({ type: REQUESTS_FETCH_ALL, payload: data });
        })
        .catch((error) => {
          dispatch({ type: REQUESTS_ERROR, payload: error?.message });
        })
        .finally(() => {
          const action = fetchRequestsLoading()
          dispatch(action)
      });
    };
  };
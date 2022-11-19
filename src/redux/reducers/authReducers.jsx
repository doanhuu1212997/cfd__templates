import userApi from "../../api/userApi";
import createSlice from "../../core/createSlice";
let user = JSON.parse(localStorage.getItem("login"));
let initalState = {
  login: !!user,
  user: user,
  error: null,
  loginerror: null,
  popupLogin: false,popupRes:false,
  
  
};
export function login(data) {
  return (dispatch) => {
    userApi.login(data).then((res) => {
      if (res.error) {
        dispatch({ type: TYPE.error, payload: res.message });
      } else {
       
        dispatch({ type: TYPE.login, payload: res?.data});
      }
    });
  };
}
export function res(data) {
  return (dispatch) => {
    userApi.resgiter(data).then((res) => {
      if (res.error) {
        dispatch({ type: TYPE.error, payload: res.message });
      } else {
        dispatch({ type: TYPE.res, payload: res.data });
      }
    });
  };
}
export function getUpdate() {
  return (dispatch) => {
    userApi.updateInfo().then((res) => {
      dispatch({ type: TYPE.updateinfor, payload: res });
    });
  };
}
let { action, reducer, TYPE } = createSlice({
  name: "auth",
  initalState,
  reducers: {
    login: function (state, action) {
      let user = action.payload;
      let token = action.payload.accessToken;
    
      localStorage.setItem("login", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      return {
        ...state,
        login: true,
        user
      };
    },  
      res: function (state, action) {
      console.log(action.payload)

      return {
        ...state,
    
      };
    },
    logout: function (state, action) {
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      return {
        ...state,
        login: false,
        user: null,
      };
    },
    error: function (state, action) {
      return {
        ...state,
        error: action.payload,
      };
    },
    popupLogin: function (state, action) {
      return {
        ...state,
        popupLogin: action.payload,
      };
    },
    popupRes: function (state, action) {
      return {
        ...state,
        popupRes: action.payload,
      };
    },
    updateinfor: function (state, action) {
      return {
        ...state,
        user: action.payload.data,
      };
    },
  },
});

export default reducer;
export const userLogin = action.login;
export const userLogout = action.logout;
export const Popup = action.popupLogin;
export const updateInfor = action.updateinfor;
export const USER = TYPE;

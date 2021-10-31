import courseApi from "../../api/courseApi"
import createSlice from "../../core/createSlice"
import { NotificationContainer, NotificationManager } from 'react-notifications';
function Notification() {
    createNotification = (type) => {
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info('Info message');
                    break;
                case 'success':
                    NotificationManager.success('Success message', 'Title here');
                    break;
                case 'warning':
                    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                    break;
                case 'error':
                    NotificationManager.error('Error message', 'Click me!', 5000, () => {
                        alert('callback');
                    });
                    break;
            }
        };
    }
}
const initalState = {
    Detail: [],
    Related: [],
    courses: [],
    succes: []

}
export function getCoures() {
    return (dispatch) => {
        courseApi.courses()
            .then(res => {
                dispatch({ type: TYPE.courses, payload: res })
            })
    }
}
export function getDetail(slug) {
    return (dispatch) => {
        courseApi.detail(slug)
            .then(res => {
                dispatch({ type: TYPE.detail, payload: res })
            })
    }
}
export function getRelated(slug) {
    return (dispatch) => {
        courseApi.related(slug)
            .then(res => {
                dispatch({ type: TYPE.related, payload: res })
            })
    }
}
export function getRegister(slug, form) {
    return (dispatch) => {
        courseApi.register(slug, form)
            .then(res => {
                if (res.success) {
                    dispatch({ type: TYPE.register, payload: res.success })
                }
            })
    }
}
let { action, reducer, TYPE } = createSlice({
    name: 'product',
    initalState,
    reducers: {
        courses: function (state, action) {
            return {
                ...state,
                courses: action.payload,


            }
        },
        detail: function (state, action) {
            return {
                ...state,

                Detail: action.payload.data,

            }
        },
        related: function (state, action) {
            return {
                ...state,

                Related: action.payload.data,

            }
        },
        register: function (state, action) {
            return {
                ...state,
                succes: action.payload
            }
        }
    }
})
export default reducer

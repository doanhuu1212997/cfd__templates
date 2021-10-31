import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router"
import { Popup, userLogin, login, loginerror } from "../redux/reducers/authReducers"
import useFormValiDate from '../core/useFormValiDate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    let dispatch = useDispatch()

    let { form, error, inputChang, check } = useFormValiDate({
        username: '',
        password: ''
    },
        {
            rule: {
                username: {
                    required: true,
                    pattern: 'email'
                },
                password: {
                    required: true,
                    pattern: 'password'
                }
            },
            messager: {
                username: {
                    required: "User Name không được để trống"
                }, password: {
                    required: "Mật khẩu không được để trống"
                }
            }
        })
    async function _btnlogin() {
        let error = check();

        if (Object.keys(error).length === 0) {

            dispatch(login(form))
            auth.popupLogin = false
            toast("Đăng nhập thành công ", {
                position: "top-left"
            })
        }
        else {
            toast.error('🦄Mời bạn kiểm tra lỗi', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    const auth = useSelector(state => state.auth)
    return (
        <>
            <div className="popup-form popup-login" id="popupLogin" style={{ display: auth.popupLogin ? 'flex' : 'none' }}>
                <div className="wrap">
                    {/* login-form */}
                    <div className="ct_login" style={{ display: 'block' }}>
                        <h2 className="title">Đăng nhập</h2>
                        {auth.error ? <p className="error_form"> {auth.error} </p> : null}
                        <input name="username" onChange={inputChang} value={form.username} type="text" placeholder="Email / Số điện thoại" />
                        {error.username ? <p className="error_form"> {error.username} </p> : null}
                        <input name="password" onChange={inputChang} value={form.password} type="password" placeholder="Mật khẩu" />
                        {error.password ? <p className="error_form"> {error.password} </p> : null}
                        <div className="remember">
                            <label className="btn-remember">
                                <div>
                                    <input type="checkbox" />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <a href="#" className="forget">Quên mật khẩu?</a>
                        </div>
                        <div className="btn rect main btn-login" onClick={_btnlogin}>đăng nhập</div>
                        <div className="text-register" style={{}}>
                            <strong>hoặc đăng ký bằng</strong>
                        </div>
                        <div>
                            <div className="btn btn-icon rect white btn-google">
                                <img src="img/google.svg" alt="" />
                                Google
                            </div>
                        </div>
                        <div className="close" >
                            <img src="img/close-icon.png" alt="" />
                        </div>
                    </div>
                    {/* email form */}
                    <div className="ct_email">
                        <h2 className="title">Đặt lại mật khẩu</h2>
                        <input type="text" placeholder="Email" />
                        <div className="btn rect main btn-next">Tiếp theo</div>
                        <div className="back" />
                        <div className="close" onClick={() => dispatch(Popup(false))}>
                            <img src="img/close-icon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
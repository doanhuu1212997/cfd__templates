import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Popup, userLogin, userLogout } from "../redux/reducers/authReducers";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../core/AppProvider";
import logo from "../assets/img/logo.svg";
import avatar from "../assets/img/avt.png";
export default function Header() {
  let { linkLoading } = useContext(Context);
  let dispatch = useDispatch();
  function openMenu() {
    document.body.classList.toggle("menu-is-show");
  }
  function over_play() {
    document.body.classList.remove("menu-is-show");
  }
  const auth = useSelector((state) => state.auth);
  const user = auth.user;
  function btn_logout() {
    dispatch(userLogout());
  }
  return (
    <>
      <header id="header">
        <div className="wrap">
          <div className="menu-hambeger" onClick={openMenu}>
            <div className="button">
              <span />
              <span />
              <span />
            </div>
            <span className="text">menu</span>
          </div>
          <NavLink exact to="/" className="logo">
            <img src={logo} alt="" />
            <h1>CFD</h1>
          </NavLink>
          <div className="right">
            {auth.login ? (
              <div className="have-login">
                <div className="account">
                  <a href="#" className="info">
                    <div className="name">{user.name}</div>
                    <div className="avatar">
                      <img src={avatar} alt="" />
                    </div>
                  </a>
                </div>
                <div className="hamberger"></div>
                <div className="sub">
                  <Link to="">Khóa học của tôi</Link>
                  <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                  <a href="#" onClick={btn_logout}>
                    Đăng xuất
                  </a>
                </div>
              </div>
            ) : (
              <div class="not-login bg-none">
                <a
                  href="#"
                  class="btn-register"
                  onClick={() => dispatch(Popup(true))}
                >
                  Đăng nhập
                </a>
                <a href="login.html" class="btn main btn-open-login">
                  Đăng ký
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
      <div>
        <nav className="nav">
          <ul>
            <li className="li_login">
              <a href="#">Đăng nhập</a>
              <NavLink to="/register">Đăng ký</NavLink>
            </li>
            <li>
              <NavLink onClick={linkLoading} exact to="/">
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink onClick={linkLoading} to="/team">
                CFD Team
              </NavLink>
            </li>
            <li>
              <NavLink onClick={linkLoading} to="/courses">
                Khóa Học
              </NavLink>
            </li>
            <li>
              <NavLink onClick={linkLoading} to="/project">
                Dự Án
              </NavLink>
            </li>
            <li>
              <NavLink onClick={linkLoading} to="/contact">
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="overlay_nav" onClick={over_play} />
      </div>
    </>
  );
}

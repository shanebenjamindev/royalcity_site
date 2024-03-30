import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { actLogin } from "../../redux/actions/actAuth";
import "./style.css";
import { useCheckRole } from "../../hooks/useCheckRole";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.authReducer);

  const user = useCheckRole();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const showError = () => {
    if (error) {
      return <div className="alert alert-danger">{error}</div>;
    }
  };

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(actLogin(state, navigate));
  };

  // if (localStorage.getItem("USER_LOGIN")) {
  //     // alert("Đã đăng nhập, đang về trang chủ...")
  // return <Navigate replace to="/" />;
  // }

  return (
    <div className="login-page">
      <div
        className="w-75 d-flex m-auto justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="">
          <h2 className="text-center text-white main__Title">LOGIN ACCOUNT</h2>
          <h4 className="text-center text-white main__Title">
            - Sign In To Use The Service -
          </h4>
          {error && <div className="">{showError()}</div>}
          <form onSubmit={handleLogin} className="align-items-center mt-4">
            <div className="">
              <input
                type="text"
                name="email"
                className="form-control"
                required
                placeholder="Email"
                onChange={handleOnChange}
              />
            </div>

            <div className="mt-3">
              <input
                type="password"
                name="password"
                className="form-control"
                required
                placeholder="Mật khẩu"
                onChange={handleOnChange}
              />
            </div>

            <div className=" text-center">
              <div className="d-flex justify-content-center">
                <div className="my-4">
                  <button type="submit" className="btn__Secondary px-5">
                    Đăng nhập
                  </button>
                </div>
              </div>

              <div className=" ">
                <NavLink
                  to="/register-page"
                  className="cursor-pointer text-white"
                >
                  {" "}
                  Bạn chưa có tài khoản ? Đăng ký
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

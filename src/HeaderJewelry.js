import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../my-app/src/assets/img/LOGO/LogoDLux.png";

const Header = ({ username, onLogout }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [storedUsername, setStoredUsername] = useState("");

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setStoredUsername("");
    onLogout();
  };

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    // Lưu giá trị username vào local storage chỉ một lần khi component được render lần đầu tiên
    if (username) {
      localStorage.setItem("username", username);
    }
    // Lấy giá trị username từ local storage sau khi trang tải
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setStoredUsername(storedUsername);
    }
  }, []);

  return (
    <div id="header">
      <div onClick={handleNavigate} className="Logo-Header">
        <img src={Logo} alt="" />
      </div>
      <div>
        <ul id="nav">
          <li className="Login1">
            <NavLink to="/" exact="true">
              Trang chủ
            </NavLink>
          </li>
          <li className="Login2">
            <NavLink to="/product">Sản phẩm</NavLink>
          </li>
          <li className="Login3">
            <NavLink to="/information">Thông tin</NavLink>
          </li>
          <li className="Login4">
            <NavLink to="/contact">Liên hệ</NavLink>
          </li>

          {/* <li>
            <Link>
              <i class="fa-solid fa-cart-shopping fs20px"></i>
            </Link>
          </li> */}

          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: "relative" }}
          >
            {storedUsername ? (
              <span style={{ padding: "6px" }}>{storedUsername}</span>
            ) : (
              <NavLink to="/login">
                <i className="fa-regular fa-user fs20px"></i>
              </NavLink>
            )}
            {showMenu && storedUsername && (
              <div
                className="dropDown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: -8,
                  background: "#f9f9f9",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "4px",
                  padding: "4px 2px 4px 3px",
                  cursor: "pointer",
                  textAlign: "center",
                  height: "35px ",
                }}
              >
                <p style={{ width: "70px" }} onClick={handleLogout}>
                  <NavLink
                    to="/login"
                    onClick={handleLogout}
                    style={{
                      fontSize: "15px",
                      lineHeight: "25px",
                      padding: "0",
                    }}
                  >
                    Đăng xuất
                  </NavLink>
                </p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

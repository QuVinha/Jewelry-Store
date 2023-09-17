import "./Product.css";
import Header from "../HeaderJewelry";
import "slider-moon/dist/style.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../JewelrySlider/Slider";
import Footer from "../FooterJewelry/Footer";

function Product({ username, onLogout }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [name, setName] = useState(username);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);

  const handleNavigate = (id) => {
    navigate("/product-detail", { state: { id } });
  };

  const handleShow = () => {
    setShowAllProducts((prevShowAllProducts) => !prevShowAllProducts);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedValues((prevValues) => [...prevValues, value]);
    } else {
      setSelectedValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxChange2 = (event) => {
    const value = event.target.value;
    const isChecked2 = event.target.checked;

    if (isChecked2) {
      setSelectedMaterials((prevMaterial) => [...prevMaterial, value]);
    } else {
      setSelectedMaterials((prevMaterial) =>
        prevMaterial.filter((item) => item !== value)
      );
    }
  };

  const handleCheckboxChange3 = (event) => {
    const value = event.target.value;
    const isChecked2 = event.target.checked;

    if (isChecked2) {
      setSelectedPrice((prevPrice) => [...prevPrice, value]);
    } else {
      setSelectedPrice((prevPrice) =>
        prevPrice.filter((item) => item !== value)
      );
    }
  };

  const checkPriceRange = (price, range) => {
    const [min, max] = range.split("-").map((value) => {
      if (value === "under") return 0;
      return parseFloat(value);
    });
    return price >= min && price <= max;
  };

  useEffect(() => {
    // Sử dụng Axios để lấy dữ liệu sản phẩm từ API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // const dataProduct = response.data.map((item) => ({
        //   ...item,
        //   price: parseFloat(item.price), // Chuyển giá thành dạng số
        // }));
        // setProducts(dataProduct);
        // // Lưu dữ liệu vào state products
        const dataProduct = response.data;
        setProducts(dataProduct);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [selectedValues]);

  return (
    <div>
      <div id="main">
        <div id="header">
          <Header onLogout={onLogout} username={username} />
        </div>

        <div id="slider">
          <Slider />
        </div>

        <div id="content1">
          <div id="content-sidebar">
            <div className="sidebar-infor">
              <div className="sidebar-header">
                <h3>Danh mục</h3>
              </div>
              <div className="sidebar-tick">
                <label htmlFor="checkbox1" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="Nhẫn"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />{" "}
                  Nhẫn
                </label>

                <label htmlFor="checkbox2" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="Vòng tay"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />{" "}
                  Vòng tay
                </label>

                <label htmlFor="checkbox3" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="Bông tai"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />{" "}
                  Bông tai
                </label>

                <label htmlFor="checkbox3" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="Dây chuyền"
                    className="checkbox"
                    onChange={handleCheckboxChange}
                  />{" "}
                  Dây chuyền
                </label>
              </div>

              <div className="sidebar-header">
                <h3>Mức giá</h3>
              </div>

              <div className="sidebar-tick">
                <label htmlFor="checkbox1" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="under-200000"
                    className="checkbox"
                    onChange={handleCheckboxChange3}
                  />{" "}
                  Dưới 200.000
                </label>

                <label htmlFor="checkbox2" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="200000-300000"
                    className="checkbox"
                    onChange={handleCheckboxChange3}
                  />{" "}
                  200.000-300.000
                </label>

                <label htmlFor="checkbox3" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="300000-400000"
                    className="checkbox"
                    onChange={handleCheckboxChange3}
                  />{" "}
                  300.000-400.000
                </label>

                <label htmlFor="checkbox3" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="400001-1000000"
                    className="checkbox"
                    onChange={handleCheckboxChange3}
                  />{" "}
                  Trên 400.000
                </label>
              </div>

              <div className="sidebar-header">
                <h3>Chất liệu</h3>
              </div>

              <div className="sidebar-tick">
                <label htmlFor="checkbox1" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="Bạc"
                    className="checkbox"
                    onChange={handleCheckboxChange2}
                  />{" "}
                  Bạc
                </label>

                <label htmlFor="checkbox2" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="Titani"
                    className="checkbox"
                    onChange={handleCheckboxChange2}
                  />{" "}
                  Titani
                </label>

                <label htmlFor="checkbox3" className="checkbox-item">
                  <input
                    type="checkbox"
                    value="Đá"
                    className="checkbox"
                    onChange={handleCheckboxChange2}
                  />{" "}
                  Đá
                </label>
              </div>
            </div>
          </div>

          <div className="content-end">
            <div className="content-product1 flex">
              {products
                .filter((item) => {
                  // Lọc sản phẩm dựa trên giá trị selectedValues
                  if (selectedValues.length === 0) {
                    return true; // Hiển thị tất cả sản phẩm nếu không có checkbox được chọn
                  } else {
                    // Hiển thị sản phẩm có tên trùng khớp với giá trị của selectedValues
                    return selectedValues.some((value) =>
                      item.productname.includes(value)
                    );
                  }
                })
                .filter((item) => {
                  if (selectedMaterials.length === 0) {
                    return true;
                  } else {
                    return selectedMaterials.includes(item.material);
                  }
                })
                .filter((item) => {
                  if (selectedMaterials.length === 0) {
                    return true;
                  } else {
                    return selectedMaterials.includes(item.material);
                  }
                })
                .filter((item) => {
                  if (selectedPrice.length === 0) {
                    return true;
                  } else {
                    return selectedPrice.some((range) =>
                      checkPriceRange(item.price, range)
                    );
                  }
                })
                .slice(0, showAllProducts ? products.length : 12)
                .map((item) => (
                  <div
                    key={item.id}
                    className="content-product-navi"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <div className="product-img">
                      <img
                        // src={`data:image/png;base64,${item.base64}`}
                        // alt={item.productname}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    <div className="content-product-body">
                      <div className="content-product-heading">
                        {item.title}
                      </div>
                      <div className="content-product-price">
                        {/* {Math.floor(item.price).toLocaleString("vi-VN")}đ */}
                        {item.price}đ
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="Button-end">
              <button onClick={handleShow}>
                {showAllProducts ? "Ẩn bớt" : "Xem thêm"}{" "}
                <i
                  className={`fa-solid ${
                    showAllProducts ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Product;

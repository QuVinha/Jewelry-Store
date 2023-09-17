import "./ProductDetails.css";
import axios from "axios";
import LogoLine from "../../src/assets/img/LOGO/logoline.png";
import Slider from "../../src/assets/img/Bìa/Bìa -CTSP.png";
import Header from "../HeaderJewelry";
import React, { useEffect, useState } from "react";
import Footer from "../FooterJewelry/Footer";
import { useNavigate, useLocation } from "react-router-dom";

function ProductDetails({ username, onLogout, storedUsername }) {
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [product2, setProducts2] = useState(null);
  const [show, setShow] = useState(false);

  const handleClickBuy = (id) => {
    if (storedUsername) {
      if (selectedSize) {
        localStorage.removeItem("newTotalPrice");
        localStorage.removeItem("newCount");
        navigate("/BuyNow", {
          state: {
            id,
            selectedSize,
            count,
            product: product2,
            totalPrice: Math.floor(product2.price * count),
          },
        });
      } else {
        alert("Bạn chưa chọn size");
      }
    } else {
      alert("Bạn chưa đăng nhập");
      navigate("/login");
    }
  };

  const handleShow = () => {
    setShow(!show);
  };

  const handleNavigate = (id) => {
    navigate("/product-detail", { state: { id } });
  };

  const Up = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const Down = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const location = useLocation();
  const productId = location.state?.id;

  useEffect(() => {
    if (productId) {
      axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
          const dataProduct2 = response.data;
          setProducts2(dataProduct2);
          console.log("AAAAAAA", response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [productId]);

  useEffect(() => {
    // Sử dụng Axios để lấy dữ liệu sản phẩm từ API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const dataProduct = response.data.slice(0, 4);
        setProduct(dataProduct);
        // Lưu dữ liệu vào state products
        console.log("BBBBBBB", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div id="main">
        <div id="header">
          <Header onLogout={onLogout} username={username} />
        </div>

        <div id="slider">
          <img src={Slider} alt="" />
        </div>

        <div className="BuyHeader">
          <div className="NameHeader">
            <h3>Chi tiết sản phẩm</h3>
          </div>
        </div>

        <div id="content2">
          <div className="content2-product">
            <div className="product-image">
              {/* <img src={`data:image/png;base64,${product2?.base64}`} alt="" /> */}
              <img src={product2?.image} alt="" />
            </div>
            <div className="product-info">
              <div className="product-name">{product2?.title}</div>
              <div className="product-price1">
                <div className="price-after">
                  {Math.floor(product2?.price).toLocaleString("vi-VN")}đ
                </div>
              </div>

              <div className="product-discount flex">
                <div className="discount-name">Mã giảm giá của shop</div>
                <div className="discount-voucher flex">
                  <div className="voucher1 hover">
                    <p>Giảm 10k</p>
                  </div>
                  <div className="voucher2 hover">
                    <p>Giảm 5k</p>
                  </div>
                </div>
              </div>

              <div className="product-size">
                <div className="size-name">Size</div>
                <div className="size-number hover">
                  <div className="number-top flex">
                    <div className="number">
                      <button
                        onClick={() => setSelectedSize("5")}
                        style={{
                          backgroundColor:
                            selectedSize === "5" ? "#FEF2F4" : "#fff",
                          color: selectedSize === "5" ? "#D21312" : "#000000",
                        }}
                      >
                        5
                      </button>
                    </div>
                    <div className="number">
                      <button
                        onClick={() => setSelectedSize("6")}
                        style={{
                          backgroundColor:
                            selectedSize === "6" ? "#FEF2F4" : "#fff",
                          color: selectedSize === "6" ? "#D21312" : "#000000",
                        }}
                      >
                        6
                      </button>
                    </div>
                    <div className="number">
                      <button
                        onClick={() => setSelectedSize("7")}
                        style={{
                          backgroundColor:
                            selectedSize === "7" ? "#FEF2F4" : "#fff",
                          color: selectedSize === "7" ? "#D21312" : "#000000",
                        }}
                      >
                        7
                      </button>
                    </div>
                    <div className="number">
                      <button
                        onClick={() => setSelectedSize("8")}
                        style={{
                          backgroundColor:
                            selectedSize === "8" ? "#FEF2F4" : "#fff",
                          color: selectedSize === "8" ? "#D21312" : "#000000",
                        }}
                      >
                        8
                      </button>
                    </div>
                  </div>
                  <div className="number-bottom flex">
                    <div className="number">
                      <button
                        onClick={() => setSelectedSize("9")}
                        style={{
                          backgroundColor:
                            selectedSize === "9" ? "#FEF2F4" : "#fff",
                          color: selectedSize === "9" ? "#D21312" : "#000000",
                        }}
                      >
                        9
                      </button>
                    </div>
                    <div className="numberE">
                      <button
                        onClick={() => setSelectedSize("10")}
                        style={{
                          backgroundColor:
                            selectedSize === "10" ? "#FEF2F4" : "#fff",
                          color: selectedSize === "10" ? "#D21312" : "#000000",
                        }}
                      >
                        10
                      </button>
                    </div>
                    <div className="numberE">
                      <button
                        onClick={() => setSelectedSize("11")}
                        style={{
                          backgroundColor:
                            selectedSize === "11" ? "#FEF2F4" : "#fff",
                          color: selectedSize === "11" ? "#D21312" : "#000000",
                        }}
                      >
                        11
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-quantity flex">
                <div className="quantity-name">Số lượng</div>
                <div className="quantity-number flex">
                  <div className="quantity-number-select flex hover">
                    <div className="select-num">
                      <p onClick={Down}>-</p>
                    </div>
                    <div className="select-num">
                      <p>{count}</p>
                    </div>
                    <div className="select-num">
                      <p onClick={Up}>+</p>
                    </div>
                  </div>
                  <div className="quantity-number-para flex">
                    {/* {product2.warehouse} sản phẩm có sẵn */}
                  </div>
                </div>
              </div>

              <div className="product-buy flex">
                <div className="btn-add">
                  <button>Thêm giỏ hàng</button>
                </div>
                <div className="btn-buy">
                  <button onClick={() => handleClickBuy(productId)}>
                    <a to="/BuyNow">Mua ngay</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="title2">
            <p>Chi tiết sản phẩm</p>
          </div>

          <div className="product-details flex">
            <div className="details-name">
              <p>Danh mục</p>
              <p>Thương hiệu</p>
              <p>Xuất xứ</p>
              <p>Chất liệu</p>
              <p>Kho hàng</p>
            </div>
            <div className="details-info">
              <p>{product2?.category}</p>
              <p>{product2?.brand}</p>
              <p>{product2?.madein}</p>
              <p>{product2?.material}</p>
              <p>{product2?.warehouse}</p>
            </div>
          </div>

          <div className="title2">
            <p>Mô tả sản phẩm</p>
          </div>

          <div className="product-description">{product2?.description}</div>

          <div className="title-end">
            <p>Các sản phẩm khác</p>
          </div>

          <div className="text-divider">
            <img src={LogoLine} alt="" />
          </div>

          <div className="end-product">
            {product?.map((item) => (
              <div
                key={item.id}
                className="end-product-navi"
                onClick={() => handleNavigate(item.id)}
              >
                {/* <img src={`data:image/png;base64,${item.base64}`} alt="" /> */}
                <img src={item.image} alt="" />

                <div className="end-product-body">
                  <div className="end-product-heading">{item.title}</div>
                  <div className="end-product-price">
                    {Math.floor(item.price).toLocaleString("vi-VN")}đ
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ProductDetails;

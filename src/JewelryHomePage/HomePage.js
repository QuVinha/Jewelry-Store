import "./HomePage.css";
import React, { useEffect, useState } from "react";
import Slider from "../../src/assets/img/Bìa/BiaHome.jpg";
import LogoLine from "../../src/assets/img/LOGO/logoline.png";
import IMGSTT1 from "../../src/assets/img/IMG2.jpg";
import IMGSTT2 from "../../src/assets/img/IMG1.jpg";
import IMG2STT1 from "../../src/assets/img/img-quà tặng.png";
import IMG2STT2 from "../../src/assets/img/imgstt.png";
import CMT1 from "../../src/assets/img/Comment-img/contentlast-img1.webp";
import CMT2 from "../../src/assets/img/Comment-img/contentlast-img2.webp";
import CMT3 from "../../src/assets/img/Comment-img/contentlast-img3.webp";
import CMT4 from "../../src/assets/img/Comment-img/contentlast-img4.webp";
import CMT5 from "../../src/assets/img/Comment-img/contentlast-img5 (2).webp";
import CMT6 from "../../src/assets/img/Comment-img/contentlast-img6.webp";
import axios from "axios";
import Header from "../HeaderJewelry";
import { useNavigate } from "react-router-dom";
import Footer from "../FooterJewelry/Footer";

function HomePage({ username, onLogout }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate("/product-detail", { state: { id } });
  };

  const [product, setProduct] = useState([]);
  const [product1, setProduct1] = useState([]);

  useEffect(() => {
    // Sử dụng Axios để lấy dữ liệu sản phẩm từ API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response);
        // const dataProduct = response.data;
        // const dataProduct1 = response.data;

        // const Number = dataProduct.map((product) => ({
        //   ...product,
        //   price: parseFloat(product.price), // Chuyển giá thành số
        // }));

        // const Number1 = dataProduct1.map((product) => ({
        //   ...product,
        //   price: parseFloat(product.price), // Chuyển giá thành số
        // }));

        // const sortedProducts = Number.sort((a, b) => b.price - a.price);
        // const sortedProducts1 = Number1.sort((a, b) => b.price - a.price);

        // const topProducts = sortedProducts.slice(0, 3);
        // const topProducts1 = sortedProducts1.slice(0, 6);

        // setProduct(topProducts);
        // setProduct1(topProducts1);
        // // Lưu dữ liệu vào state products

        const dataProduct = response.data;
        const dataProduct1 = response.data;

        const sortedProducts = dataProduct.sort((a, b) => b.price - a.price);
        const sortedProducts1 = dataProduct1.sort((a, b) => b.price - a.price);

        const topProducts = sortedProducts.slice(0, 3);
        const topProducts1 = sortedProducts1.slice(0, 6);

        setProduct(topProducts);
        setProduct1(topProducts1);
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

        <div id="content">
          <div className="content-head">
            <div className="content-title">
              <h2 className="title">Sản phẩm mới nhất</h2>
            </div>

            <div className="text-divider">
              <img src={LogoLine} alt="" />
            </div>

            <div className="content-list-product">
              {product.map((item) => (
                <div className="product" key={item.id}>
                  <div
                    className="content-product"
                    onClick={() => handleNavigate(item.id)}
                  >
                    <div className="HP-product-image">
                      <img
                        // src={`data:image/png;base64,${item.base64}`}
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <div className="product-body">
                      <p className="product-heading">{item.title}</p>
                      <p className="product-price-after">
                        {/* {Math.floor(item.price).toLocaleString("vi-VN")}đ */}
                        {item.price}đ
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-center">
            <div className="content-title2">
              <h2 className="title">Về D-Luxury</h2>
            </div>

            <div className="text-divider">
              <img src={LogoLine} alt="" />
            </div>

            <div className="center-image">
              <div className="center-image-stt1">
                <img src={IMGSTT1} alt="" />
                <p>
                  D-Luxury luôn cố gắng xây dựng chuỗi cửa hàng để các bạn nhận
                  được sự trải nghiệm tốt nhất
                </p>
              </div>

              <div className="center-image-stt2">
                <img src={IMGSTT2} alt="" />
                <p>15.000 +++ khách hàng</p>
              </div>
            </div>
            <div className="clear"></div>
          </div>

          <div className="content-mid">
            <div className="content-title3">
              <h2 className="title">Các mẫu bán chạy nhất</h2>
            </div>

            <div className="text-divider">
              <img src={LogoLine} alt="" />
            </div>

            <div className="content-mid-product">
              <div className="content-list-product">
                {product1.map((item) => (
                  <div className="product" key={item.id}>
                    <div
                      className="content-product"
                      onClick={() => handleNavigate(item.id)}
                    >
                      <div className="HP-product-image">
                        <img
                          // src={`data:image/png;base64,${item.base64}`}
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <div className="product-body">
                        <p className="product-heading">{item.title}</p>
                        <p className="product-price-after">
                          {/* {Math.floor(item.price).toLocaleString("vi-VN")}đ */}
                          {item.price}đ
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="content-center">
            <div className="content-title3">
              <h2 className="title">Làm quà tặng</h2>
            </div>

            <div className="text-divider">
              <img src={LogoLine} alt="" />
            </div>

            <div className="center-image2">
              <div className="center-image2-stt1">
                <img src={IMG2STT1} alt="" />
                <p>Lễ tình nhân</p>
              </div>

              <div className="center-image2-stt2">
                <img src={IMG2STT2} alt="" />
                <p>
                  Trang sức vẫn luôn chứng tỏ là quà tặng đẳng cấp bởi sự sang
                  trọng và luôn giữ được giá trị với thời gian
                </p>
              </div>
            </div>
          </div>

          <div className="content-last">
            <div className="content-title4">
              <h2 className="title">Nhận xét từ khách hàng</h2>
            </div>

            <div className="text-divider">
              <img src={LogoLine} alt="" />
            </div>

            <div className="content-last-list">
              <div className="content-last-comment">
                <div className="content-last-img">
                  <img src={CMT1} alt="" />
                </div>
                <div className="content-last-body">
                  <p>
                    Ghé D-Luxury để lựa các mẫu ưng ý mình nhaa, tui mới chọn
                    được em nhẫn cưng lắmm
                  </p>
                </div>
              </div>

              <div className="content-last-comment">
                <div className="content-last-img">
                  <img src={CMT2} alt="" />
                </div>
                <div className="content-last-body">
                  <p>
                    Love with D-Luxurys a kindhearted lunatic. #likesforlike
                    #photooftheday
                  </p>
                </div>
              </div>

              <div className="content-last-comment">
                <div className="content-last-img">
                  <img src={CMT3} alt="" />
                </div>
                <div className="content-last-body">
                  <p>
                    Lễ này nhà D-Luxury lại sale lớn nên Ín lại rinh liền bông
                    tai diện đi chơi nè hihi
                  </p>
                </div>
              </div>
            </div>

            <div className="content-last-list">
              <div className="content-last-comment">
                <div className="content-last-img">
                  <img src={CMT4} alt="" />
                </div>
                <div className="content-last-body">
                  <p>
                    Vòng tay vĩnh viễn, xu hướng mới của giới trẻ mọi người đã
                    có chưaaa
                  </p>
                </div>
              </div>

              <div className="content-last-comment">
                <div className="content-last-img">
                  <img src={CMT5} alt="" />
                </div>
                <div className="content-last-body">
                  <p>
                    "Wearing Jewelry is the way to express who you are without
                    saying a word"
                  </p>
                </div>
              </div>

              <div className="content-last-comment">
                <div className="content-last-img">
                  <img src={CMT6} alt="" />
                </div>
                <div className="content-last-body">
                  <p>
                    My way "D-Luxury. Silence has always been my loudest scream
                    necklace "
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default HomePage;

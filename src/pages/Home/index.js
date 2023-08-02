import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from "~/components/ProductCard";
import productsService from "~/services/productsService";
import Products from "../Products";
import styles from "./Home.module.scss";
import SliderHomeLoading from "./SliderHomeLoading";
const cx = classNames.bind(styles);
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = "LA COLLECTION";
    const params = { sort: "desc" };
    productsService.getAll(params).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);
  let setting = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    dots: true,
    infinity: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bgr")}>
        <div className={cx("bgr__intro")}>
          <h3>NEW SEASON ARRIVALS</h3>
          <p>CHECK OUT ALL TRENDS</p>
        </div>
      </div>
      <div className={cx("grid wide")}>
        <h1 className={cx("title")}>Best Seller</h1>
        <div className={cx("slider")}>
          {loading ? (
            <SliderHomeLoading />
          ) : (
            <Slider {...setting}>
              {products.map((product) => {
                return (
                  <div key={product.id} className={cx("slider-item")}>
                    <ProductCard product={product} />
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
        <Products />
      </div>
    </div>
  );
}

export default Home;

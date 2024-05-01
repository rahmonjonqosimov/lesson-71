import React, { useState } from "react";
import Products from "../components/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useFetch } from "../hooks/useFetch";
import Loading from "../components/Loading";

const Home = () => {
  const [category, setCategory] = useState("all");

  let { data: categories, loading } = useFetch("products/categories");
  let btns = categories?.data?.map((el, inx) => (
    <SwiperSlide key={inx}>
      <button
        name={el}
        onClick={(e) => setCategory(e.target.name)}
        className="btn"
      >
        {el.toUpperCase()}
      </button>
    </SwiperSlide>
  ));
  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <button className="btn" onClick={() => setCategory("all")}>
              ALL
            </button>
          </SwiperSlide>

          {btns}
        </Swiper>
      </div>
      {/* {loading ? <Loading /> : <></>} */}
      <Products category={category} />
    </>
  );
};

export default Home;

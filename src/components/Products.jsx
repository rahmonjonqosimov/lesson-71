import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@mui/material";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { MdOutlineTextsms } from "react-icons/md";

import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Products = ({ category }) => {
  const [count, setCount] = useState(1);

  let url = `/products${
    category === "all" ? "" : `/category/${category}`
  }?limit=${count * 5}`;
  let { data } = useFetch(url, count, category);
  const { loading } = useFetch(url, count);
  let card = data?.data?.products?.map((el) => (
    <div key={el.id} className="prodacts_box_card">
      <div class="prodacts_box_card_img">
        <span class="prodacts_box_card_img_text">{el?.rating}</span>
        <Link to={`/product/${el?.id}`}>
          <img
            src={el?.images[0]}
            alt="Prodacts"
            class="prodacts_box_card_img_prodact"
          />
        </Link>

        <img
          class="prodacts_box_card_img_icon_1"
          src="https://asaxiy.uz/custom-assets/images/icons/compare_gray.svg"
          alt=""
        />
        <img
          class="prodacts_box_card_img_icon_2"
          src="https://asaxiy.uz/custom-assets/images/icons/heart.svg"
          alt="Like"
        />
      </div>
      <h5 title={el?.title} class="prodacts_box_card_title">
        {el?.title}
      </h5>
      <div class="prodacts_box_card_rating">
        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div class="prodacts_box_card_rating_comment">
          <MdOutlineTextsms className="sms" />
          <span>0 ta sharh</span>
        </div>
      </div>
      <h4 class="prodacts_box_card_price">{el?.price} $</h4>
      <h5 class="prodacts_box_card_count">Mahsulotlar soni {el?.stock} ta</h5>
      <div class="prodacts_box_card_btn">
        <button>Horizoq xarid qilish</button>
        <span data-id={el.id} class="count">
          <FaCartShopping className="cart" />
        </span>
      </div>
    </div>
  ));
  return (
    <>
      <section className="products">
        <h2 className="title">Products</h2>
        <div className="container prodacts_box">{card}</div>
      </section>
      {loading ? <Loading /> : <></>}

      <div className="see--more">
        <Button
          className="btn"
          onClick={() => setCount((p) => p + 1)}
          variant="contained"
        >
          SEE MORE
        </Button>
      </div>
    </>
  );
};

export default Products;

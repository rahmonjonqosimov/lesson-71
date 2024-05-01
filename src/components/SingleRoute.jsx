import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SingleRoute = () => {
  let [url, setUrl] = useState("");
  let { id } = useParams();
  let { data } = useFetch(`/products/${id}`);
  console.log(data);
  return (
    <div className="single__page container">
      <div className="images">
        <div className="images__item">
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.data?.images[0]}
            alt={data?.data?.title}
          />
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.data?.images[1]}
            alt={data?.data?.title}
          />
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.data?.images[2]}
            alt={data?.data?.title}
          />
          <img
            onClick={(e) => setUrl(e.target.src)}
            src={data?.data?.images[3]}
            alt={data?.data?.title}
          />
        </div>
        <img
          className="pro__img"
          src={url ? url : data?.data?.thumbnail}
          alt={data?.data?.title}
        />
      </div>
      <div className="product__card__about">
        <h4 class="product__title">{data?.data?.title}</h4>
        <div class="product__share">
          <div class="prodacts_box_card_rating">
            Rating : {data?.data?.rating}
            <div class="prodacts_box_card_rating_comment">
              <span>0 ta sharh</span>
            </div>
          </div>
          <span>
            <img
              src="https://asaxiy.uz/custom-assets/images/icons/share.svg"
              alt="Share"
            />
            <h6>Ulashish</h6>
          </span>
        </div>
        <h5 class="price">Mahsulot narxi : {data?.data?.price} $</h5>
        <p class="product__count">
          Qolgan mahsulotlar soni {data?.data?.stock} ta
        </p>
        <h5 class="product__description">
          Description : {data?.data?.description}
        </h5>
        <h4 class="product__categories">Category: {data?.data?.category}</h4>
      </div>
    </div>
  );
};

export default SingleRoute;

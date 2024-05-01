import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { NumericFormat } from "react-number-format";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let [search, setSearch] = useState("");
  let [menu, setMenu] = useState(false);
  let { pathname } = useLocation();
  let { data } = useFetch(`/products/search?q=${search}`, search);
  let item = ["Home", "About", "Login", "Blog"];
  let nav__items = item?.map((el, inx) => (
    <li key={inx}>
      <NavLink className={"nav__items"} to={"/"}>
        {el}
      </NavLink>
    </li>
  ));
  let searchTabel = data?.data?.products?.map((el) => (
    <div key={el.id} className="product__item">
      <Link
        onClick={() => setSearch("")}
        className="search__pro"
        to={`/product/${el.id}`}
      >
        <img src={el.thumbnail} alt={el.title} />
        <h4 title={el.title}>{el.title}</h4>
        <h5>$ {el.price}</h5>
      </Link>
    </div>
  ));
  console.log(data?.data?.products);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="navbar">
      <div className="container navbar__content">
        <Link className="nav__logo" to={"/"}>
          Q.R
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search__input"
            type="text"
            placeholder="Search..."
          />
          <button>Search</button>
          {search.trim() && search.length > 2 ? (
            <div className="search__card">{searchTabel}</div>
          ) : (
            <></>
          )}
        </form>
        <ul className={menu ? "nav__link show" : "nav__link"}>{nav__items}</ul>
        <div
          onClick={() => setMenu(!menu)}
          className={menu ? "menu menu__open" : "menu"}
        >
          <div className="menu__item"></div>
          <div className="menu__item"></div>
          <div className="menu__item"></div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

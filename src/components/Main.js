import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import Crypto from "./Crypto";
import left1 from "../minions/left1.png";
import right1 from "../minions/right1.png";
const Main = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log("error"));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="left-minions">
        <img src={left1} className="left1" />
      </div>
      <div className="right-minions">
        <img src={right1} className="right2" />
      </div>

      <div className="coin-search">
        <h1 className="coin-text">Coin Tracker</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          ></input>
        </form>
      </div>

      <div className="coin-container">
        {filteredCoins.map((crypto) => {
          return (
            <Crypto
              key={crypto.id}
              name={crypto.name}
              image={crypto.image}
              symbol={crypto.symbol}
              marketcap={crypto.market_cap}
              price={crypto.current_price}
              priceChange={crypto.price_change_percentage_24h}
              volume={crypto.total_volume}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;

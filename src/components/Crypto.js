import React from "react";
import "./crypto.css";

const Crypto = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="image" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>
          <p className={`coin__percent ${priceChange < 0 ? `red` : `green`}`}>
            {priceChange.toFixed(2)}%
          </p>
          <p className="coin-marketcap">
            Mkt Cap ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Crypto;

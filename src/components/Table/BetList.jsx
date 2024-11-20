import React from "react";
import BetItem from "./BetItem";

const BetList = ({ bets, onAddToCart }) => {
  return (
    <>
      {bets.map((bet, index) => (
        <BetItem key={index} bet={bet} onAddToCart={onAddToCart} itemIndex={index} />
      ))}
    </>
  );
};

export default BetList;

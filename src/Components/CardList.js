import React from "react";
import { useSelector } from "react-redux";
import CardDestination from "./CardDestination";
import Search from "./Search";


const CardList = () => {
  const cardList = useSelector((state) => state.cards);
  const { isAdmin, searchValue, searchRating } = useSelector((state) => state);
  return (
    <div>
      <Search />
      <div className="movie-list">
        {cardList
          .filter(
            (el) =>
              el.name.toLowerCase().includes(searchValue.toLowerCase()) &&
              el.rating >= searchRating
          )
          .map((card, index) => (
            <CardDestination card={card} key={index} />
          ))}
      </div>
      {isAdmin ? <addCard /> : null}
    </div>
  );
};

export default CardList;
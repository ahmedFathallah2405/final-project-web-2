import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { deleteCard } from "../redux/actions";
import StarRating from "./StarRating";
import EditCard from "./EditCard";

const CardDestination = ({ card }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteCard(card.id));
  return (
    <div className="movie-card">
      <StarRating rate={card.rating} />
      <h3> {card.name} </h3>
      <img src={card.image} alt={card.name} />
      <p> {card.date} </p>
      {location.pathname === "/admin" ? (
        <div>
          <button className="btn btn-primary" onClick={handleDelete}>
            Delete
          </button>
          <EditCard oldCard={card} />
        </div>
      ) : null}
    </div>
  );
};

export default CardDestination;
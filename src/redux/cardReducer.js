import { cardsData } from "../data";
import {
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD,
  FILTER_BY_NAME,
  FILTER_BY_RATING,
  LOGIN,
} from "./actionTypes";

const init = {
  cards: cardsData,
  searchValue: "",
  searchRating: 1,
  isAdmin: false,
};

const cardReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        movies: [...state.cards, payload],
      };
    case EDIT_CARD:
      return {
        ...state,
        movies: state.cards.map((card) =>
          card.id === payload.id ? { ...card, ...payload } : card
        ),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== payload),
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        searchValue: payload,
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        searchRating: payload,
      };
    case LOGIN:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    default:
      return state;
  }
};

export default cardReducer;
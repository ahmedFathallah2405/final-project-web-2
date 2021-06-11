import {
    FILTER_BY_NAME,
    FILTER_BY_RATING,
    ADD_CARD,
    DELETE_CARD,
    EDIT_CARD,
    LOGIN,
  } from "./actionTypes";

  export const addCard = (newCard) => {
  return {
    type: ADD_CARD,
    payload: newCard,
  };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    payload: id,
  };
};

export const editCard = (editedCard) => {
  return {
    type: EDIT_CARD,
    payload: editedCard,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};

  export const filterName = (text) => {
    return {
      type: FILTER_BY_NAME,
      payload: text,
    };
  };
  
  export const filterRating = (rating) => {
    return {
      type: FILTER_BY_RATING,
      payload: rating,
    };
  };
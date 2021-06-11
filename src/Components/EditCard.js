import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editCard } from "../redux/actions";
import StarRating from "./StarRating";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditCard = ({ oldCard }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: oldCard.id,
    name: oldCard.name,
    date: oldCard.date,
    image: oldCard.image,
    rating: oldCard.rating,
  });
  // handle change in the form input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // handle rating
  const handleRate = (rate) => setForm({ ...form, rating: rate });
  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Edit
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(editCard(form));
            closeModal();
          }}
        >
          <label>Name</label>
          <input
            type="text"
            value={form.name}
            name="name"
            onChange={handleChange}
            // required
          />
          <label> Date of release </label>
          <input
            type="date"
            value={form.date}
            name="date"
            onChange={handleChange}
            // required
          />
          <label> Rating </label>
          <StarRating rate={form.rating} handleRating={handleRate} />

          <label>Image</label>
          <input
            type="url"
            value={form.image}
            name="image"
            onChange={handleChange}
            // required
          />
          <div>
            <button className="btn btn-primary" type="submit">
              Edit
            </button>
            <button className="btn btn-danger" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditCard;

import { useDispatch, useSelector } from "react-redux";
import { filterName, filterRating,  } from "../redux/actions";
import StarRating from "./StarRating";


const Search = () => {
  const {  searchRating, searchValue } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSearch = (e) => dispatch(filterName(e.target.value));
  const handleRating = (rate) => dispatch(filterRating(rate));
  
  return (
    <div className="header-container">
      <h1> have a look about our destinations </h1>
      <div className="search-container">
        <input
          value={searchValue}
          onChange={handleSearch}
          className="inp"
          type="text"
          placeholder="select your preferable destination"
        />
      </div>
      <StarRating rate={searchRating} handleRating={handleRating} />
      
    </div>
  );
};

export default Search;
import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { setNameFilter } from "../../redux/filtersSlice";
import { LiaSearchSolid } from "react-icons/lia";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={s.searchWrapper}>
      <p className={s.titleSearch}>Find contacts by name</p>
      <div className={s.inputForIcon}>
        <LiaSearchSolid className={s.iconFilter} />
        <input
          value={nameFilter}
          onChange={handleChange}
          className={s.input}
          placeholder="Search for name..."
        />
      </div>
    </div>
  );
};
export default SearchBox;

import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { setNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={s.searchWrapper}>
      <p className={s.titleSearch}>Find contacts by name</p>
      <input value={nameFilter} onChange={handleChange} className={s.input} />
    </div>
  );
};
export default SearchBox;

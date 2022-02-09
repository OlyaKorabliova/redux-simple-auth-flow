import { useDispatch, useSelector } from "react-redux";
import { hideContent, showContent } from "../redux/filters/filters.actions";
import { isVisible } from "../redux/filters/filters.selector";

const ViewFilter = () => {
  const dispatch = useDispatch();
  const isVisibleContent = useSelector(isVisible);

  const toggleFilter = async () => {
    if (isVisibleContent) {
      dispatch(hideContent());
    } else {
      dispatch(showContent());
    }
  };

  return (
    <button onClick={toggleFilter}>{isVisibleContent ? "Hide" : "Show"}</button>
  );
};

export default ViewFilter;

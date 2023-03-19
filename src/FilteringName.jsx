import babyName from "./babyNamesData.json";
import Button from "./Button";

const FilteringName = (props) => {
  const filteringList = babyName.filter((name) =>
    name.name.toLowerCase().includes(props.search.toLowerCase())
  );
  <Button arr={filteringList} />;
};
export default FilteringName;

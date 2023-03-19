const Button = (props) => {
  return props.arr
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    .map((name) => {
      return (
        <button className={name.sex === "f" ? "pink" : "blue"} key={name.id}>
          {name.name}
        </button>
      );
    });
};

export default Button;

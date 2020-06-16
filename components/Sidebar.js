const SideBar = (props) => {
  return (
    <div>
      <h1 className="my-4">Стэк</h1>
      <div className="list-group">
        {props.categories.map((c) => (
          <a key={c.id} href="#" className="list-group-item">
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;

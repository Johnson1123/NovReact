const Avater = (props) => {
  return (
    <div>
      <img
        src={props.image}
        alt=""
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <p className="">{props.name}</p>
    </div>
  );
};

export default Avater;

const Person = ({ name, age, img }) => {
  return (
    <div className="person">
      <img src={img} alt="img" />
      <div className="info">
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </div>
  );
};

export default Person;

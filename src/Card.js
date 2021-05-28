import { useState } from "react";
import { birthdays } from "./birthdays";
import Person from "./Person";

const Card = () => {
  const [people, setPeople] = useState(birthdays);
  const peopleLength = people.length;
  const clearAll = () => {
    setPeople([]);
  };
  return (
    <div className="container">
      <h1>{peopleLength} Birthdays Today</h1>
      {people.map((person) => {
        const { img, name, age } = person;
        return <Person key={person.id} img={img} name={name} age={age} />;
      })}
      <button type="button" class="btn" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Card;

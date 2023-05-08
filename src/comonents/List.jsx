import React from 'react';
import Person from "./Person";

const List = ({newPeople}) => {
    return (
        <section>
            <h3>{`Soo on my list is ${newPeople.length} People.`}</h3>

            {newPeople.map((people) => {
                const {id, name, city, age, image } = people
                return (
                    <Person key={id} name={name} city={city} age={age} image={image} />
                )
            })}
        </section>
    );
}

export default List;

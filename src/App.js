import React, {useState} from "react";
import {people} from "./data";
import List from "./comonents/List";

function App() {
    const [newPeople, setNewPeople] = useState(people);
    return (
        <main>
            <section className='container'>
                <List newPeople={newPeople}/>
                <button type='button' className='btn btn-block' onClick={() => setNewPeople([])}>Clear all</button>
            </section>

        </main>
    );
}

export default App;

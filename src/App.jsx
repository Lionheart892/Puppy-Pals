import { useState } from 'react'
import { puppyList } from './data'
import './path-to-css.css'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", setPuppies);

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={() => handleClick(puppy.id)} key={puppy.id}>{puppy.name}</p>;
           })
       }
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App

import React from 'react';
import Searchlist from '../../components/Searchlist/Searchlist';
import Contact from '../../components/Contact/Contact';
import "./Checkp.scss";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { BY_ANIMAL, BY_PLANTNAME } from '../../utils/queries';



const Checkp = () => {

  const [value, setValue] = useState("");
  const [filter, setFilter]= useState("")
  const {data, loading, refetch} = useQuery(BY_PLANTNAME, {variables: {name:value}})

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
     refetch()
    console.log("search ", searchTerm);
  };

  console.log(data)
  const plantInfo = data?.specificPlantS || []

  return (
    <div className='checkp'> 
    <div className="App">
    <div className="search-container">
      <div className="search-inner">
      <h2>Search a plants name to see if the plant is Safe for Cats and Dogs</h2>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)}> Search </button>
        <button onClick={() => window.location.reload(false)}>Refresh</button>
        <h4>Search by pet type</h4>
        <ul className="suggestions-list" role="navigation">
          <div className="type"><li onClick={()=> setFilter("cat")}>cat friendly</li></div>
          <div className="type"><li onClick={()=> setFilter("dog")}>dog friendly</li></div>
    </ul>
      </div>
      <div className="result">
      {(value || filter) && plantInfo.filter(plant => {
        const myFilter = new RegExp(filter)
        return myFilter.test(plant.animalSafe)
      }).map(plant => (
        <div key = {plant.name}>
          <h1>{plant.name}</h1>
          <h2>{plant.animalSafe}</h2>
        </div>
        
      ))}
      {/* <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.full_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onSearch(item.full_name)}
              className="dropdown-row"
              key={item.full_name}
            >
              {item.full_name}
            </div>
          ))}
      </div> */}
    </div>
  </div>
  </div>

      <Searchlist/>
      <Contact/>
    </div>
  )
}

export default Checkp;
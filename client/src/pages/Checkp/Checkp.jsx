import React from 'react';
import Searchlist from '../../components/Searchlist/Searchlist';
import Contact from '../../components/Contact/Contact';
import "./Checkp.scss";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { BY_PLANTNAME } from '../../utils/queries';


// search plants that are safe for animals - by plant name , filter plants database by safe to cats/dogs
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
    
  };


  const plantInfo = data?.specificPlantS || []
///     returns result of the search and filter 
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
      
    </div>
  </div>
  </div>

      <Searchlist/>
      <Contact/>
    </div>
  )
}

export default Checkp;
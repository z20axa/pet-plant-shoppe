import React from 'react'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import "./Checkp.scss"
import { useState } from "react";

const Checkp = () => {
  const data=[
    { "full_name": "Farrel Hoggin" },
    { "full_name": "Irma Olech" },
    { "full_name": "Emmit Gallacher" },
    { "full_name": "Dunn Astlet" },
    { "full_name": "Burg Peaddie" },
    { "full_name": "Molli Knoller" },]

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };
  return (
    <div className='checkp'> <div className="App">
    <h1>Search by plants name</h1>

    <div className="search-container">
      <div className="search-inner">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)}> Search </button>
      </div>
      <div className="dropdown">
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
      </div>
    </div>
  </div>

      <Categories/>
      <Contact/>
    </div>
  )
}

export default Checkp;
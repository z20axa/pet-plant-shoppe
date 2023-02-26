// import React from "react";
// // import { useState } from "react";
// // import { useParams } from "react-router-dom";
// import List from "../../components/List/List";
// import "./Products.scss";


import React from "react";
import "./Products.scss";

const Products =() => {
  return (
    
    <div className='Products'>
      
      
      picture</div>
    )
  }
  export default Products

// const Products = () => {
// const Products = () => {
//   const catId = parseInt(useParams().id);
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [sort, setSort] = useState(null);
//   const [selectedSubCats, setSelectedSubCats] = useState([]);

//   const { data, loading, error } = useFetch(
//     `/sub-categories?[filters][categories][id][$eq]=${catId}`
//   );

//   const handleChange = (e) => {
//     const value = e.target.value;
//     const isChecked = e.target.checked;

//     setSelectedSubCats(
//       isChecked
//         ? [...selectedSubCats, value]
//         : selectedSubCats.filter((item) => item !== value)
//     );
//   };

//   return (
//     <div className="products">
//       <div className="left">
//         <div className="filterItem">
//           <h2> Categories</h2>
//           {data?.map((item) => (
//             <div className="inputItem" key={item.id}>
//               <input
//                 type="checkbox"
//                 id={item.id}
//                 value={item.id}
//                 onChange={handleChange}
//               />
//               <label htmlFor={item.id}>{item.attributes.title}</label>
//             </div>
//           ))}
//         </div>
//         <div className="filterItem">
//           <h2>Filter by price</h2>
//           <div className="inputItem">
//             <span>0</span>
//             <input
//               type="range"
//               min={0}
//               max={1000}
//               onChange={(e) => setMaxPrice(e.target.value)}
//             />
//             <span>{maxPrice}</span>
//           </div>
//         </div>
//         <div className="filterItem">
//           <h2>Sort by</h2>
//           <div className="inputItem">
//             <input
//               type="radio"
//               id="asc"
//               value="asc"
//               name="price"
//               onChange={(e) => setSort("asc")}
//             />
//             <label htmlFor="asc">Price (Lowest first)</label>
//           </div>
//           <div className="inputItem">
//             <input
//               type="radio"
//               id="desc"
//               value="desc"
//               name="price"
//               onChange={(e) => setSort("desc")}
//             />
//             <label htmlFor="desc">Price (Highest first)</label>
//           </div>
//         </div>
//       </div>
//       <div className="right">
//         <img
//           className="catImg"
//           src="https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1592489923742-MQ4VG6GV3R5K037UMOG6/DSC_1499.jpeg?format=1500wg"
//           alt=""
//         />
//         <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
//       </div>
//     </div>
//   );
// };

// export default Products;

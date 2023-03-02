
import CategoryList from "./CategoryList";
import { useQuery } from "@apollo/client";
import { IN_STORE } from "../../utils/queries";


export default function CategoryQ(props){
  /// --- using querry
    const { loading, data } = useQuery(IN_STORE, {
        variables: {
          "inStore": true
        }
      });
      const plants = data?.inStore || [];
      console.log("here is data ", data);
      console.log("here is plants ", plants);

    return (
        <>
        
        { loading ? (
        <p>Still loading</p>
      ) : (
        <CategoryList

        plants={plants}
        
         />
      )
      }
      </>
      
    )}
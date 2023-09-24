import { useFetchCollectionQuery , useAddgcollectionlistMutation , useFetchgcollectionQuery} from "../store";
import { useState } from "react";

import Collection from "./collection";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";






function ShowNavMenu ({a,setshownavemenubro,handleclose}) {
    

    const images = [
        { id: 1, image: image1 },
        { id: 2, image: image2 },
        { id: 3, image: image3 },
        { id: 4, image: image4 },
     
      ];
      
   
    const {data , isError , isLoading } = useFetchCollectionQuery(a);
   
  
    const addgcollectionlistsss = (id) => {
       // addgcollectionlist(id);
    }

    
    let renderdata = null;
    if  (isLoading) {
        renderdata = <div>loading</div>
    }
    else if (isError){
        renderdata = <div>error</div>
    }
    else if(data){
        renderdata = data.map((item)=>{
            
           
          
            return <div className=" cursor-pointer  font-serif" key={item.id}>
                <div className="font-bold text-3xl    ">{item.name}</div>
                <Collection handleclose={handleclose} item = {item} />

                
            </div> 
        })
    }
    const renderimage = images.map((image)=>{
        const isMatch = image.id === a;
        

        return isMatch &&  <img className="w-100 h-100
        cursor-pointer transition-transform transform hover:scale-110 rounded-2xl " src={image.image}  />
    })

    return  <div className="flex flex-row gap-10"><div className="flex flex-row gap-14  font-serif text-2xl">{renderdata}
   
    </div>
    {renderimage}</div>

}
export default ShowNavMenu;
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useFetchforsearchQuery, AddPath  ,Addgcid,useFetchgcQuery} from "../store";
import Renderitplease from "../components/Renderitplease";

function Search(){
    const dispatch = useDispatch();
    const searchterm = useSelector((state)=>{
        return state.search.searchterm;
    });
    const isearch = useSelector((state)=>{
        return state.search.isearch ;
    });
    const showitems = (item) => {
      
            dispatch(AddPath('items'));
            dispatch(Addgcid(item.id));
    }
   
    const {data,error,isLoading} = useFetchforsearchQuery();
    let  rendersearch = null;
    if(searchterm !== null){

        if(isLoading){
            rendersearch = <div>loadding</div>
        }
        else if(error){
            rendersearch =<div>eror</div>
        } 
        else if(data){
            let sorteddata = data;
            if(searchterm !== ''){
                sorteddata = 
                    data.filter((item)=>item.name.toLowerCase().includes(searchterm.toLowerCase()));
                
            }

            rendersearch =  sorteddata.map((item)=>{
               
                return <div onClick={()=>{showitems(item)}} className="hover:bg-slate-300"><Renderitplease item = {item} /></div>
            });
        }
    }


    //const carsList = useSelector(({ Cars: { Cars, searchTerm } }) => {
        //return Cars.filter((car) =>
        //  car.name.toLowerCase().includes(searchTerm.toLowerCase())
       // );
     // });

  

    
    return <div className="Relative">{rendersearch}</div>
}
export default Search;
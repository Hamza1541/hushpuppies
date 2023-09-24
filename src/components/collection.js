import { useFetchgcollectionQuery , useAdditemMutation} from "../store";
import { AddPath,Addgcid,showNav } from '../store';
import { useDispatch } from "react-redux";


function Collection({item}){
    const dispatch = useDispatch();
const {data,error,isLoading}  = useFetchgcollectionQuery(item.id);
const handlecollectionclick = (id) => {
    dispatch(AddPath('items'));
   
    dispatch(Addgcid(id));
   // handleclose();
   dispatch(showNav(false));
}


let renderlist = null;
if(isLoading){
    renderlist = <div>loading</div>
}
else if(error){
    renderlist = <div>error</div>
}
else if(data){
    renderlist = data.map((item)=>{
        return <div onClick={()=>{handlecollectionclick(item.id)}} 
         className="hover:font-bold gap-8" key={item.id}>
            {item.name}

        </div>
    })
}

    return <div>{renderlist}</div>
}
export default Collection;
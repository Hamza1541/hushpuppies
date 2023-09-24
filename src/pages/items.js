import { useSelector } from "react-redux";
import {useFetchitemsQuery,useFetchanotherQuery,useFetchtohighlisghtQuery} from '../store';
import Showitem from "../components/itemcomp";

function Items(){
    const gid = useSelector((state)=>{
        return state.itemsl.gid
    });
    
    const gcid = useSelector((state)=>{
        return state.itemsl.gcid
    });
   
    const {currentData,isError,loading} = useFetchanotherQuery(gcid);
    let renderitemlistname = null;
    if(loading){
        renderitemlistname = <div>loading</div>
    }
    else if(isError){
        renderitemlistname = <div>error</div>
    }
    else if(currentData){
        renderitemlistname = currentData.map((item)=>{
            return <div>{item.name}</div>
        })
    }
    const { data,error,isLoading } = useFetchitemsQuery(gcid);
    let renderitems= null;
    if(isLoading){
        renderitems = <div>loading</div>
    }
    else if(error){
        renderitems  = <div>error</div>
    }
    else if(data){
        renderitems = data.map((item)=>{
            return <div className="p-2 shadow-2xl">
                <Showitem item = {item}/>
            </div>
        })
    }
    return <div>
        <div className="  p-5 flex justify-center items-center text-5xl  font-serif  tracking-wide ">{renderitemlistname}-{gid}</div>
        <div className="grid grid-cols-4 grid-rows-1 gap-5 mt-5"> 
        {renderitems}

    </div>
    </div>
}
export default  Items;
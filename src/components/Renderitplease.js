import {useFetchgcQuery}from "../store";
import RenderG from "./RenderG";

function Renderitplease({item}) {
    const  {data , isError, isLoading} = useFetchgcQuery(item.gcid);

    let rendergcid =  null;
    if(isLoading){
        rendergcid = <div>laoding</div>
    }
    else if(isError){
        rendergcid = <div>error</div>
    }
    else if(data){
        rendergcid = data.map((item)=>{
            return  <div className="flex flex-row"><RenderG item = {item} /></div>
        })
    }


    return <div className="flex flex-row p-5 text-2xl
     font-serif border-b-2 border-slate-300 cursor-pointer" >
        <p className=" hover:text-slate-500 ml-4 underline">{item.name}</p> 
         <p className="ml-3">{rendergcid}</p>
        

    </div>
}

export default Renderitplease;
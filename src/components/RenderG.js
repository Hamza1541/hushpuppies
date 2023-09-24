import {useFetchGidQuery} from '../store';

function RenderG({item}) {

    const {data,error,isLoading} = useFetchGidQuery(item.gid);
    let rendergender = null;
    if(isLoading){
        rendergender = <div>loading</div>
    }
    else if(error){
        rendergender = <div>error</div>
    }
    else if(data){
        rendergender = data.map((item)=>{
            return <div>{item.label}</div>
        })
    }
    return <div className='flex flex-col '><p className=''>{item.name}</p> <p className=' '>{rendergender}</p></div>
}
export default RenderG;

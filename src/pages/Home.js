import men from '../assets/home-men.png';
import women from '../assets/home-women.png';
import kids from '../assets/home-kids.png';
import acc from '../assets/home-ass.png';
import {useFetchGenderQuery} from '../store/api/GenderApi';
import HomeImage from '../components/homeimage';

function Home(){
   const images = [
      {image : men, id:1},
      {image : women, id:2},
      {image : kids, id:3},
      {image : acc, id:4}
   ]
  // const pic = images[1];
   //console.log(pic.id);

   const {data,error,isLoading} = useFetchGenderQuery();
   let renderhome = null;
   if(isLoading){
      renderhome = <div>loading</div>
   }
   else if(error){
      renderhome = <div>error</div>
   }
   else if(data){
      const hello = data;
      const itemmen = hello ? hello[0] : null;
      const itemkids = hello ? hello[2] : null;
   
   const itemwomen = hello ? hello[1] : null;
   const itemacc = hello ? hello[3] : null;
      renderhome = <div className='flex flex-col' >
      <div className='flex flex-row'>
         <HomeImage image = {men} item={itemmen} />
         <HomeImage image = {kids} item={itemkids}/>
      </div>
      <div className='flex flex-row'>
      <HomeImage image={acc} item={itemacc}/>
      <HomeImage image = {women} item={itemwomen} />
         
      </div>
      

   </div>
   }




   return<div>
      {renderhome}
   </div>
}
export default Home;
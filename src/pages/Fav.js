import React from "react";
import loginplease from "../assets/loginplease.png";
import { useSelector } from "react-redux";
import { useFetchfavQuery } from "../store";
import Showitemss from "../components/showitemsss";

function Fav() {
  const iscurentuser = useSelector((state) => state.userss.iscurentuser);
  const curentuser = useSelector((state) => state.userss.currentuser);

  const { data, error, isLoading } = useFetchfavQuery(curentuser);

  let renderfav = null;

  if (isLoading) {
    renderfav = <div>loading</div>;
  } else if (error) {
    renderfav = <img className="w-full h-full" src={loginplease} />;
  } else if (data) {
    renderfav = data.map((item) => (
      <div className="border-2 shaddow-2xl rounded-2xl gap-10"  key={item.userid}>
        <Showitemss item={item.item} />
      </div>
    ));
  } else {
    renderfav = <img className="w-full h-full" src={loginplease} />;
  }

  return <div className="grid grid-cols-3 grid-rows-3 gap-10 mt-10">{renderfav}</div>;
}

export default Fav;

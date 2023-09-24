import React, { useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { AddPath,Addgid,showNav,seta } from '../store';

function ImageWithHover({ image, item }) {
  const dispatch = useDispatch();
  const a = useSelector((state)=>{
    return state.navbar.a;
})
  const [isHovered, setIsHovered] = useState(false);
  const handleclick = () => {
    dispatch(showNav(true));
    dispatch(seta(item.id));
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
    document.body.style.overflow = 'hidden';
  }

  return (
    <div
      className="relative rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={image}
          alt="Your Image"
          className="transition-transform transform hover:scale-110"
        />
      </div>
      {isHovered && (
        <div className="absolute inset-20 flex items-center justify-center bg-white bg-opacity-20 text-slate-700">
          <div className="flex flex-row items-center">
            <HiOutlineArrowNarrowRight className="text-5xl text-white" />
            <p onClick={handleclick}  className="text-5xl pl-20 pr-20 
            font-serif pb-3 pt-3 cursor-pointer tracking-widest 
            hover:bg-slate-800 hover:text-white bg-slate-50">
              {item.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageWithHover;

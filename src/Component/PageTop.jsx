import React from "react";
import { BiWallet } from "react-icons/bi";

const PageTop = ({ topic ,icon, title }) => {
  return (
    <div className="flex flex-row py-12 w-[100%] ">
     {icon}
      <h1 className="font-bold text-white text-2xl">{topic} {title}</h1>
    </div>
  );
};

export default PageTop;

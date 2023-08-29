import React from "react";

const WalletTop = ({ dabba }) => {
  return (
    <div>
      <div className="py-9 ">
        <h3 className="text-2xl font-sans text-slate-400 ">Main Balance</h3>
        <h1 className="font-bold text-yellow-300 text-4xl">12,035 METABT</h1>
      </div>
      <div className="flex flex-col justify-between place-items-center text-center gap-5 md:flex-row ">
        {dabba.map((items, index) => {
          return (
            <div className="box-content border-[1px] rounded-sm w-[100%] h-20 md:w-56  bg-slate-700 border-gray-400">
              <div className="pt-3 text-slate-300">
                <h3>{items.Name}</h3>
                <h2 className="font-bold">{items.age}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WalletTop;

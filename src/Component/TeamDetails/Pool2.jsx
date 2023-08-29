import React, { useState } from "react";

const Pool2 = ({ entries, index, pool, box2, index2 }) => {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore((x) => !x);
  };

  return (
    <>
      {/*  */}
      <div className="p-3 bg-sky-950" key={index}>
        <button onClick={() => handleClick()}>{pool}</button>
        {showMore && (
          <div className="pt-3 box-content lg:h-48 lg:border-sky-950 h-56 place-items-center rounded-md border-2 border-sky-950 ">
            <div className=" grid grid-cols-1 justify-center place-items-center lg:flexflex-row lg:justify-between rounded-md text-slate-400">
              <div className=" grid grid-cols-1 px-4 text-sm">
                <h1 className="">Show</h1>
                <input type="text" className="w-16 rounded-sm"></input>
                <h1>Entries</h1>
              </div>

              <div className="lg:flex grid grid-cols-1 lg:pt-4 gap-1 p-2 ">
                <h1 className="text-center text-sm lg-text-md">Search</h1>
                <input type="text" className="w-32 h-8 rounded-md" />
              </div>
            </div>
            <div className="flex flex-row justify-between rounded-md border-b-2 border-b-black text-slate-500 overflow-auto">
              {entries.map((entry, index) => (
                <div className="flex flex-row p-5 text-sm " key={index}>
                  <div className="text-md text-slate-300 ">
                    <button>{entry.num}</button>
                    <button>{entry.name}</button>
                    <button>{entry.mail}</button>
                    <button>{entry.Ref}</button>
                    <button>{entry.staking}</button>
                    <button>{entry.pool}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/*  */}
    </>
  );
};

export default Pool2;

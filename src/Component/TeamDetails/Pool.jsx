// import React, { useState } from "react";

// const Pool = () => {
//   const [show, setShow] = useState(false);

//   const [selectedPool, setSelectedPool] = useState(null)

//   const handlePoolClick = (pool)=>{
//      if (selectedPool === pool){
//       setSelectedPool(null)
//      }
//      else {
//       setSelectedPool(pool)
//      }
//   }

//   const showPool = () => {
//     setShow(!show);
//   };

//   const [entries, setEntries] = useState([
//     {
//       num: "snNo.",
//     },
//     { name: "username" },
//     { mail: "email" },
//     { Ref: "Ref-By" },
//     { staking: "SelfStaking" },
//     { pool: "FirstPoolStaking" },
//   ]);

//     const [pools, setPools] = useState([
//       {pool:'pool 1'},
//       {pool:'pool 2'},
//       {pool:'pool 3'},
//       {pool:'pool 4'},
//       {pool:'pool 5'},
//       {pool:'pool 6'},
//       {pool:'pool 7'},
//       {pool:'pool 8'},
//       {pool:'pool 9'},
//       {pool:'pool 10'},
//       {pool:'pool 11'},

//     ])

//   return (
//     <>
//       <div className="">
//         <div
//           className="border-content h-screen w-full  rounded-md text-slate-400 "
//           style={{ paddingInline: "1%" }}
//         >
//        <div className=" divide-y divide-dashed">
//            {
//             pools.map((pool,index)=>{

//              return(
//               <div className="p-3" key={index}>
//                 <button onClick={()=>handlePoolClick(pool)} >{pool}</button>

//               </div>
//              )
//             })
//           }
//           {/* input */}
//           <div
//             className={` relative ${
//               show ? "block" : "hidden ease-in-out duration-500"
//             }  pt-3 box-content h-28 place-items-center rounded-md bg-sky-950 `}
//           >
//             <div className=" flex flex-row justify-between rounded-md text-slate-400">
//               <div className="px-4 text-sm">
//                 <h1 className="">Show</h1>
//                 <input type="text" className="w-16 rounded-sm"></input>
//                 <h1>Entries</h1>
//               </div>

//               <div className="flex pt-4 gap-2 p-4 ">
//                 <h1>Search</h1>
//                 <input type="text" className="w-32 h-8 rounded-md" />
//               </div>
//             </div>

//             <div className="flex flex-row justify-between rounded-md border-b-2 border-b-black text-slate-500">
//               {entries.map((index) => {
//                 return (
//                   <div className="flex flex-row p-5 text-sm ">
//                     <div className="text-md text-slate-300">
//                       <button>{index.num}</button>
//                       <button>{index.name}</button>
//                       <button>{index.mail}</button>
//                       <button>{index.Ref}</button>
//                       <button>{index.staking}</button>
//                       <button>{index.pool}</button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           {/*  */}
// </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Pool;



import React, { useState } from "react";
import Pool2 from "./Pool2";

const Pool = () => {
  const entries = [
    { num: "snNo." },
    { name: "username" },
    { mail: "email" },
    { Ref: "Ref-By" },
    { staking: "SelfStaking" },
    { pool: "FirstPoolStaking" },
  ];
  const pools = [
    "pool 1",
    "pool 2",
    "pool 3",
    "pool 4",
    "pool 5",
    "pool 6",
    "pool 7",
    "pool 8",
    "pool 9",
    "pool 10",
    "pool 11",
  ];

  return (
    <div className="bg-sky-950">
      <div
        className="border-content h-screen w-full  rounded-md text-slate-400 "
        style={{ paddingInline: "1%" }}
      >
        <div className="divide-y divide-dashed">
          {pools.map((pool, index) => {
            return <Pool2 index={index} entries={entries} pool={pool} />;
          })}
          {/*  */}
        </div>
      </div>
    </div>
  );
};
export default Pool;

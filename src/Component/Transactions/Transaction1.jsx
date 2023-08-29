import React, { useState } from "react";
import { GrTransaction } from "react-icons/gr";
import THistory from "./T History";

const Transaction1 = () => {
  const [button, setButton] = useState([
    {
      name: "transactions",
      className:
        "bg-yellow-400 text-black text-sm rounded-full text-center w-32 h-8",
      id: 1,
    },
    {
      name: "DepositHistory",
      className:
        "bg-gray-500 text-gray-300 hover:bg-yellow-400 hover:text-black font-sans rounded-full text-sm w-32 h-9 pt-1 text-center ",
      id: 2,
    },
    {
      name: "WithdrawalHistory",
      className:
        "bg-gray-500 text-gray-300 hover:bg-yellow-400 hover:text-black font-sans rounded-full text-sm w-32 h-9 pt-1 text-center ",
      id: 4,
    },
    {
      name: "RewardHistory",
      className:
        "bg-gray-500 text-gray-300 hover:bg-yellow-400 hover:text-black rounded-full text-sm w-32 h-9 pt-1 text-center ",
      id: 5,
    },
    {
      name: "BalanceTransactions",
      className:
        "bg-gray-500 text-gray-300 hover:bg-yellow-400 hover:text-black rounded-full text-sm w-36 h-9 pt-1 text-center ",
      id: 6,
    },
  ]);

  return (
    <div style={{ paddingInline: "10%" }} className="">
      <div className="py-11 ">
        <div className="flex text-white gap-2">
          <GrTransaction className="bg-white rounded-full mt-2" size={35} />
          <h1 className="font-sans font-bold text-xl pt-3  text-white">
            All Transactions
          </h1>
        </div>
        <div className="lg:flex lg:flex-row grid grid-cols-2 md:grid-cols-3 gap-8">
          {button.map((items) => {
            return (
              <div className="p-1">
                <div className={items.className}>
                  <button className=" ">{items.name}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <THistory />
    </div>
  );
};

export default Transaction1;

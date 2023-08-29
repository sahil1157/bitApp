import React, { useState } from "react";

const HD2 = () => {
  const [message, setMessage] = useState({});

  const handleClick = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });

    console.log(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
    alert("We have recieved your message");
    console.log(message);
  };

  return (
    <>
      <div className="pt-7">
        {/* input */}
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-6 ">
          <div className="flex flex-col ">
            <label className="text-xl text-white">Subject*</label>

            <select className="w-[100%] h-14 rounded-md p-4 font-sans">
              <option value="">Withdraw Issue</option>
              <option value="cat">Deposit Issue</option>
              <option value="hamster">Stalking Issue</option>
              <option value="parrot">Affiliat Issue</option>
              <option value="spider">Profile Updating</option>
              <option value="goldfish">Others</option>
            </select>
          </div>
          {/* input */}

          {/* select */}
          <div>
            <div className="flex flex-col ">
              <label className="text-xl text-white">Reference ID</label>
              <input
                type="text"
                placeholder="Paste Your Reference ID"
                className="w-[100%] h-14 rounded-md p-4 font-sans"
              />
            </div>
          </div>
          {/* select */}

          {/* date */}
          <div>
            <div className="flex flex-col font-sans">
              <label className="text-xl text-white">Date</label>
              <input
                type="date"
                placeholder="Paste Your Reference ID"
                className="w-[100%] h-14 rounded-md p-4 font-sans"
              />
            </div>
          </div>
          {/* date */}

          {/* No of Coins */}
          <div>
            <div className="flex flex-col font-sans">
              <label className="text-xl text-white">No. Of Coins</label>
              <input
                type="text"
                placeholder="Paste Your Reference ID"
                className="w-[100%] h-14 rounded-md p-4 font-sans"
              />
            </div>
          </div>
          {/* No of Coins */}

          {/* priority */}
          <div>
            <div className="flex flex-col ">
              <label className="text-xl text-white font-sans">Priority*</label>

              <select className="w-[100%] h-14 rounded-md p-4  font-sans">
                <option value="">High</option>
                <option value="dog">Medium</option>
                <option value="cat">Low</option>
              </select>
            </div>

            <div>
              <div className="flex flex-col font-sans pt-5 w-1/2">
                <form onSubmit={handleSubmit}>
                  <label className="text-xl text-white">Message*</label>
                  <input
                    type="text"
                    placeholder="Paste Your Message here"
                    className="w-[205%] h-20 rounded-md p-4 font-sans"
                    onChange={handleClick}
                    name="msg"
                  />
                </form>

                <div className="place-items-center pt-5 justify-center">
                  <button
                    type="submit"
                    className="w-36 h-10 bg-yellow-400 rounded-full text-black font-sans text-center"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* priority */}
        </div>
      </div>
    </>
  );
};

export default HD2;

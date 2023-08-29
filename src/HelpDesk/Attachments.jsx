import React from "react";

const Attachments = () => {


    const submitIt = ()=>{
        console.log('submitted successfully')
        alert("The file has SuccessFully been submitted...")
    }
  return (
    <>
      <div>
        <div className="text-center text-sm font-sans text-gray-400 pt-7">
           <h1>Attachments</h1> 
           <h1 className="text-red-600 ">Max 5 files can be uploaded. Maximum upload size is 1 MB</h1> 
           <input type="file" name=" .jpg, .jpeg, .png, .pdf, .doc, .docx " />
           <h1>Allowed File Extensions: .jpg, .jpeg, .png, .pdf, .doc, .docx </h1>
            </div>
            <div className="pt-16">
            <button onClick={submitIt} className="w-full h-14 rounded-md bg-yellow-400 text-black font-sans text-center">Submit</button>
            </div>
             <br/>
            <br />
      </div>
    </>
  );
};

export default Attachments;

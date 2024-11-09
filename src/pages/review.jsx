import React, { useState } from "react";

const JobApplicationCard = ({ name, reusme, university, email}) => {
    const onAccept=()=>{

    }
  return <div className="bg-[--primary-light] rounded-lg flex justify-between p-5 mb-5 text-white">
    <div className="flex flex-col">
      <h3 className="text-lg font-bold m-0">{name}</h3>
      <p className="text-sm opacity-70 my-1">{university}</p>
      <p className="text-sm opacity-70">{email}</p>
    </div>
    <div className="flex flex-col items-end">
      <a href="#" className="text-[#CBDEA5] no-underline mb-2 text-sm hover:scale-105">Resume Link</a>
      <p className="text-xs opacity-70 text-right mb-2">Please click accept only after sending referral mail</p>
      <div className="flex gap-3">

        <button
          className="bg-[--secondary-light] text-[#31342C] px-5 py-2 rounded-md cursor-pointer"
          onClick={onAccept}
        >
          Accept
        </button>
      </div>
    </div>
  </div>
};

const JobApplicationList = () => {
    const [data, setData] = useState({
        title:"SWE Intern",
        company:"ABC Company",
        time:"6 Months",
        location:"Bangalore",
        comments:[
            {
                name:"Rhytham Aggarwal",
                university:"Delhi Technological University",
                email:"aggarwalrhytham2003@gmail.com",
                resume:"https://github.com/Divij-Mahajan/ReHive"
            },
        ]
    })

    return <div className="w-[70%] mx-auto p-5">
    <div className="flex justify-between items-end mb-5">
      <h2 className="text-2xl text-white">{data.title}, {data.company}</h2>
      <p className="text-base text-white opacity-70">{data.time}, {data.location}</p>
    </div>
    {data.comments.map((comment)=>{
        return <JobApplicationCard name={comment.name} email={comment.email} university={comment.university} resume={comment.resume} />
    })}
  </div>

}

export default JobApplicationList;

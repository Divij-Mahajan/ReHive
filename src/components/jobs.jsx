import { useNavigate } from "react-router-dom";
import JobCard from "./jobcards";

function Jobs({role}) {
  const navigate=useNavigate();
  let data = [{
    title: "SWE Intern",
    company: "ABC Company",
    time: "6 Months",
    location: "Bangalore",
    referrers: 26,
    applications: 532,
    fee: 5,
    bounty: 3,
    days: 10,
  }]
  return <div>
    <div className="mb-8 flex items-center ">
      <div className="w-full pl-3 rounded-lg bg-white flex items-center">
      <i className="fa-solid fa-magnifying-glass text-[#606A5C] text-xl"></i>
      <input
        type="text"
        placeholder="Search for job titles here..."
        className="w-full py-2 px-4 rounded-lg text-[#606A5C] placeholder-[#9CA3AF]"
        />
        </div>
      {role=="referrer"&&<div onClick={()=>{navigate("/referrer/new")}} className="text-white bg-[--primary-dark] flex cursor-pointer ml-3 text-xl w-40 h-full p-1 items-center justify-around rounded-lg py-2">
       <i className="fa-solid fa-plus text-xl"></i><div >New Job</div>
      </div>}
    </div>
    <div>
    {data.map((d)=><JobCard role={role} title={d.title} company={d.company} location={d.location} time={d.time} referrers={d.referrers} applications={d.applications} days={d.days} fee={d.fee} bounty={d.bounty}/>)}
    </div>
  </div>
}
export default Jobs;
import { useNavigate } from "react-router-dom";

function JobCard({role,bounty,about,title,company,time,location,referrers,applications,fee,days}) {
  const navigate=useNavigate()
  return (
    <div className="bg-[--primary-light] p-6 rounded-lg flex justify-between items-center text-[--secondary-light]">
      <div>
        <h2 className="text-xl font-semibold">{title}, {company}</h2>
        <p className="text-sm text-[#9CA3AF]">{time}, {location}</p>
        <p className="text-white mb-4 mt-2">{about}</p>
        <p className="mt-2 text-sm">
           {(role=="seeker")?
          `Application Fee: ${fee} HIVE`:`Bounty Tokens: ${bounty} HIVE`}
        </p>
      </div>
      <div className="text-start">
        <button onClick={()=>{
          if(role=="seeker"){

          }else{
            navigate("/referrer/review")
          }
        }} className="bg-[#D2C7B2] text-[#2A2A25] mb-12 py-2 px-4 rounded-lg font-medium">{(role=="seeker")?"Apply Now":"Refer This Job"}</button>
        {/* <p className="text-sm text-[#9CA3AF]">{days} days left</p> */}
      </div>
    </div>
  )
}
export default JobCard;
import { useNavigate } from "react-router-dom";

function ProgressCard({title,company,time,location,status}) {
  const navigate=useNavigate()
    return (
      <div className="bg-[--primary-light] p-6 rounded-lg flex justify-between items-start text-[--secondary-light]">
        <div>
          <h2 className="text-xl font-semibold">{title}, {company}</h2>
          <p className="text-sm text-[#9CA3AF]">{time}, {location}</p>
          
        </div>
        <div className="text-right self-start pr-4">
          {(status=="progress")?
          <div >In Progress</div>
          :(status=="rejected")?
          <div >Not Shortlisted</div>
          :(status=="accepted")?
          <div >
            <div>Accepted</div>
            <div className="text-sm text-white">Please check your inbox for referral mail and confirm or report here.</div>
            <div className="flex w-full justify-end gap-10 mt-10">
              <button className="text-sm p-2">Recieved Mail</button>
              <button className="text-sm p-2">Report No Mail</button>
            </div>
          </div>
          :(status=="manual")?
          <div >
            <div>Manual Review</div>
            <div className="text-sm text-white">Please review candidates as soon as possible.</div>
            <div className="flex w-full justify-end gap-10 mt-10">
              <button className="text-sm p-2" onClick={()=>{navigate("/referrer/review")}}>Review Candidates</button>
            </div>
          </div>
          :(status=="completed")?
          <div >
            <div>Completed</div>
            
          </div>
          :<></>}
        </div>
      </div>
    )
  }
  export default ProgressCard;
import seekerImage from "/seeker.png"
import refererrImage from "/refererr.png"
import { useNavigate } from "react-router-dom";
function Role() {
    const navigate=useNavigate()
    return <div>
        <div className="text-5xl h-full w-full flex flex-col p-7 items-center text-[--secondary-light]">Select your Role</div>
        <div className="flex h-full w-full justify-center gap-48 pt-12">
            <div className="w-1/4 p-3 h-[60vh] flex flex-col justify-between rounded-lg border-[--secondary-light] border-2 items-center hover:scale-105 duration-200" onClick={()=>{navigate("/seeker")}}>
                <div className="text-3xl text-[--secondary-light]">Seeker</div>
                <img src={seekerImage} className="w-1/3"></img>
                <div className="text-2xl text-[--secondary-light]">Looking for Referrals</div>
            </div>
            <div className="w-1/4 p-3 h-[60vh] flex flex-col justify-between rounded-lg border-[--secondary-light] border-2 items-center hover:scale-105  duration-200" onClick={()=>{navigate("/referrer")}}>
                <div className="text-3xl text-[--secondary-light]">Referrer</div>
                <img src={refererrImage} className="w-1/3"></img>
                <div className="text-2xl text-[--secondary-light]">Looking for Referrals</div>
            </div>
        </div>
    </div>
}
export default Role;
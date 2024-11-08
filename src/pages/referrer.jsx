import { useParams } from "react-router-dom";
import Jobs from "../components/jobs";
import SideBar from "../components/sidebar";
import Progress from "../components/progress";
import Profile from "../components/profile";
import ReferralProfile from "../components/referrerProfile";
import NewJob from "./newJob";
import Review from "./review";


function Referrer() {
    const {screen}=useParams()
    return (
        <div className="flex min-h-screen bg-[#606A5C] text-[#D2C7B2]">
            <SideBar role={"referrer"} screen={screen}/>
            <div className="w-full p-10">
            {(screen=="jobs")?
                <Jobs role={"referrer"}/>
            :(screen=="progress")?
                <Progress/>
            :(screen=="profile")?
                <ReferralProfile/>
            :(screen=="new")?
                <NewJob/>
            :(screen=="review")?
                <Review/>
            :<></>}
            </div>
        </div>
    );
}
export default Referrer;


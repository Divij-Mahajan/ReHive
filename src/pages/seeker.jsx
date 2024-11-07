import { useParams } from "react-router-dom";
import Jobs from "../components/jobs";
import SideBar from "../components/sidebar";
import Progress from "../components/progress";
import Profile from "../components/profile";

function Seeker() {
  const {screen}=useParams()
  return (
    <div className="flex min-h-screen bg-[#606A5C] text-[#D2C7B2]">
        <SideBar role={"seeker"} screen={screen}/>
        <div className="w-full p-10">
          {(screen=="jobs")?
            <Jobs/>
          :(screen=="progress")?
          <Progress/>
        :(screen=="profile")?
        <Profile/>
      :<></>
          }
        </div>
    </div>
  );
}

export default Seeker;

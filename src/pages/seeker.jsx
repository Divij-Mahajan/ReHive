import { useParams } from "react-router-dom";
import Jobs from "../components/jobs";
import SideBar from "../components/sidebar";

function Seeker() {
  const {screen}=useParams()
  return (
    <div className="flex min-h-screen bg-[#606A5C] text-[#D2C7B2]">
        <SideBar role={"seeker"}/>
        <div className="w-full p-10">
          {(screen=="jobs")?
            <Jobs/>
          :(screen=="application")?
          <Jobs/>
        :(screen=="profile")?
        <Jobs/>
      :<></>
          }
        </div>
    </div>
  );
}

export default Seeker;

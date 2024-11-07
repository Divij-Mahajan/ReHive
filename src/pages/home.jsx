import { ReactTyped } from "react-typed";
import "../styles/home.css"
import log from "/logo.png"
import home from "/home.png"
import name from "/name.png"
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate()
    return <div className="w-full bg-[--primary-dark] flex flex-col items-center p-10 pt-32">
        <div className="flex w-full justify-around">
            <div className="flex flex-col pl-24 pt-12 space-y-10">
                <div className="w-2/3">
                 <img src={name} className="w-full "></img>
                </div>
                <ReactTyped
                className="text-4xl  text-white "
                strings={[
                    'Get Referrals faster than ever',
                    'Give out Referrals even faster',
                    
                ]}
                typeSpeed={25}
                backSpeed={20}
                loop
                />
                <button className="bg-[#CBDEA5] w-1/4 text-black" onClick={()=>{navigate("/role")}}>Get Started</button>
            </div>
            <img src={home} className="w-1/3 mr-20 mt-20"></img>
        </div>
                <div className="w-3/5 h-[65vh] bg-[--primary-light] rounded-md mt-44 overflow-hidden shadow-2xl shadow-[--primary-dark]">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/DJO_9auJhJQ?si=_-68ocyQJrz0IcV2?modestbranding=1&controls=0&rel=0&autohide=1`}
                        title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
    </div>
}
export default Home;
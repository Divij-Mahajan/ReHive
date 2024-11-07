import { ReactTyped } from "react-typed";
import "../styles/home.css"
import image from "/logo.png"
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate=useNavigate()
    return <div className="w-full h-full">
        <div className="slant-background bg-[--primary-dark] w-full h-[150vh] absolute top-0 left-0 -z-20"></div>
        <div className="w-full h-full">
            <div className="flex justify-between items-center mt-2 px-7">
                <img src={image} width={70} ></img>
                <button className="h-12" onClick={()=>{navigate("/role")}}>Get Started</button>
            </div>
            <div className="w-full flex flex-col justify-start pt-44 items-center gap-10">
                <ReactTyped
                className="text-4xl  text-white "
                strings={[
                    'Tired of cold texting to get Referrals?',
                    'Overwhelmed by number of people asking for referrals?',
                    'Unable to find referrals quickly?',
                ]}
                typeSpeed={25}
                backSpeed={20}
                loop
                />
                <div className="text-5xl">ReHive Makes it Easy!</div>
                <button className="bg-[--primary-dark] text-white" onClick={()=>{navigate("/role")}}>Get Started</button>
                <div className="w-3/5 h-[65vh] bg-[--primary-light] rounded-md mt-44 overflow-hidden shadow-2xl shadow-[--primary-dark]">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/wBdPmaDzynk?si=gjPw0y7bvOv98tTq?modestbranding=1&controls=0&rel=0&autohide=1`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
                </div>
                <div className="mt-24 w-full h-full"></div>
            </div>
        </div>
    </div>
}
export default Home;
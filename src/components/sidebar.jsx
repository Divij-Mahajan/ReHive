import { useNavigate } from "react-router-dom"
import logo from "/logo.png"
function SideBar({role}) {
    const navigate=useNavigate()
    return (
    <aside className="w-1/4 bg-[--primary-dark] flex flex-col justify-between items-center py-10">
      <div className="w-full flex justify-center">
        <img src={logo} className="w-1/4"></img>
      </div>
      <nav className="flex flex-col space-y-10 text-xl items-center">
        <div onClick={()=>{navigate(`/${role}/jobs`)}} className=" border-b-[1px] pb-1 px-2 border-[--secondary-light] hover:scale-105 hover:px-3 duration-200">Search Jobs</div>
        <div onClick={()=>{navigate(`/${role}/application`)}} className="pb-1 px-2 hover:scale-105 hover:px-3 duration-200">Applications</div>
        <div onClick={()=>{navigate(`/${role}/profile`)}} className="pb-1 px-2 hover:scale-105 hover:px-3 duration-200">Profile</div>
      </nav>
      <div className="flex space-x-12">
        <a target="_blank" href="https://github.com/Divij-Mahajan/ReHive" >
          <i className="fab scale-150 fa-github hover:scale-125 duration-200"></i>
        </a>
        <a target="_blank" href="https://youtu.be/wBdPmaDzynk" >
          <i className="fab scale-150 fa-youtube hover:scale-125 duration-200"></i>
        </a>
        <a target="_blank" href="https://ecency.com/sinusoid/@divijmahajan2004/rehive-your-network-your-next" >
          <i className="fab scale-150 fa-solid fa-hashtag hover:scale-125 duration-200"></i>
        </a>
      </div>
    </aside>
    )

}
export default SideBar;
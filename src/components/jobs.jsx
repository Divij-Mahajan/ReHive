import { useNavigate } from "react-router-dom";
import JobCard from "./jobcards";
import { Client, PrivateKey } from '@hiveio/dhive';
import { useEffect, useState } from "react";

function Jobs({role}) {
  let opts = {};
  opts.addressPrefix = 'STM';
                        opts.chainId =
                            'beeab0de00000000000000000000000000000000000000000000000000000000';
  const client = new Client('https://api.hive.blog', opts);

  const getPosts=async () => {
    client.database.getDiscussions('blog',{
      tag:import.meta.env.VITE_ACCOUNT
    }).then(result=>{
      console.log(result)
      let ds=[]
      for (let i = 0; i < result.length; i++) {
        const element = result[i];
        //if(element.title.startsWith("ReHive")){
          let d=JSON.parse(element.json_metadata)
          d['permLink']=element.permlink
          d['applied']=false
          d['referrers']= 26
          d['applications']=532
          d['days']= 10
          ds.push(d)
          console.log(d)
          if(localStorage.getItem('Seeker Applied')){
            let l=JSON.parse(localStorage.getItem('Seeker Applied'))
            for (let i = 0; i < l.length; i++) {
              if(l[i]==element.permlink){
                d['applied']=true;
                break;
              }
            }
          //}
          //if(d.jobTitle!=""&&d.applicationFee!=""){
            //}
          }
        }
        setData(()=>ds)
    })
  };
  const [data, setData] = useState([])
  useEffect(()=>{
    getPosts()
  },[])


  const navigate=useNavigate();
  // let data = [{
  //   jobTitle: "SWE Intern",
  //   Company: "ABC Company",
  //   Duration: "6 Months",
  //   Location: "Bangalore",
  //   About: '',
  //   applicationFee: 5,
  //   bountyFee: 3,

  //   referrers: 26,
  //   applications: 532,
  //   days: 10,
  // }]

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
    <div className="h-full flex flex-col gap-4">
    {data.map((d)=><JobCard role={role} about={d.About} title={d.jobTitle} company={d.Company} location={d.Location} time={d.Duration} referrers={d.referrers} applications={d.applications} days={d.days} fee={d.applicationFee} bounty={d.bountyFee} permLink={d.permLink} applied={d.applied}/>)}
    </div>
  </div>
}
export default Jobs;
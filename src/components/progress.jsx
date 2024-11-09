import { useEffect, useState } from "react";
import ProgressCard from "./progressCard";
import { Client, PrivateKey } from '@hiveio/dhive';
import hivesigner from "hivesigner"



function Progress({role}) {
  // let token,client;
  // if(!localStorage.getItem("Seeker Details")){
  //   return <div className="text-2xl">Please fill details on the Profile page first</div>
  // }
  // let details=JSON.parse(localStorage.getItem("Seeker Details"))
  // if(details.name==''||details.email==''||details.university==''||details.resume==''){
  //   return <div className="text-2xl">Please fill all the major details on the Profile page</div>
  // }
  //   try {
  //     token = window.location.href.split("?")[1].split("&")[0].split("=")[1]
  //   } catch {
  //     token = ""
  //   }
  //   if (token != "") {
  //     client = new hivesigner.Client({
  //         app: 'demo',
  //         callbackURL: window.location.href,
  //         scope: ['vote', 'comment', "transfer"],
  //         accessToken: token
  //     });
  //   } else {
  //       client = new hivesigner.Client({
  //           app: 'demo',
  //           callbackURL: window.location.href,
  //           scope: ['vote', 'comment', "transfer"],
  //       });
  //       let state;
  //       var link = client.getLoginURL(state);
  //       window.location.replace(link);
  //   }
  
  // const getReply = async (permLink) => {
  //     let opts = {};
  //     opts.addressPrefix = 'STM';
  //                           opts.chainId =
  //                               'beeab0de00000000000000000000000000000000000000000000000000000000';
  //     const clientH = new Client('https://api.hive.blog', opts);
      
  //     client.me().then(
  //       r=>{
  //         let d={status:"progress"}
  //         clientH.database.call('get_content_replies', [r.user, permLink]).then(result => {
  //             if(result.length!=0){
  //               if(result.body=='Approved'){
  //                 d['status']='accepted'
                  
  //               }
  //             }
  //          });
  //          clientH.database.getDiscussions('blog',{
  //           tag:import.meta.env.VITE_ACCOUNT
  //         }).then(result=>{
  //           for (let i = 0; i < result.length; i++) {
  //             if( permLink == result[i]){
  //               let x=JSON.parse(result[i].json_metadata)
  //               d.time=x.Duration;
  //               d.title=x.jobTitle;
  //               d.company=x.Company;
  //               d.location=x.Location;
  //             }
  //           }
  //           setData(()=>{[...data,d]})
  //         })
  //     })
  // }
  // const getComment = async (permLink) => {
  //     let opts = {};
  //     opts.addressPrefix = 'STM';
  //                           opts.chainId =
  //                               'beeab0de00000000000000000000000000000000000000000000000000000000';
  //     const clientH = new Client('https://api.hive.blog', opts);
  //     let search=details.name+'\n'+details.email
  //     clientH.database.call('get_content_replies', [import.meta.env.VITE_ACCOUNT, permLink]).then(result => {
  //       for (let i = 0; i < result.length; i++) {
  //         if(result[i].body.startsWith(search)){
  //           getReply(result.permLink)
  //         }
  //       }
  //   });
  // }
  // const fetchProgress=async()=>{
  //   if(localStorage.getItem("Seeker Applied")){
  //     let l=JSON.parse(localStorage.getItem("Seeker Applied"))
  //     for (let i = 0; i < l.length; i++) {
  //       const permLink = l[i];
  //       getComment(permLink)
  //     }
  //   }
  //  }
  const [data, setData] = useState([])
  useEffect(()=>{
    //fetchProgress()
  },[])
  return <div>
    <div className="mb-8 flex items-center bg-white pl-3 rounded-lg">
    </div>
    <div className="text-2xl text-white">Coming Soon</div>
      Eventually will show all applied / referred jobs
    <div>
    {data.map((d)=><ProgressCard title={d.title} company={d.company} location={d.location} time={d.time} status={d.status}/>)}
    </div>
  </div>
}
export default Progress;
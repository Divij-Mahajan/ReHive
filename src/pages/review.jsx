import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Client, PrivateKey } from '@hiveio/dhive';
import hivesigner from "hivesigner"

const JobApplicationCard = ({ name, resume, university, email,client,author,permLink,postPermLink}) => {

    const onAccept = () => {
      client.me().then(
        r=>{
        const account = r.user;
        const body = "approved";
        const parent_author = author;
        const parent_permlink = permLink;
        const newPermlink = Math.random()
        .toString(36)
        .substring(2);
        client.comment(parent_author,parent_permlink,account,newPermlink,"",body,'').then((r)=>{
          if(localStorage.getItem("Referrer Past")){
            localStorage.setItem("Referrer Past",JSON.stringify([...JSON.parse(localStorage.getItem("Referrer Past")),postPermLink]))
          }
        })
      })
    };
  return <div className="bg-[--primary-light] rounded-lg flex justify-between p-5 mb-5 text-white">
    <div className="flex flex-col">
      <h3 className="text-lg font-bold m-0">{name}</h3>
      <p className="text-sm opacity-70 my-1">{university}</p>
      <p className="text-sm opacity-70">{email}</p>
    </div>
    <div className="flex flex-col items-end">
      <a href={resume} target="_blank" className="text-[#CBDEA5] no-underline mb-2 text-sm hover:scale-105">Resume Link</a>
      <p className="text-xs opacity-70 text-right mb-2">Please click accept only after sending referral mail</p>
      <div className="flex gap-3">

        <button
          className="bg-[--secondary-light] text-[#31342C] px-5 py-2 rounded-md cursor-pointer"
          onClick={onAccept}
        >
          Accept
        </button>
      </div>
    </div>
  </div>
};

const JobApplicationList = () => {
  const location = useLocation();
  const permLink = location.state?.permLink;
  const Location = location.state?.Location;
  const title = location.state?.title;
  const time = location.state?.time;
  const company = location.state?.company;
  const token = location.state?.token;
  let client = new hivesigner.Client({
    app: 'demo',
    callbackURL: window.location.href,
    scope: ['vote', 'comment', "transfer"],
    accessToken: token
});
  console.log(permLink)
  let data={
    title:title,
    company:company,
    time:time,
    location:Location,
  }
  const [comments, setComments] = useState([])
  // comments:[
  //     {
  //         name:"Rhytham Aggarwal",
  //         university:"Delhi Technological University",
  //         email:"aggarwalrhytham2003@gmail.com",
  //         resume:"https://github.com/Divij-Mahajan/ReHive"
  //     },
  // ]
  const readComments=()=>{
    let opts = {};
    opts.addressPrefix = 'STM';
                          opts.chainId =
                              'beeab0de00000000000000000000000000000000000000000000000000000000';
    const clientH = new Client('https://api.hive.blog', opts);
  
    clientH.database.call('get_content_replies', [import.meta.env.VITE_ACCOUNT, permLink]).then(result => {
        for (let i = 0; i < result.length; i++) {
          let dl=result[i].body.split('\n')
          //console.log(result[i])
          //code to show comments who haven't been accepted yet
          if(dl.length>3){
            let d={
              name:dl[0],
              university:dl[2],
              email:dl[1],
              resume:dl[3],
              author:result[i].author,
              permLink:result[i].permlink,

            }

            setComments(()=>[...comments,d])
          }
        }
    });
}
  
  
    
    useEffect(()=>{
        readComments()
    },[])

    return <div className="w-[70%] mx-auto p-5">
    <div className="flex justify-between items-end mb-5 ">
      <h2 className="text-2xl text-white">{data.title}, {data.company}</h2>
      <p className="text-base text-white opacity-70">{data.time}, {data.location}</p>
    </div>
    {comments.length==0?"No Seekers Found":""}
    {comments.map((comment)=>{
        return <JobApplicationCard name={comment.name} email={comment.email} university={comment.university} resume={comment.resume} client={client} permLink={comment.permLink} author={comment.author} postPermLink={permLink}/>
    })}
  </div>

}

export default JobApplicationList;

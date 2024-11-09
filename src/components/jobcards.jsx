import { useNavigate } from "react-router-dom";
import hivesigner from "hivesigner"
function JobCard({role,bounty,about,title,company,time,location,referrers,applications,fee,days,permLink,applied}) {

  const handleApply = () => {
    if(!localStorage.getItem("Seeker Details")){
      alert("Please fill details on the Profile page first")
      return;
    }
    let details=JSON.parse(localStorage.getItem("Seeker Details"))
    if(details.name==''||details.email==''||details.university==''||details.resume==''){
      alert("Please fill all the major details on the Profile page")
      return;
    }

    let token,client;
    try {
      token = window.location.href.split("?")[1].split("&")[0].split("=")[1]
    } catch {
      token = ""
    }
    if (token != "") {
      client = new hivesigner.Client({
          app: 'demo',
          callbackURL: window.location.href,
          scope: ['vote', 'comment', "transfer"],
          accessToken: token
      });
    } else {
        client = new hivesigner.Client({
            app: 'demo',
            callbackURL: window.location.href,
            scope: ['vote', 'comment', "transfer"],
        });
        let state;
        var link = client.getLoginURL(state);
        window.location.replace(link);
    }
    client.me().then(
      r=>{
      const account = r.user;
      const body = details.name+"\n"+details.email+"\n"+details.university+"\n"+details.resume+"\n";
      const parent_author = import.meta.env.VITE_ACCOUNT;
      const parent_permlink = permLink;
      const permlink = Math.random()
      .toString(36)
      .substring(2);
      
      client.comment(parent_author,parent_permlink,account,permlink,"hell",body,'');
      const op = [
        'transfer',
        {
          from: r.user, 
          to: import.meta.env.VITE_ACCOUNT,         
          amount: fee+' HIVE',   
          memo: 'Applying for '+permLink      
        }
      ];
      if(!localStorage.getItem("Seeker Applied")){
        localStorage.setItem("Seeker Applied",JSON.stringify([permLink]))
      }else{
        localStorage.setItem("Seeker Applied",JSON.stringify([...JSON.parse(localStorage.getItem("Seeker Applied")),permLink]))
      }
      hivesigner.sendOperation(op, {
          callback: window.location.href
        }, (err, result) => {
          if (err) {
            console.error('Error with hivesigner operation:', err);
          } else {
              
              console.log('Hivesigner operation successful:', result);
            }
        });
  })
  };
  const navigate=useNavigate()
  return (
    <div className="bg-[--primary-light] p-6 rounded-lg flex justify-between items-center text-[--secondary-light]">
      <div>
        <h2 className="text-xl font-semibold">{title}, {company}</h2>
        <p className="text-sm text-[#9CA3AF]">{time}, {location}</p>
        <p className="text-white mb-4 mt-2">{about}</p>
        <p className="mt-2 text-sm">
           {(role=="seeker")?
          `Application Fee: ${fee} HIVE`:`Bounty Tokens: ${bounty} HIVE`}
        </p>
      </div>
      <div className="text-start">
        {(applied&&role=="seeker")?<div className="cursor-not-allowed bg-[#867b67] text-[#2A2A25] mb-12 py-2 px-4 rounded-lg font-medium">Applied</div>:

          <button onClick={()=>{
            if(role=="seeker"){
              handleApply()
            }else{
              let token,client;
              try {
                token = window.location.href.split("?")[1].split("&")[0].split("=")[1]
              } catch {
                token = ""
              }
              if (token != "") {
                client = new hivesigner.Client({
                    app: 'demo',
                    callbackURL: window.location.href,
                    scope: ['vote', 'comment', "transfer"],
                    accessToken: token
                });
              } else {
                  client = new hivesigner.Client({
                      app: 'demo',
                      callbackURL: window.location.href,
                      scope: ['vote', 'comment', "transfer"],
                  });
                  let state;
                  var link = client.getLoginURL(state);
                  window.location.replace(link);
              }
              navigate('/referrer/review', { state:{permLink,title,company,location,time,token,bounty} })
              
            }
          }} className="bg-[#D2C7B2] text-[#2A2A25] mb-12 py-2 px-4 rounded-lg font-medium">{(role=="seeker")?"Apply Now":"Refer This Job"}</button>
        }
        {/* <p className="text-sm text-[#9CA3AF]">{days} days left</p> */}
      </div>
    </div>
  )
}
export default JobCard;
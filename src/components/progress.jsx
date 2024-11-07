import ProgressCard from "./progressCard";
function Progress() {
  let data = [{
    title: "SWE Intern",
    company: "ABC Company",
    time: "6 Months",
    location: "Bangalore",
    status:"completed",
  }]
  return <div>
    <div className="mb-8 flex items-center bg-white pl-3 rounded-lg">
    </div>
    <div>
    {data.map((d)=><ProgressCard title={d.title} company={d.company} location={d.location} time={d.time} status={d.status}/>)}
    </div>
  </div>
}
export default Progress;
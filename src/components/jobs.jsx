import JobCard from "./jobcards";

function Jobs() {
  let data = [{
    title: "SWE Intern",
    company: "ABC Company",
    time: "6 Months",
    location: "Bangalore",
    referrers: 26,
    applications: 532,
    fee: 5,
    days: 10,
  }]
  return <div>
    <div className="mb-8 flex items-center bg-white pl-3 rounded-lg">
      <i class="fa-solid fa-magnifying-glass text-[#606A5C] text-xl"></i>
      <input
        type="text"
        placeholder="Search for job titles here..."
        className="w-full py-2 px-4 rounded-lg text-[#606A5C] placeholder-[#9CA3AF]"
      />
    </div>
    <div>
    {data.map((d)=><JobCard title={d.title} company={d.company} location={d.location} time={d.time} referrers={d.referrers} applications={d.applications} days={d.days} fee={d.fee}/>)}
    </div>
  </div>
}
export default Jobs;
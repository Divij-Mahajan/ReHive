function JobCard({title,company,time,location,referrers,applications,fee,days}) {
  return (
    <div className="bg-[--primary-light] p-6 rounded-lg flex justify-between items-center text-[--secondary-light]">
      <div>
        <h2 className="text-xl font-semibold">{title}, {company}</h2>
        <p className="text-sm text-[#9CA3AF]">{time}, {location}</p>
        <p className="mt-2 text-sm">
          Referrers: {referrers} &nbsp;&nbsp; Applications: {applications} &nbsp;&nbsp; Application Fee: {fee} HIVE
        </p>
      </div>
      <div className="text-right">
        <button className="bg-[#D2C7B2] text-[#2A2A25] py-2 px-4 rounded-lg font-medium">Apply Now</button>
        <p className="text-sm text-[#9CA3AF]">{days} days left</p>
      </div>
    </div>
  )
}
export default JobCard;
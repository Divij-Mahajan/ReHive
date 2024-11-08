import { useState } from "react";

function NewJob() {
    const [formData, setFormData] = useState({
        Company: '',
        jobTitle: '',
        Duration: '',
        Location: '',
        About: '',
        applicationFee: '',
        bountyFee: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    return (
        <div className="flex bg-[--secondary-dark] text-[--secondary-light]">
            <div className="flex-1 p-10 space-y-6">
                <section className="mb-8">
                    <h2 className="text-xl text-[--primary-dark] border-b border-[--primary-dark] font-bold pb-1 mb-6">Job Details</h2>
                    
                    {/* Company Field */}
                    <div className="flex items-center mb-6">
                        <label className="text-[--primary-dark] text-lg w-1/6">Company:</label>
                        <input
                            type="text"
                            name="Company"
                            value={formData.Company}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    {/* Job Title Field */}
                    <div className="flex items-center mb-6">
                        <label className="text-[--primary-dark] text-lg w-1/6">Job Title:</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    {/* Duration Field */}
                    <div className="flex items-center mb-6">
                        <label className="text-[--primary-dark] text-lg w-1/6">Duration:</label>
                        <input
                            type="text"
                            name="Duration"
                            value={formData.Duration}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    {/* Location Field */}
                    <div className="flex items-center mb-6">
                        <label className="text-[--primary-dark] text-lg w-1/6">Location:</label>
                        <input
                            type="text"
                            name="Location"
                            value={formData.Location}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    {/* About Field */}
                    <div className="flex items-start mb-6">
                        <label className="text-[--primary-dark] text-lg w-1/6">About:</label>
                        <textarea
                            name="About"
                            value={formData.About}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                            rows="4"
                        />
                    </div>

                    {/* Application Fee Field */}
                    <div className="flex items-center mb-6">
                        <label className="text-[--primary-dark] text-lg w-1/6">Application Fee:</label>
                        <input
                            type="number"
                            name="applicationFee"
                            value={formData.applicationFee}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    {/* Bounty Fee Field */}
                    <div className="flex items-center mb-6">
                        <label className="text-[--primary-dark] text-lg w-1/6">Bounty Fee:</label>
                        <input
                            type="number"
                            name="bountyFee"
                            value={formData.bountyFee}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default NewJob;



import { useState } from "react";

function Profile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        university: '',
        startYear: '',
        endYear: '',
        resume: '',
        workExperience: '',
        skills: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleAddSkill = () => {
        const skill = prompt("Enter a skill:");
        if (skill) {
            setFormData({ ...formData, skills: [...formData.skills, skill] });
        }
    };

    return (
        <div className="flex  bg-[#606A5C] text-[--secondary-light]">
            <div className="flex-1 p-10 space-y-10">
                <section className="mb-8">
                    <h2 className="pl-10 text-xl text-[--primary-dark]  font-semibold border-b border-[--primary-dark] pb-1 mb-4">Personal Details</h2>
                    <div className="px-5 grid grid-cols-3 gap-4">
                        <div className="flex items-left col-span-2 ">
                            <label className="text-[--primary-dark] text-lg w-1/4">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className=" bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-[--primary-dark] text-lg w-1/4">Gender:</label>
                            <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center col-span-2">
                            <label className="text-[--primary-dark] text-lg w-1/4">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center ">
                            <label className="text-[--primary-dark] text-lg w-1/4">Age:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="pl-10 text-xl text-[--primary-dark]  font-semibold border-b border-[--primary-dark] pb-1 mb-4">University Details</h2>
                    <div className="px-5 grid grid-cols-2 gap-4">
                        <div className="flex items-center col-span-2">
                            <label className="text-[--primary-dark] text-lg w-1/4">University:</label>
                            <input
                                type="text"
                                name="university"
                                value={formData.university}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-[--primary-dark] text-lg w-1/4">Start Year:</label>
                            <input
                                type="number"
                                name="startYear"
                                value={formData.startYear}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-[--primary-dark] text-lg w-1/4">End Year:</label>
                            <input
                                type="number"
                                name="endYear"
                                value={formData.endYear}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                    </div>
                </section>


                <section className="mb-8">
                    <h2 className="pl-10 text-xl text-[--primary-dark]  font-semibold border-b border-[--primary-dark] pb-1 mb-4">Work Details</h2>
                    <div className="px-5 grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <label className="text-[--primary-dark] text-lg w-1/4">Resume Link:</label>
                            <input
                                type="text"
                                name="resume"
                                value={formData.resume}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-[--primary-dark] text-lg w-1/4">Work Experience:</label>
                            <input
                                type="text"
                                name="workExperience"
                                value={formData.workExperience}
                                onChange={handleInputChange}
                                className="w-full bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center col-span-2">
                            <label className="text-[--primary-dark] text-lg w-1/4">Skills:</label>
                            <button
                                onClick={handleAddSkill}
                                className="bg-[--secondary-light] text-[--primary-dark] px-4 py-2 rounded-lg font-medium"
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );

}
export default Profile;
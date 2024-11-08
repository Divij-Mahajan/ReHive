import { useState } from "react";

function Profile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        age: 0,
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
        console.log(formData);
    };

    const handleAddSkill = () => {
        const skill = prompt("Enter a skill:");
        if (skill) {
            setFormData({ ...formData, skills: [...formData.skills, skill] });
        }
    };

    return (
        <div className="flex bg-[--secondary-dark] text-[--secondary-light] p-8">
            <div className="flex-1 space-y-10">
                <section className="mb-8">
                    {/* Personal Details Heading */}
                    <h2 className="text-xl text-white mb-2">Personal Details</h2>
                    <hr className="border-t border-white mb-4" />
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Gender:</label>
                            <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Age:</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    {/* University Details Heading */}
                    <h2 className="text-xl text-white mb-2">University Details</h2>
                    <hr className="border-t border-white mb-4" />
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">University:</label>
                            <input
                                type="text"
                                name="university"
                                value={formData.university}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Start Year:</label>
                            <input
                                type="number"
                                name="startYear"
                                value={formData.startYear}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">End Year:</label>
                            <input
                                type="number"
                                name="endYear"
                                value={formData.endYear}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    {/* Work Details Heading */}
                    <h2 className="text-xl text-white mb-2">Work Details</h2>
                    <hr className="border-t border-white mb-4" />
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Resume Link:</label>
                            <input
                                type="text"
                                name="resume"
                                value={formData.resume}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Work Experience:</label>
                            <input
                                type="text"
                                name="workExperience"
                                value={formData.workExperience}
                                onChange={handleInputChange}
                                className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-white focus:border-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex items-center space-x-4">
                            <label className="text-white w-1/4">Skills:</label>
                            <div className="flex items-center gap-2">
                                {formData.skills.map((skill, index) => (
                                    <span key={index} className="bg-[--secondary-light] text-[--primary-dark] px-3 py-1 rounded-lg font-medium">
                                        {skill}
                                    </span>
                                ))}
                                <button
                                    onClick={handleAddSkill}
                                    className="border-[--secondary-light] border-2 bg-transparent text-[--secondary-light] px-2 py-1 rounded-lg font-medium"
                                >
                                    Add +
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Profile;


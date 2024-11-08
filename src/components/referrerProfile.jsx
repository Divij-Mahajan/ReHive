import { useState } from "react";

function ReferralProfile() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        age: 0,
        title: '',
        company: '',
        startYear: '',
        skills: [],
        resume: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
        <div className="flex bg-[--secondary-dark] text-[--secondary-light]">
            <div className="flex-1 p-10 space-y-12">
                {/* Personal Details Section */}
                <section className="mb-12">
                    <h2 className="pl-10 text-xl text-white mb-2">Personal Details</h2>
                    <hr className="border-t border-white mb-6" />
                    <div className="px-5 flex flex-col gap-6">
                        <div className="flex items-center">
                            <label className="text-white text-lg w-1/4">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-3/4 bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white text-lg w-1/4">Gender:</label>
                            <input
                                type="text"
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                                className="w-3/4 bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white text-lg w-1/4">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-3/4 bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white text-lg w-1/4">Age:</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={handleInputChange}
                                className="w-3/4 bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                    </div>
                </section>

                {/* University Details Section */}
                <section className="mb-12">
                    <h2 className="pl-10 text-xl text-white mb-2">University Details</h2>
                    <hr className="border-t border-white mb-6" />
                    <div className="px-5 flex flex-col gap-6">
                        <div className="flex items-center">
                            <label className="text-white text-lg w-1/4">Job Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-3/4 bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white text-lg w-1/4">Company:</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                className="w-3/4 bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                        <div className="flex items-center">
                            <label className="text-white text-lg w-1/4">Start Year:</label>
                            <input
                                type="number"
                                name="startYear"
                                value={formData.startYear}
                                onChange={handleInputChange}
                                className="w-3/4 bg-[--secondary-light] text-[--primary-dark] rounded p-2"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ReferralProfile;



import { useState } from "react";
import { Client, PrivateKey } from '@hiveio/dhive';

function NewJob() {
    let opts = {};
    opts.addressPrefix = 'STM';
                            opts.chainId =
                                'beeab0de00000000000000000000000000000000000000000000000000000000';
    const client = new Client('https://api.hive.blog', opts);

    const createPost = async () => {
        const privateKey = PrivateKey.fromString(
            import.meta.env.VITE_POSTING
        );
        const account = import.meta.env.VITE_ACCOUNT;
        const title = "ReHive: "+formData.jobTitle +" " +formData.Company;
        const body = "Company: "+formData.Company+"\nJob Title: "+formData.jobTitle+"\nDuration / Type: "+formData.Duration+"\nLocation: "+formData.Location+"\nAbout: "+formData.About+"\nApplication Fee(send to this account): "+formData.applicationFee+"\nBounty for Referrers: "+formData.bountyFee+"\nThis post is a part of ReHive project, please visit: 'https://rehive.vercel.app/' ";
        const taglist = 'rehive job '+formData.jobTitle.toLowerCase() +" " +formData.Company.toLowerCase();
        const json_metadata = JSON.stringify({ tags: taglist });
        const permlink = Math.random()
            .toString(36)
            .substring(2);
  
        const payload = {
            author: account,
            body: body,
            json_metadata: json_metadata,
            parent_author: '',
            parent_permlink: taglist[0],
            permlink: permlink,
            title: title,
        };
        //console.log('client.broadcast.comment:', payload);
        client.broadcast.comment(payload, privateKey).then(
            function(result) {
                console.log('response:', result);
            },
            function(error) {
                console.error(error);
            }
        );
    };
    

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
        //console.log(formData);
    };



    return (
        <div className="flex bg-[--secondary-dark] text-[--secondary-light]">
            <div className="flex-1 p-10 space-y-6">
                <section className="mb-8">
                    <div className=" mb-5 flex w-full justify-between px-3 items-end text-white border-b border-white">
                    <h2 className="text-2xl  font-bold pb-1 mb-2">Job Details</h2>
                    <button onClick={()=>{
                        createPost()
                        setFormData({
                            Company: '',
                            jobTitle: '',
                            Duration: '',
                            Location: '',
                            About: '',
                            applicationFee: '',
                            bountyFee: '',
                        })
                    }} className="text-lg py-2 mb-2 bg-[--primary-dark] text-white">Create</button>
                    </div>
                    
                    <div className="flex items-center mb-6">
                        <label className="text-white text-lg w-1/6">Company:</label>
                        <input
                            type="text"
                            name="Company"
                            value={formData.Company}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-6">
                        <label className="text-white text-lg w-1/6">Job Title:</label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-6">
                        <label className="text-white text-lg w-1/6">Duration:</label>
                        <input
                            type="text"
                            name="Duration"
                            value={formData.Duration}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center mb-6">
                        <label className="text-white text-lg w-1/6">Location:</label>
                        <input
                            type="text"
                            name="Location"
                            value={formData.Location}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-start mb-6">
                        <label className="text-white text-lg w-1/6">About:</label>
                        <textarea
                            name="About"
                            value={formData.About}
                            onChange={handleInputChange}
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                            rows="4"
                        />
                    </div>

                    <div className="flex items-center mb-6">
                        <label className="text-white text-lg w-1/6">Application Fee:</label>
                        <input
                            type="number"
                            name="applicationFee"
                            value={formData.applicationFee}
                            onChange={handleInputChange}
                            placeholder="in HIVE"
                            className="flex-1 bg-[--secondary-light] text-[--primary-dark] rounded p-2 border border-transparent focus:border-[--primary-dark] focus:border-2 focus:outline-none"
                            />
                    </div>

                    <div className="flex items-center mb-6">
                        <label className="text-white text-lg w-1/6">Bounty Fee:</label>
                        <input
                            type="number"
                            name="bountyFee"
                            value={formData.bountyFee}
                            placeholder="in HIVE"
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

import { ReactTyped } from "react-typed";
import "../styles/home.css";
import log from "/logo.png";
import home from "/home.png";
import name from "/name.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/footer"; // Correct import

function Home() {
    const navigate = useNavigate();
    const cardTexts = [
        "Earn by Referring others around",
        "Find the right talent at ReHive",
        "Benefit from shared networks",
        "Grow with ReHive’s referral system",
        "Join the ReHive community today",
    ];

    const [sparks, setSparks] = useState([]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const newSpark = {
                x: event.clientX,
                y: event.clientY,
                id: Math.random(), // Unique ID for each spark
            };
            setSparks((prevSparks) => [...prevSparks, newSpark]);

            // Remove sparks after animation
            setTimeout(() => {
                setSparks((prevSparks) => prevSparks.filter((spark) => spark.id !== newSpark.id));
            }, 500); // Keep the spark for a while to create the tail effect
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="w-full bg-[--primary-dark] flex flex-col items-center pt-32" style={{ minHeight: "100vh" }}>
            {/* Spark effect - Continuous Tail */}
            <div
                className="spark-container"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    zIndex: 1000,
                }}
            >
                {sparks.map((spark, index) => (
                    <div
                        key={spark.id}
                        className="spark"
                        style={{
                            position: "absolute",
                            left: `${spark.x}px`,
                            top: `${spark.y}px`,
                            width: "15px", // Thicker spark for more visibility
                            height: "15px",
                            backgroundColor: "#A7F3D0", // Light green color (hex for light green)
                            borderRadius: "50%",
                            boxShadow: "0 0 15px 10px rgba(167, 243, 208, 0.8)", // Glowing effect with light green
                            animation: `spark-animation 0.5s ease-out forwards ${index * 0.05}s`, // Stagger the animation for a smooth effect
                        }}
                    />
                ))}
            </div>

            <div className="flex w-full justify-around flex-grow">
                <div className="flex flex-col pl-24 pt-12 space-y-10">
                    <div className="w-full">
                        <img src={name} className="w-full" />
                    </div>
                    <ReactTyped
                        className="text-4xl text-white"
                        strings={["Get Referrals faster than ever", "Give out Referrals even faster"]}
                        typeSpeed={25}
                        backSpeed={20}
                        loop
                    />
                    <button
                        className="bg-[#CBDEA5] w-1/3 text-black z-50"
                        onClick={() => {
                            navigate("/role");
                        }}
                    >
                        Get Started
                    </button>
                </div>
                <div className="">
                    <div className="absolute w-full h-full Circle z-0 -top-80 -right-56"></div>
                    <img src={home} className="w-2/3 ml-32 mt-32 z-50" />
                </div>
            </div>

            {/* Scrolling cards section */}
            <div className="scrolling-cards-wrapper mt-10">
                <div className="scrolling-cards">
                    {[...cardTexts, ...cardTexts].map((text, index) => (
                        <div key={index} className="card">
                            <img src={log} alt="Icon" className="icon" />
                            <h3 className="card-title">{text}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-3/5 h-[65vh] bg-[--primary-light] rounded-md mt-24 mb-20 overflow-hidden shadow-2xl shadow-[--primary-dark]">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/K0kWefxfa3Y?modestbranding=1&controls=0&rel=0&autohide=1`}
                    title="YouTube video player"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
           
            {/* Spark animation keyframes */}
            <style>{`
                @keyframes spark-animation {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.5);
                        opacity: 0.6;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `}</style>

            {/* Footer at the end of the page */}
            <Footer style={{ marginTop: "auto" }} />  {/* Ensures Footer is at the bottom */}
        </div>
    );
}

export default Home;

import React from 'react';
import img1 from "../img/htmll.png"
import img2 from "../img/csss.png"
import img3 from "../img/js.png"
import img4 from "../img/reactt.png"
import img5 from "../img/github.png"
import img55 from "../img/node.png"
import img6 from "../img/tilda.png"

const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/*container*/}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600">Experience</p>
                    <p className="py-4">// These are the technologies i've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={img1} alt="img1 icon" className="w-20 mx-auto"/>
                        <p className="my-4">HTML</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={img2} alt="img1 icon" className="w-20 mx-auto"/>
                        <p className="my-4">CSS</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={img3} alt="img1 icon" className="w-20 mx-auto"/>
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={img4} alt="img1 icon" className="w-20 mx-auto"/>
                        <p className="my-4">REACT</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={img5} alt="img1 icon" className="w-20 mx-auto"/>
                        <p className="my-4">GITHUB</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={img55} alt="img1 icon" className="w-20 mx-auto"/>
                        <p className="my-4">NODE JS</p>
                    </div>
                    <div className=" shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src={img6} alt="img1 icon" className="w-20 mx-auto"/>
                        <p className="my-4">TILDA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
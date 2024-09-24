import React from "react";

const Skills = () => {
    return (
        <div className="my-7 md:my-1 md:h-[92vh] max-w-[1000px] mx-auto grid md:grid-cols-2 place-content-center md:gap-24 gap-6 p-10 md:mb-64" id="skills">

            <div className="hidden md:block absolute w-1.5 bg-gradient-to-b from-gray-500 to-gray-400 h-[80vh] left-1/2 transform -translate-x-1/2">
            </div>

            <div className="max-w-[450px] w-full">
                <div  className="bg-zinc-300 pt-3 rounded-t-3xl shadow-xl"> 
                    <img className="mx-auto w-[120px] p-1"  src="data:image/svg+xml;base64 data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTY5IDE5Ljc1NGMuNTIyLS43OS44MzEtMS43MzUuODMxLTIuNzU0IDAtMi43NjEtMi4yMzgtNS01LTVzLTUgMi4yMzktNSA1IDIuMjM4IDUgNSA1YzEuMDE5IDAgMS45NjQtLjMwOSAyLjc1NS0uODMybDIuODMxIDIuODMyIDEuNDE0LTEuNDE0LTIuODMxLTIuODMyem0tNC4xNjkuMjQ2Yy0xLjY1NCAwLTMtMS4zNDYtMy0zczEuMzQ2LTMgMy0zIDMgMS4zNDYgMyAzLTEuMzQ2IDMtMyAzem0tNC44OSAyaC03LjExbDIuNTk5LTNoMi42OTZjLjM0NSAxLjE1Mi45NzYgMi4xOCAxLjgxNSAzem0tMi4xMS01aC0xMHYtMTdoMjJ2MTIuMTFjLS41NzQtLjU4Ni0xLjI1MS0xLjA2OC0yLTEuNDI1di04LjY4NWgtMTh2MTNoOC4yOTVjLS4xOS42MzQtLjI5NSAxLjMwNS0uMjk1IDJ6bS00LTRoLTJ2LTZoMnY2em0zIDBoLTJ2LTloMnY5em0zIDBoLTJ2LTRoMnY0eiIvPjwvc3ZnPg=="/>
            </div>
                <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-300 rounded-b-3xl shadow-xl overflow-hidden p-4 max-h-64">   
                    <p className="text-gray-900 text-center font-bold text-lg">Front-End</p>
                    <p className="text-gray-900 text-center text-lg">Html, Tailwind Css, Boostrap, JavaScript, React Js, and others</p>
                </div>
            </div>

            <div className="max-w-[450px] w-full ">
                <div  className="bg-zinc-300 pt-3 rounded-t-3xl shadow-xl"> 
                    <img className="mx-auto w-[120px] p-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwdjE5aDI0di0xOWgtMjR6bTIyIDE3aC0yMHYtMTVoMjB2MTV6bS02LjU5OSA0bDIuNTk5IDNoLTEybDIuNTk5LTNoNi44MDJ6bS02LjQwMS0xNmw2IDQuNjc0LTIuNTM4LjQyNyAxLjUzOCAzLjA5NS0xLjU3MS44MDQtMS41NDYtMy4xNTctMS44ODMgMS43NTl2LTcuNjAyeiIvPjwvc3ZnPg=="/>
                </div>
                <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-300 rounded-b-3xl shadow-xl overflow-hidden p-4 max-h-64">   
                    <p className="text-gray-900 text-center font-bold text-lg">Quality Assurance</p>
                    <p className="text-gray-900 text-center text-lg mb-2">Manual & Automation</p>
                    <p className="text-gray-900 text-lg">With testing software: <br />
                    cypress, robot framework, appium, postman, Selenium IDE, and others</p>
                </div>
            </div>
        </div> 
    )
}

export default Skills;
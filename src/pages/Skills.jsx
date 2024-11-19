import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Experience = () => {
  const experiences = [
    {
      icon: <img className="mb-2 mx-auto w-[120px] p-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAwdjE5aDI0di0xOWgtMjR6bTIyIDE3aC0yMHYtMTVoMjB2MTV6bS02LjU5OSA0bDIuNTk5IDNoLTEybDIuNTk5LTNoNi44MDJ6bS02LjQwMS0xNmw2IDQuNjc0LTIuNTM4LjQyNyAxLjUzOCAzLjA5NS0xLjU3MS44MDQtMS41NDYtMy4xNTctMS44ODMgMS43NTl2LTcuNjAyeiIvPjwvc3ZnPg==" alt="Front-End Icon" />,
      title: "Front-End",
      description: "Tailwind, Bootstrap, JavaScript, React, and others"
    },
    {
      icon: <img className="mb-2 mx-auto w-[120px] p-1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjEuMTY5IDE5Ljc1NGMuNTIyLS43OS44MzEtMS43MzUuODMxLTIuNzU0IDAtMi43NjEtMi4yMzgtNS01LTVzLTUgMi4yMzktNSA1IDIuMjM4IDUgNSA1YzEuMDE5IDAgMS45NjQtLjMwOSAyLjc1NS0uODMybDIuODMxIDIuODMyIDEuNDE0LTEuNDE0LTIuODMxLTIuODMyem0tNC4xNjkuMjQ2Yy0xLjY1NCAwLTMtMS4zNDYtMy0zczEuMzQ2LTMgMy0zIDMgMS4zNDYgMyAzLTEuMzQ2IDMtMyAzem0tNC44OSAyaC03LjExbDIuNTk5LTNoMi42OTZjLjM0NSAxLjE1Mi45NzYgMi4xOCAxLjgxNSAzem0tMi4xMS01aC0xMHYtMTdoMjJ2MTIuMTFjLS41NzQtLjU4Ni0xLjI1MS0xLjA2OC0yLTEuNDI1di04LjY4NWgtMTh2MTNoOC4yOTVjLS4xOS42MzQtLjI5NSAxLjMwNS0uMjk1IDJ6bS00LTRoLTJ2LTZoMnY2em0zIDBoLTJ2LTloMnY5em0zIDBoLTJ2LTRoMnY0eiIvPjwvc3ZnPg==" alt="QA Icon" />,
      title: "Quality Assurance",
      description: (
        <>
          With testing software:
          <br />
          Cypress, Robot Framework, Appium, Postman, Selenium IDE, and others
        </>
      )
    }
  ];

  return (
    <div className="py-10 max-w-[1100px] mx-auto relative p-10 md:p-0 mb-40" id="experience">
      <div className="hidden md:block absolute w-1.5 bg-gradient-to-b from-gray-400 to-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>
      {experiences.map((exp, index) => (
        <motion.div
          className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} items-center my-8`}
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="max-w-[450px] w-full bg-gradient-to-r from-gray-500 via-gray-800 to-black rounded-3xl shadow-xl overflow-hidden p-5">
            <div className="text-center">
              {exp.icon}
            </div>
            <p className="text-gray-200 font-bold text-xl text-center">{exp.title}</p>
            <p className="text-gray-400 text-center font-semibold">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Experience;

import React from "react";
import { MdDescription } from "react-icons/md";

const Experience = () => {

   const experiences = [
     { company: "Fosti (Forum Open Source Teknik Informatika)", duration: "2018-2020", description: "Menjadi anggota divisi organisasi yang berfokus pada pengembangan internal organisasi"},
     { company: "Audit Vidio Classification PT. Indojasa Andalan Global (COCOFUN)", duration: "2021-2022", description: "Mengkategorikan vidio yang di upload User sesuai dengan SOP yang di terapkan & melaporkan vidio yang menyalahi SOP"},
     { company: "Panpel (LOC Surakarta)", duration: "2022-2023", description: "Mengarahkan penonton sesuai tiket, melakukan pengawasan di dalam tribun penonton & mengamankan area steril "},
     { company: "Staff Pemberkasan JKN RS.Hermina Solo", duration: "2024", description: "mengarsipkan, mengkategorikan, melengkapi berkas dan mengubah menjadi soft file yang akan di kirim ke BPJS Kesehatan"},
    //  { company: "fifth Company", duration: "2021-2024", description: "ipsum dolor sit amet consectetur adipisicing elit. Est, facere?"}
]

  return (
    <div className="py-10 max-w-[1000px] mx-auto relative p-10 md:p-0 mb-40"  id="experience">
        <div className="hidden md:block absolute w-1.5 bg-gradient-to-b from-gray-400 to-gray-800 h-full left-1/2 transform -translate-x-1/2"></div>
            {experiences.map((exp, index) => (
                <div className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} items-center my-8`}
                key={index}>
                    <div className="max-w-[450px] w-full bg-gradient-to-r from-gray-500 via-gray-800 to-black rounded-3xl shadow-xl overflow-hidden p-5">
                        <p className="text-gray-200 font-semibold text-lg">{exp.company}</p>
                        <p className="text-gray-400">{exp.duration}</p>
                        <p className="text-gray-400 text-sm">{exp.description}</p>
                    </div>
                </div>
            ))}
      </div>  
  )
}

export default Experience;
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import { TbMathFunction, TbBusinessplan } from 'react-icons/tb';
import { SlDrop } from 'react-icons/sl';
import { LiaDnaSolid, LiaBalanceScaleSolid } from 'react-icons/lia';
import { MdOutlineTranslate, MdComputer, MdOutlineDraw, MdOutlineHistoryEdu } from 'react-icons/md';
import { FiGlobe, FiSearch, FiBookOpen } from 'react-icons/fi';
import { PiBank, PiCalculator, PiFlaskThin } from 'react-icons/pi';

const AllSubjects = () => {
    const [searchQuery, setSearchQuery] = useState("");

   const allSubjectData = [
    //SCIENCE GROUP (15 Subjects)
    { id: 1, title: "Mathematics", count: "148 tutors", icon: <TbMathFunction size={24} />, iconColor: "text-emerald-700 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-950/40", category: "Science" },
    { id: 2, title: "Physics", count: "96 tutors", icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2" fill="currentColor"/><ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="3" ry="9" transform="rotate(-45 12 12)"/></svg>, iconColor: "text-blue-700 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-950/40", category: "Science" },
    { id: 3, title: "Chemistry", count: "84 tutors", icon: <SlDrop size={22} />, iconColor: "text-amber-700 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-950/40", category: "Science" },
    { id: 4, title: "Biology", count: "72 tutors", icon: <LiaDnaSolid size={26} />, iconColor: "text-lime-700 dark:text-lime-400", bgColor: "bg-lime-50 dark:bg-lime-950/40", category: "Science" },
    { id: 5, title: "Higher Mathematics", count: "65 tutors", icon: <PiCalculator size={24} />, iconColor: "text-cyan-700 dark:text-cyan-400", bgColor: "bg-cyan-50 dark:bg-cyan-950/40", category: "Science" },
    { id: 6, title: "Biochemistry", count: "34 tutors", icon: <PiFlaskThin size={24} />, iconColor: "text-indigo-700 dark:text-indigo-400", bgColor: "bg-indigo-50 dark:bg-indigo-950/40", category: "Science" },
    { id: 7, title: "Statistics", count: "41 tutors", icon: <TbMathFunction size={24} />, iconColor: "text-purple-700 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-950/40", category: "Science" },
    { id: 8, title: "Astronomy", count: "18 tutors", icon: <FiGlobe size={22} />, iconColor: "text-sky-700 dark:text-sky-400", bgColor: "bg-sky-50 dark:bg-sky-950/40", category: "Science" },
    { id: 9, title: "Geology", count: "22 tutors", icon: <FiGlobe size={22} />, iconColor: "text-amber-800 dark:text-amber-500", bgColor: "bg-amber-100/40 dark:bg-amber-950/20", category: "Science" },
    { id: 10, title: "Environmental Science", count: "31 tutors", icon: <LiaDnaSolid size={26} />, iconColor: "text-emerald-600 dark:text-emerald-300", bgColor: "bg-emerald-50 dark:bg-emerald-950/20", category: "Science" },
    { id: 11, title: "Botany", count: "28 tutors", icon: <LiaDnaSolid size={26} />, iconColor: "text-green-700 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-950/40", category: "Science" },
    { id: 12, title: "Zoology", count: "35 tutors", icon: <LiaDnaSolid size={26} />, iconColor: "text-teal-700 dark:text-teal-400", bgColor: "bg-teal-50 dark:bg-teal-950/40", category: "Science" },
    { id: 13, title: "Microbiology", count: "29 tutors", icon: <PiFlaskThin size={24} />, iconColor: "text-rose-700 dark:text-rose-400", bgColor: "bg-rose-50 dark:bg-rose-950/40", category: "Science" },
    { id: 14, title: "Genetics", count: "19 tutors", icon: <LiaDnaSolid size={26} />, iconColor: "text-fuchsia-700 dark:text-fuchsia-400", bgColor: "bg-fuchsia-50 dark:bg-fuchsia-950/40", category: "Science" },
    { id: 15, title: "Psychology", count: "45 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-violet-600 dark:text-violet-400", bgColor: "bg-violet-50 dark:bg-violet-950/30", category: "Science" },

    // === COMMERCE GROUP (10 Subjects) ===
    { id: 16, title: "Accounting", count: "112 tutors", icon: <PiBank size={24} />, iconColor: "text-violet-700 dark:text-violet-400", bgColor: "bg-violet-50 dark:bg-violet-950/40", category: "Commerce" },
    { id: 17, title: "Finance & Banking", count: "88 tutors", icon: <TbBusinessplan size={24} />, iconColor: "text-orange-700 dark:text-orange-400", bgColor: "bg-orange-50 dark:bg-orange-950/40", category: "Commerce" },
    { id: 18, title: "Business Organization", count: "74 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-purple-700 dark:text-purple-400", bgColor: "bg-purple-50 dark:bg-purple-950/40", category: "Commerce" },
    { id: 19, title: "Economics", count: "93 tutors", icon: <TbBusinessplan size={24} />, iconColor: "text-blue-800 dark:text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-950/30", category: "Commerce" },
    { id: 20, title: "Marketing", count: "67 tutors", icon: <TbBusinessplan size={24} />, iconColor: "text-rose-600 dark:text-rose-400", bgColor: "bg-rose-50 dark:bg-rose-950/30", category: "Commerce" },
    { id: 21, title: "Management", count: "58 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-teal-800 dark:text-teal-400", bgColor: "bg-teal-50 dark:bg-teal-950/30", category: "Commerce" },
    { id: 22, title: "Entrepreneurship", count: "36 tutors", icon: <TbBusinessplan size={24} />, iconColor: "text-amber-600 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-950/30", category: "Commerce" },
    { id: 23, title: "Business Math", count: "49 tutors", icon: <PiCalculator size={24} />, iconColor: "text-emerald-700 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-950/30", category: "Commerce" },
    { id: 24, title: "Commercial Geography", count: "25 tutors", icon: <FiGlobe size={22} />, iconColor: "text-indigo-600 dark:text-indigo-400", bgColor: "bg-indigo-50 dark:bg-indigo-950/30", category: "Commerce" },
    { id: 25, title: "Business Law", count: "21 tutors", icon: <LiaBalanceScaleSolid size={24} />, iconColor: "text-red-800 dark:text-red-400", bgColor: "bg-red-50 dark:bg-red-950/30", category: "Commerce" },

    //ARTS & HUMANITIES (12 Subjects) 
    { id: 26, title: "Geography", count: "43 tutors", icon: <FiGlobe size={22} />, iconColor: "text-red-700 dark:text-red-400", bgColor: "bg-red-50 dark:bg-red-950/40", category: "Arts" },
    { id: 27, title: "Civics & Citizenship", count: "38 tutors", icon: <LiaBalanceScaleSolid size={24} />, iconColor: "text-yellow-700 dark:text-yellow-400", bgColor: "bg-yellow-50 dark:bg-yellow-950/40", category: "Arts" },
    { id: 28, title: "History", count: "52 tutors", icon: <MdOutlineHistoryEdu size={24} />, iconColor: "text-stone-700 dark:text-stone-400", bgColor: "bg-stone-50 dark:bg-stone-950/40", category: "Arts" },
    { id: 29, title: "Islamic History", count: "47 tutors", icon: <MdOutlineHistoryEdu size={24} />, iconColor: "text-green-800 dark:text-green-500", bgColor: "bg-green-50 dark:bg-green-950/20", category: "Arts" },
    { id: 30, title: "Sociology", count: "41 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-pink-600 dark:text-pink-400", bgColor: "bg-pink-50 dark:bg-pink-950/20", category: "Arts" },
    { id: 31, title: "Political Science", count: "39 tutors", icon: <LiaBalanceScaleSolid size={24} />, iconColor: "text-indigo-700 dark:text-indigo-400", bgColor: "bg-indigo-50 dark:bg-indigo-950/30", category: "Arts" },
    { id: 32, title: "Philosophy", count: "23 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-cyan-800 dark:text-cyan-400", bgColor: "bg-cyan-50 dark:bg-cyan-950/30", category: "Arts" },
    { id: 33, title: "Logic", count: "33 tutors", icon: <TbMathFunction size={24} />, iconColor: "text-orange-600 dark:text-orange-400", bgColor: "bg-orange-50 dark:bg-orange-950/20", category: "Arts" },
    { id: 34, title: "Social Work", count: "27 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-lime-800 dark:text-lime-500", bgColor: "bg-lime-50 dark:bg-lime-950/20", category: "Arts" },
    { id: 35, title: "Home Science", count: "22 tutors", icon: <SlDrop size={22} />, iconColor: "text-teal-600 dark:text-teal-400", bgColor: "bg-teal-50 dark:bg-teal-950/20", category: "Arts" },
    { id: 36, title: "Anthropology", count: "15 tutors", icon: <FiGlobe size={22} />, iconColor: "text-fuchsia-800 dark:text-fuchsia-500", bgColor: "bg-fuchsia-50 dark:bg-fuchsia-950/20", category: "Arts" },
    { id: 37, title: "Media & Journalism", count: "18 tutors", icon: <MdComputer size={24} />, iconColor: "text-blue-600 dark:text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-950/20", category: "Arts" },

    //LANGUAGES & GENERAL (13 Subjects)
    { id: 38, title: "English", count: "210 tutors", icon: <MdOutlineTranslate size={24} />, iconColor: "text-pink-700 dark:text-pink-400", bgColor: "bg-pink-50 dark:bg-pink-950/40", category: "General" },
    { id: 39, title: "ICT", count: "115 tutors", icon: <MdComputer size={24} />, iconColor: "text-indigo-700 dark:text-indigo-400", bgColor: "bg-indigo-50 dark:bg-indigo-950/40", category: "General" },
    { id: 40, title: "Bangla 1st Paper", count: "125 tutors", icon: <MdOutlineTranslate size={24} />, iconColor: "text-emerald-600 dark:text-emerald-400", bgColor: "bg-emerald-50 dark:bg-emerald-950/30", category: "General" },
    { id: 41, title: "Bangla 2nd Paper", count: "98 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-teal-600 dark:text-teal-400", bgColor: "bg-teal-50 dark:bg-teal-950/30", category: "General" },
    { id: 42, title: "Arabic", count: "45 tutors", icon: <MdOutlineTranslate size={24} />, iconColor: "text-green-700 dark:text-green-400", bgColor: "bg-green-50 dark:bg-green-950/30", category: "General" },
    { id: 43, title: "French", count: "24 tutors", icon: <MdOutlineTranslate size={24} />, iconColor: "text-amber-700 dark:text-amber-400", bgColor: "bg-amber-50 dark:bg-amber-950/30", category: "General" },
    { id: 44, title: "German", count: "16 tutors", icon: <MdOutlineTranslate size={24} />, iconColor: "text-red-600 dark:text-red-400", bgColor: "bg-red-50 dark:bg-red-950/20", category: "General" },
    { id: 45, title: "Computer Science", count: "82 tutors", icon: <MdComputer size={24} />, iconColor: "text-cyan-600 dark:text-cyan-400", bgColor: "bg-cyan-50 dark:bg-cyan-950/30", category: "General" },
    { id: 46, title: "General Science", count: "90 tutors", icon: <PiFlaskThin size={24} />, iconColor: "text-sky-600 dark:text-sky-400", bgColor: "bg-sky-50 dark:bg-sky-950/30", category: "General" },
    { id: 47, title: "Bangladesh & Global Studies", count: "105 tutors", icon: <FiGlobe size={22} />, iconColor: "text-rose-700 dark:text-rose-400", bgColor: "bg-rose-50 dark:bg-rose-950/40", category: "General" },
    { id: 48, title: "Religious Studies", count: "64 tutors", icon: <FiBookOpen size={22} />, iconColor: "text-stone-600 dark:text-stone-400", bgColor: "bg-stone-100/60 dark:bg-stone-950/20", category: "General" },
    { id: 49, title: "Arts & Crafts", count: "25 tutors", icon: <MdOutlineDraw size={24} />, iconColor: "text-teal-700 dark:text-teal-400", bgColor: "bg-teal-50 dark:bg-teal-950/40", category: "General" },
    { id: 50, title: "Physical Education", count: "22 tutors", icon: <LiaBalanceScaleSolid size={24} />, iconColor: "text-orange-700 dark:text-orange-400", bgColor: "bg-orange-50 dark:bg-orange-950/30", category: "General" }
];

    
    const filteredSubjects = allSubjectData.filter(subject =>
        subject.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 my-12 sm:my-16">
            
            
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
                <div className="space-y-2">
                    <Link 
                        href="/" 
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#1aa274] hover:underline mb-2"
                    >
                        <HiArrowLeft size={14} /> Back to Home
                    </Link>
                    <p className="text-xs font-semibold tracking-widest text-[#1aa274] dark:text-emerald-400 uppercase">
                        MediQueue Academy
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-slate-900 dark:text-white">
                        All Available Subjects
                    </h1>
                </div>

                
                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Search subjects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/40 text-slate-800 dark:text-white focus:outline-none focus:border-[#1aa274] text-sm shadow-sm transition-all"
                    />
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
            </div>

            
            {filteredSubjects.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {filteredSubjects.map((subject) => (
                        <div 
                            key={subject.id} 
                            className="bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 flex flex-col items-center text-center justify-center gap-4 transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer h-full group"
                        >
                            
                            <div className={`w-12 h-12 rounded-xl ${subject.bgColor} ${subject.iconColor} flex items-center justify-center shadow-sm transition-transform group-hover:scale-105`}>
                                {subject.icon}
                            </div>
                            
                           
                            <div className="space-y-0.5">
                                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-800/40 px-2 py-0.5 rounded-full">
                                    {subject.category}
                                </span>
                                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 pt-1.5">
                                    {subject.title}
                                </h3>
                                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                                    {subject.count}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                
                <div className="text-center py-20 bg-slate-50/50 dark:bg-slate-900/10 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
                    <p className="text-slate-500 dark:text-slate-400 text-sm">No subjects found matching "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
};

export default AllSubjects;
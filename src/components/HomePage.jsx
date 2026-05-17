"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { IoSearchOutline, IoHelpCircleOutline, IoArrowBack, IoArrowForward } from 'react-icons/io5';

const HomePage = () => {
    return (
        
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 my-4">
            
           
            <div className="w-full min-h-[calc(100vh-6rem)] bg-[#044e3a] text-white flex flex-col justify-between relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg transition-colors duration-300">
                
                
                <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-emerald-800/20 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-emerald-950/40 rounded-full blur-2xl pointer-events-none"></div>

               
                <div className="w-full px-6 sm:px-10 lg:px-16 pt-12 pb-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
                    
                    
                    <div className="lg:col-span-7 space-y-6 lg:space-y-8">
                        
                        
                        <div className="inline-flex items-center gap-2 bg-emerald-800/40 border border-emerald-700/50 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur-sm">
                            <span className="text-emerald-400">✨</span> Bangladesh's tutor booking platform
                        </div>

                       
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.15]">
                                Learn smarter with <br />
                                <span className="italic font-serif font-light text-emerald-300">expert tutors</span> <br />
                                near you
                            </h1>
                        </div>

                        
                        <p className="text-base sm:text-lg text-emerald-100/80 max-w-xl font-light leading-relaxed">
                            Browse hundreds of verified tutors across 20+ subjects. Book sessions online or offline — no scheduling conflicts, ever.
                        </p>

                        
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Button 
                                as={Link}
                                href="/tutors"
                                className="bg-transparent hover:bg-emerald-800/30 text-white font-medium px-6 py-3 rounded-lg border border-emerald-600/80 flex items-center gap-2 text-sm transition-all focus:outline-none"
                            >
                                <IoSearchOutline size={18} /> Find a tutor
                            </Button>
                            
                            <Button 
                                className="bg-transparent hover:bg-emerald-800/20 text-emerald-200 hover:text-white font-medium px-6 py-3 rounded-lg border border-transparent flex items-center gap-2 text-sm transition-all focus:outline-none"
                            >
                                <IoHelpCircleOutline size={18} /> How it works
                            </Button>
                        </div>

                        
                        <div className="grid grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-emerald-800/60 max-w-lg">
                            <div className="space-y-1">
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">1,240+</h3>
                                <p className="text-xs text-emerald-200/60 uppercase tracking-wider">Verified tutors</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">8,500+</h3>
                                <p className="text-xs text-emerald-200/60 uppercase tracking-wider">Sessions booked</p>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">20+</h3>
                                <p className="text-xs text-emerald-200/60 uppercase tracking-wider">Subjects</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="lg:col-span-5 flex justify-center lg:justify-end w-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-2xl -z-10"></div>

                        <div className="bg-white text-slate-800 w-full max-w-[340px] rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col justify-between gap-5 transition-transform duration-300 hover:scale-[1.02]">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 rounded-md px-2.5 py-1 text-xs font-semibold">
                                    <span>⭐</span> Top rated
                                </div>

                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">Arif Rahman</h2>
                                    <p className="text-xs font-medium text-slate-400">Mathematics · Dhaka</p>
                                </div>

                                <div className="grid grid-cols-2 gap-2 pt-2">
                                    <div className="border border-emerald-100 rounded-lg p-2 text-center text-xs font-semibold text-emerald-700 bg-emerald-50/30">
                                        Sun 5 PM
                                    </div>
                                    <div className="border border-emerald-100 rounded-lg p-2 text-center text-xs font-semibold text-emerald-700 bg-emerald-50/30">
                                        Mon 5 PM
                                    </div>
                                    <div className="border border-emerald-100 rounded-lg p-2 text-center text-xs font-semibold text-emerald-700 bg-emerald-50/30">
                                        Tue 5 PM
                                    </div>
                                    <div className="border border-emerald-100 rounded-lg p-2 text-center text-xs font-semibold text-emerald-700 bg-emerald-50/30">
                                        Thu 5 PM
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-2">
                                <div className="flex items-baseline">
                                    <span className="text-xl font-bold text-slate-900">৳500</span>
                                    <span className="text-xs text-slate-400 font-medium">/hr</span>
                                </div>
                                <Button 
                                    as={Link}
                                    href="/tutors"
                                    className="bg-transparent hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-300 hover:border-slate-900 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all shadow-sm focus:outline-none"
                                >
                                    Book now
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

                
                <div className="w-full bg-[#033f2f]/60 backdrop-blur-sm py-4 border-t border-emerald-800/40 relative z-20">
                    <div className="px-6 sm:px-10 lg:px-16 flex items-center justify-between text-xs sm:text-sm font-medium text-emerald-200/80">
                        
                        <div>Slide 1 of 3</div>

                        <div className="flex items-center gap-2">
                            <span className="w-6 h-1.5 bg-white rounded-full transition-all"></span>
                            <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full transition-all"></span>
                            <span className="w-1.5 h-1.5 bg-emerald-700 rounded-full transition-all"></span>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="p-2 border border-emerald-700 rounded-lg bg-[#033f2f] hover:bg-emerald-800 text-emerald-300 hover:text-white transition-colors focus:outline-none">
                                <IoArrowBack size={16} />
                            </button>
                            <button className="p-2 border border-emerald-700 rounded-lg bg-[#033f2f] hover:bg-emerald-800 text-emerald-300 hover:text-white transition-colors focus:outline-none">
                                <IoArrowForward size={16} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;
"use client";

import React, { useState, useEffect } from "react";
import { Card, Button, Input, Select, ListBox } from "@heroui/react";
import { MapPin, Clock, Building2, Search, Calendar } from "lucide-react";

const AllTutors = () => {
  const [tutors, setTutors] = useState([]);
  const [filteredTutors, setFilteredTutors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // সার্চ ও ফিল্টার স্টেটসমূহ
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  // ব্যাকএন্ড থেকে সব টিউটর ডেটা নিয়ে আসা
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        // Next.js ক্লায়েন্ট সাইডে এনভায়রনমেন্ট ভেরিয়েবল ব্যবহারের জন্য NEXT_PUBLIC_ ব্যবহার করা ভালো,
        // অথবা সরাসরি আপনার লোকাল ইউআরএল দিতে পারেন।
        const res = await fetch("http://localhost:5000/tutor");
        const data = await res.json();
        setTutors(data);
        setFilteredTutors(data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTutors();
  }, []);

  // ক্লায়েন্ট-সাইড ফিল্টারিং লজিক
  useEffect(() => {
    let updatedList = [...tutors];

    // ১. নাম অনুযায়ী সার্চ ফিল্টার
    if (searchQuery.trim() !== "") {
      updatedList = updatedList.filter((tutor) =>
        tutor.tutorName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // ২. সাবজেক্ট অনুযায়ী ফিল্টার
    if (selectedSubject !== "All Subjects" && selectedSubject !== "") {
      updatedList = updatedList.filter(
        (tutor) => tutor.subject === selectedSubject,
      );
    }

    // ৩. ডেট রেঞ্জ অনুযায়ী ফিল্টার (Session Start Date এর ওপর ভিত্তি করে)
    if (startDate) {
      updatedList = updatedList.filter(
        (tutor) => new Date(tutor.startDate) >= new Date(startDate),
      );
    }
    if (endDate) {
      updatedList = updatedList.filter(
        (tutor) => new Date(tutor.startDate) <= new Date(endDate),
      );
    }

    setFilteredTutors(updatedList);
  }, [searchQuery, selectedSubject, startDate, endDate, tutors]);

  // টিউটর নামের ইনিশিয়াল জেনারেট করার ফাংশন
  const getInitials = (name) => {
    if (!name) return "TR";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  // টিউটরিং মোড অনুযায়ী কালার থিম নির্ধারণ
  const getBadgeStyles = (mode) => {
    switch (mode?.toLowerCase()) {
      case "online":
        return {
          bg: "bg-[#eefcf7]",
          text: "text-[#1e6b65]",
          badgeBg: "bg-[#e0f7f0]",
          badgeText: "text-[#1e6b65]",
        };
      case "offline":
        return {
          bg: "bg-[#edf4fc]",
          text: "text-[#2b6cb0]",
          badgeBg: "bg-[#e1eefc]",
          badgeText: "text-[#2b6cb0]",
        };
      case "both":
        return {
          bg: "bg-[#fdf6ed]",
          text: "text-[#b7791f]",
          badgeBg: "bg-[#fbeed9]",
          badgeText: "text-[#b7791f]",
        };
      default:
        return {
          bg: "bg-slate-50",
          text: "text-slate-700",
          badgeBg: "bg-slate-200",
          badgeText: "text-slate-700",
        };
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* হেডিং */}
      <div>
        <h1 className="text-2xl font-bold text-[#1e6b65]">Find a Tutor</h1>
      </div>

      
      <div className="flex flex-col md:flex-row gap-4 items-center bg-white p-2 rounded-xl shadow-sm border border-slate-100">
       
        <div className="w-full md:w-1/3 relative flex items-center">
          <Search
            size={18}
            className="absolute left-3 text-slate-400 pointer-events-none z-10"
          />
          <Input
            placeholder="Search by tutor name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10" 
          />
        </div>

        <div className="w-full md:w-1/5">
          <Input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/5">
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="w-full md:w-1/4">
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-transparent rounded-xl text-sm font-medium transition-all focus:outline-none cursor-pointer"
          >
            <option value="All Subjects">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="English">English</option>
            <option value="ICT">ICT</option>
          </select>
        </div>
      </div>

      {isLoading && (
        <div className="text-center py-20 text-slate-500 font-medium">
          Loading tutors list...
        </div>
      )}

      {!isLoading && filteredTutors.length === 0 && (
        <div className="text-center py-20 text-slate-400 font-medium">
          No tutors found matching your filters.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {!isLoading &&
          filteredTutors.map((tutor) => {
            const styles = getBadgeStyles(tutor.teachingMode);

            return (
              <Card
                key={tutor._id}
                className="border border-slate-100 shadow-sm rounded-2xl overflow-hidden bg-white hover:shadow-md transition-all"
              >
                
                <div
                  className={`h-32 ${styles.bg} flex items-center justify-center relative`}
                >
                  <h2
                    className={`text-4xl font-black tracking-wider ${styles.text}`}
                  >
                    {getInitials(tutor.tutorName)}
                  </h2>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-800">
                      {tutor.tutorName}
                    </h3>
                    <span className="inline-block mt-0.5 text-[10px] font-bold text-[#1e6b65] bg-[#e0f7f0] px-2 py-0.5 rounded-full">
                      {tutor.subject}
                    </span>
                  </div>

                 
                  <div className="text-xs font-semibold text-slate-500">
                    <span>{tutor.location.split(",")[0]}</span>
                    <span className="mx-1.5">·</span>
                    <span>{tutor.teachingMode}</span>
                  </div>

                  
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[#1e6b65] font-extrabold text-base">
                      ৳{tutor.hourlyFee}
                      <span className="text-[11px] font-medium text-slate-400">
                        /hr
                      </span>
                    </p>
                    <Button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs px-4 py-1.5 rounded-xl transition-all shadow-sm">
                      Book Session
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default AllTutors;

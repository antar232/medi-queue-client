"use client";

import React, { useState, useEffect } from 'react';
import { Button, Input } from '@heroui/react';
import { FiUser, FiMail, FiEdit2, FiCheck, FiX, FiCamera, FiBookOpen } from 'react-icons/fi';
import { authClient } from "@/lib/auth-client"; 

const Profile = () => {
  
    const { data: session, isPending } = authClient.useSession();
    
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        image: "", 
        role: "Learner", 
        institution: "Dhaka College" 
    });

    
    useEffect(() => {
        if (session?.user) {
            setUserData({
                name: session.user.name || "No Name",
                email: session.user.email || "",
                image: session.user.image || "", 
                role: "Learner", 
                institution: "Dhaka College"
            });
        }
    }, [session]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({ ...prev, [name]: value }));
    };

    
    const handleSave = async () => {
        setIsLoading(true);
        try {
          
            await authClient.user.update({
                name: userData.name,
                image: userData.image, 
            });
            
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to update profile", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isPending) {
        return (
            <div className="mx-auto max-w-7xl w-full px-4 my-12 flex justify-center text-slate-500 font-medium">
                Loading profile info...
            </div>
        );
    }

    if (!session) {
        return (
            <div className="mx-auto max-w-7xl w-full px-4 my-12 flex justify-center text-rose-500 font-medium">
                Please log in to view your profile.
            </div>
        );
    }

   
    const avatarInitials = userData.name ? userData.name.split(' ').map(n => n[0]).join('').toUpperCase() : "U";

    return (
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 my-12 flex justify-center">
            
            <div className="w-full max-w-2xl bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
                
             
                <div className="absolute top-0 left-0 right-0 h-32 bg-[#044e3a] opacity-95"></div>
                
                
                <div className="relative z-10 pt-12 flex flex-col sm:flex-row items-center sm:items-end gap-5 mb-8">
                    
                   
                    <div className="relative group">
                        {userData.image ? (
                            
                            <img 
                                src={userData.image} 
                                alt={userData.name}
                                className="w-24 h-24 rounded-2xl object-cover border-4 border-white dark:border-slate-900 shadow-md bg-slate-100"
                                onError={(e) => {
                                    
                                    e.currentTarget.style.display = 'none';
                                    const fallback = document.getElementById('avatar-fallback');
                                    if (fallback) fallback.style.display = 'flex';
                                }}
                            />
                        ) : null}

                        
                        <div 
                            id="avatar-fallback"
                            style={{ display: userData.image ? 'none' : 'flex' }}
                            className="w-24 h-24 rounded-2xl bg-[#1aa274] text-white border-4 border-white dark:border-slate-900 flex items-center justify-center text-3xl font-bold shadow-md select-none"
                        >
                            {avatarInitials}
                        </div>

                        <button className="absolute bottom-1 right-1 p-1.5 bg-slate-900/80 text-white rounded-lg hover:bg-slate-950 transition-colors shadow-sm">
                            <FiCamera size={14} />
                        </button>
                    </div>

                    <div className="text-center sm:text-left space-y-1 pb-1">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                            {userData.name}
                        </h2>
                        <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                            {userData.role}
                        </p>
                    </div>

                   
                    <div className="sm:ml-auto">
                        {!isEditing ? (
                            <Button
                                onClick={() => setIsEditing(true)}
                                className="bg-[#f4fbf9] hover:bg-emerald-50 text-[#1aa274] font-semibold px-4 py-2 rounded-xl border border-emerald-100/60 text-sm transition-all flex items-center gap-2"
                            >
                                <FiEdit2 size={14} />
                                Edit Profile
                            </Button>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Button
                                    isDisabled={isLoading}
                                    onClick={() => setIsEditing(false)}
                                    className="bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 font-semibold px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-sm transition-all"
                                >
                                    <FiX size={16} />
                                </Button>
                                <Button
                                    isLoading={isLoading}
                                    onClick={handleSave}
                                    className="bg-[#1aa274] hover:bg-[#15855f] text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2"
                                >
                                    <FiCheck size={16} />
                                    Save
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                <hr className="border-slate-100 dark:border-slate-800/60 my-6" />

                
                <div className="space-y-6">
                   
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Full Name
                        </label>
                        {isEditing ? (
                            <Input
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                startContent={<FiUser className="text-slate-400" />}
                                variant="bordered"
                                radius="xl"
                                className="max-w-full"
                            />
                        ) : (
                            <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-slate-900/20 rounded-xl border border-slate-100 dark:border-slate-800/40">
                                <FiUser className="text-slate-400" size={18} />
                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{userData.name}</span>
                            </div>
                        )}
                    </div>

                    
                    {isEditing && (
                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                Profile Photo URL
                            </label>
                            <Input
                                name="image"
                                value={userData.image}
                                onChange={handleChange}
                                startContent={<FiCamera className="text-slate-400" />}
                                placeholder="https://i.ibb.co/your-photo.jpg"
                                variant="bordered"
                                radius="xl"
                                className="max-w-full"
                            />
                        </div>
                    )}

                    
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Email Address
                        </label>
                        <div className="flex items-center gap-3 p-3.5 bg-slate-50/70 dark:bg-slate-900/10 rounded-xl border border-slate-100 dark:border-slate-800/30 opacity-80 select-none">
                            <FiMail className="text-slate-400" size={18} />
                            <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{userData.email}</span>
                        </div>
                    </div>

                    
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                            Institution
                        </label>
                        {isEditing ? (
                            <Input
                                name="institution"
                                value={userData.institution}
                                onChange={handleChange}
                                startContent={<FiBookOpen className="text-slate-400" />}
                                variant="bordered"
                                radius="xl"
                                className="max-w-full"
                            />
                        ) : (
                            <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-slate-900/20 rounded-xl border border-slate-100 dark:border-slate-800/40">
                                <FiBookOpen className="text-slate-400" size={18} />
                                <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{userData.institution}</span>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;
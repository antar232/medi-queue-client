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

    const renderStartContent = (Icon) => (
        <div className="flex items-center text-slate-400">
            <Icon size={18} />
        </div>
    );

    if (isPending) return <div className="text-center my-12">Loading...</div>;
    if (!session) return <div className="text-center my-12 text-rose-500">Please log in.</div>;

    return (
        <div className="mx-auto max-w-2xl my-12 px-4">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="space-y-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-slate-400">Full Name</label>
                        {isEditing ? (
                            <Input
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                                startContent={renderStartContent(FiUser)}
                                variant="bordered"
                            />
                        ) : (
                            <div className="p-3 bg-slate-50 rounded-xl border flex items-center gap-3">
                                <FiUser className="text-slate-400" /> {userData.name}
                            </div>
                        )}
                    </div>

                    {/* Image URL Input */}
                    {isEditing && (
                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase text-slate-400">Photo URL</label>
                            <Input
                                name="image"
                                value={userData.image}
                                onChange={handleChange}
                                startContent={renderStartContent(FiCamera)}
                                variant="bordered"
                            />
                        </div>
                    )}

                    {/* Institution Input */}
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase text-slate-400">Institution</label>
                        {isEditing ? (
                            <Input
                                name="institution"
                                value={userData.institution}
                                onChange={handleChange}
                                startContent={renderStartContent(FiBookOpen)}
                                variant="bordered"
                            />
                        ) : (
                            <div className="p-3 bg-slate-50 rounded-xl border flex items-center gap-3">
                                <FiBookOpen className="text-slate-400" /> {userData.institution}
                            </div>
                        )}
                    </div>

                    <Button 
                        color="primary" 
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}
                        isLoading={isLoading}
                    >
                        {isEditing ? "Save Changes" : "Edit Profile"}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { TrashBin, Pencil, Person } from "@gravity-ui/icons";

export default function MyTutorsPage() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    _id: "",
    name: "",
    subject: "",
    fee: 0,
    slots: 0,
  });

  const serverUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const fetchAllTutors = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${serverUrl}/tutors`);
      setTutors(res.data);
    } catch (err) {
      toast.error("Failed to load tutors.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllTutors();
  }, []);

  const openUpdateModal = (tutor) => {
    setEditData({
      _id: tutor._id,
      name: tutor.name || tutor.tutorName || "",
      subject: tutor.subject || "",
      fee: tutor.fee || tutor.hourlyFee || 0,
      slots: tutor.slots ?? tutor.totalSlots ?? 0,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${serverUrl}/tutors/${id}`);
        setTutors((prev) => prev.filter((t) => t._id !== id));
        Swal.fire("Deleted!", "Tutor removed successfully.", "success");
      } catch (err) {
        toast.error("Failed to delete.");
      }
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, slots, ...dataToSend } = editData;

      const updatedData = { ...dataToSend, totalSlots: slots };

      console.log("Request URL:", `${serverUrl}/tutors/${_id}`);

      const res = await axios.put(`${serverUrl}/tutors/${_id}`, updatedData);

      if (res.data.success) {
        setTutors((prev) =>
          prev.map((t) => (t._id === _id ? { ...t, ...updatedData } : t)),
        );
        setIsModalOpen(false);
        toast.success("Tutor updated!");
      }
    } catch (err) {
      console.error("Error details:", err);
      toast.error("Update failed!");
    }
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#1e6b65] mb-6">
        All Tutors List
      </h1>

      <table className="w-full text-left bg-white rounded-2xl shadow-sm border">
        <thead>
          <tr className="bg-[#eefcf7] text-[#1e6b65]">
            <th className="p-4">Tutor</th>
            <th className="p-4">Subject</th>
            <th className="p-4">Fee</th>
            <th className="p-4">Slots</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tutors.map((tutor) => (
            <tr key={tutor._id} className="border-t hover:bg-slate-50">
              <td className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                  <Person height={16} />
                </div>
                {tutor.name || tutor.tutorName}
              </td>
              <td className="p-4">{tutor.subject}</td>
              <td className="p-4">৳{tutor.fee || tutor.hourlyFee}</td>
              <td className="p-4">{tutor.slots ?? tutor.totalSlots}</td>
              <td className="p-4 text-center space-x-2">
                <button
                  onClick={() => openUpdateModal(tutor)}
                  className="p-2 text-sky-600 bg-sky-50 rounded-lg"
                >
                  <Pencil height={16} />
                </button>
                <button
                  onClick={() => handleDelete(tutor._id)}
                  className="p-2 text-red-600 bg-red-50 rounded-lg"
                >
                  <TrashBin height={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-2xl w-full max-w-sm space-y-4"
          >
            <h2 className="font-bold text-lg">Update Tutor</h2>
            <input
              className="w-full border p-2 rounded-xl"
              placeholder="Name"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
            />
            <input
              className="w-full border p-2 rounded-xl"
              placeholder="Subject"
              value={editData.subject}
              onChange={(e) =>
                setEditData({ ...editData, subject: e.target.value })
              }
            />
            <input
              className="w-full border p-2 rounded-xl"
              type="number"
              placeholder="Fee"
              value={editData.fee}
              onChange={(e) =>
                setEditData({ ...editData, fee: Number(e.target.value) })
              }
            />
            <input
              className="w-full border p-2 rounded-xl"
              type="number"
              placeholder="Slots"
              value={editData.slots}
              onChange={(e) =>
                setEditData({ ...editData, slots: Number(e.target.value) })
              }
            />

            <div className="flex justify-end gap-2 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#1e6b65] text-white rounded-xl font-bold"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

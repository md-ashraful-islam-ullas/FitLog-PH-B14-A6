"use client";
import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext } from "react";
import { Slide, toast } from "react-toastify";

const SavedforLaterButton = ({ exercise }) => {
  const { save, setSave } = useContext(ExerciseContext);
  const handleSaved = () => {
    const alreadyAdded = save.some((item) => item.id === exercise.id);
    if (alreadyAdded) {
      toast.warn(`${exercise.name} already added!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
      return;
    }
    setSave([...save, exercise]);
    toast.success(`${exercise.name} Added to your plan.`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  };
  return (
    <button
      className="border border-neutral-700 text-white font-semibold text-sm px-5 py-3 rounded-lg cursor-pointer"
      onClick={() => handleSaved()}
    >
      Save for later
    </button>
  );
};

export default SavedforLaterButton;

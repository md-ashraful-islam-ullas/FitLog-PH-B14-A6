"use client";
import { ExerciseContext } from "@/context/ExerciseContext";
import Image from "next/image";
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
      className="border border-neutral-700 text-white font-semibold text-sm px-5 py-3 rounded-lg cursor-pointer flex items-center gap-2"
      onClick={() => handleSaved()}
    >
      <Image src={'/save-instagram.png'} alt="save" height={20} width={20} className="brightness-0 invert" />

      <p>Save for later</p>
    </button>
  );
};

export default SavedforLaterButton;

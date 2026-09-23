'use client'
import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext } from "react";

const SavedforLaterButton = ({ exercise }) => {
  const { save, setSave } = useContext(ExerciseContext);
  const handleSaved = () => {
    setSave([...save, exercise]);
  };
  return (
    <button
      className="border border-neutral-700 text-white font-semibold text-sm px-5 py-3 rounded-lg"
      onClick={() => handleSaved()}
    >
      Save for later
    </button>
  );
};

export default SavedforLaterButton;

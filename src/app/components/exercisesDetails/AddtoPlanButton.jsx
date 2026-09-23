'use client'
import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext } from "react";

const AddtoPlanButton = ({ exercise }) => {
  const { plan, setPlan } = useContext(ExerciseContext);
  const handlePlan = () => {
    setPlan([...plan, exercise])
  }

  return (
    <button
      className="bg-lime-400 text-black font-semibold text-sm px-5 py-3 rounded-lg"
      onClick={() => handlePlan()}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddtoPlanButton;

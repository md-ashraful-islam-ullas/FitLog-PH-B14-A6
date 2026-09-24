"use client";
import { ExerciseContext } from "@/context/ExerciseContext";
import React, { useContext } from "react";
import { Slide, toast } from "react-toastify";

const AddtoPlanButton = ({ exercise }) => {
  const { plan, setPlan } = useContext(ExerciseContext);
  const handlePlan = () => {
    const alreadyAdded = plan.some((item) => item.id === exercise.id);
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
    setPlan([...plan, exercise]);
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
      className="bg-lime-400 text-black font-semibold text-sm px-5 py-3 rounded-lg cursor-pointer"
      onClick={() => handlePlan()}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddtoPlanButton;

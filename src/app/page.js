import React, { Suspense } from "react";
import Banner from "./components/homepage/Banner";
import Exercises from "./components/shared/Exercises";
import ExercisesLoading from "./components/homepage/ExercisesLoading";

const page = () => {
  return (
    <div>
      <Banner />

      <Suspense fallback={<ExercisesLoading />}>
        <Exercises />
      </Suspense>
    </div>
  );
};

export default page;

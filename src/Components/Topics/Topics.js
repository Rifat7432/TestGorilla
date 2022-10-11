import React from "react";
import "./Topics.css";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData();
  const { data } = topics;
  console.log(data);
  return (
    <div>
      <div className="top-banner rounded-xl w-11/12 mx-auto my-10 py-40">
        <h1 className="md:text-6xl text-3xl m-5 text-slate-300 text-center">
          Measure your candidates on job skills, personality and fit
        </h1>
        <h1 className="md:text-6xl text-3xl m-5 text-slate-300 text-center">
          Choose your interview topic
        </h1>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {data.map((topic) => (
          <Topic topic={topic} key={topic.id}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Topics;

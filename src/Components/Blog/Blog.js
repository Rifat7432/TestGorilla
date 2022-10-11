import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="border-2 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">
          what is the use of react router?
        </h3>
        <p>
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL
        </p>
      </div>
      <div className="border-2 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">how context api works?</h3>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="border-2 m-6 w-3/4 mx-auto shadow-xl">
        <h3 className="text-2xl font-semibold">how useref works in react?</h3>
        <p>
          useRef returns a mutable ref object whose .current property is
          initialized to the passed argument ( initialValue ). The returned
          object will persist for the full lifetime of the component.
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property
        </p>
      </div>
    </div>
  );
};

export default Blog;

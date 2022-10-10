import React from "react";
import './Topic.css'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";


const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  const navigate = useNavigate()
  const startQuiz = (id) =>{
    navigate(`/topics/${id}`)
  }
  return (
    <div>
      <div className="card  bg-slate-700 text-slate-400  border-2 display hover:shadow-xl  ">
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="card-title  hidden start">Total questions : {total}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>startQuiz(id)} className="btn btn-primary hidden start">Start interview
            <span> <FontAwesomeIcon icon={faArrowRight}/></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;

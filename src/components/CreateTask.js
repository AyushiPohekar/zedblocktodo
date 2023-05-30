import React, { useContext, useState } from "react";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { TaskListContext } from "../context/TaskContext";
import { API } from "../global";
import "./component.css";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const CreateTask = () => {
  const [auth, setAuth] = useAuth();

  const [tasklist, setTaskList] = useContext(TaskListContext);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const navigate = useNavigate();

  const addtask = () => {
    const newtask = {
      title: title,
      description: description,
    };

    setTaskList([...tasklist, newtask]);
    let token = auth.token;

    fetch(`${API}/api/tasks/createTodo`, {
      method: "POST",
      body: JSON.stringify(newtask),
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(() => navigate("/"));
  };

  return (
    <div className="Todo">
      <Sidebar />
      <div className="AddTodoContainer">
        <Navbar />
        <div>
          <button
            className="Backbutton btn btn-dark"
            onClick={() => navigate("/")}
          >
            <FontAwesomeIcon className="buttonIcon" icon={faBackward} />
            <span>Back</span>
          </button>
          <div className="container AddTodo">
            <div className="row AddTodoInfo">
              <div className="inputdiv">
                <label htmlFor="title" className="AddStudentlabel">
                  Title:
                </label>
                <input
                  type="text"
                  className=""
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="inputdiv">
                <label htmlFor="description" className="AddStudentlabel">
                  Description:
                </label>
                <textarea
                  type="textarea"
                  rows={"4"}
                  className=""
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="buttonAdd">
                <button
                  type="Submit"
                  onClick={addtask}
                  className="Addbutton btn btn-success"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;

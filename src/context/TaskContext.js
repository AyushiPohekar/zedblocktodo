import React, { Children, createContext } from 'react';
import { useState } from 'react';



export const TaskListContext=createContext("");

const TaskContext = ({children}) => {

    const [tasklist,setTaskList]=useState([]);
  return (
  <>
  <TaskListContext.Provider value={[tasklist,setTaskList]}>
  {children}
  </TaskListContext.Provider>
  </>
  )
}

export default TaskContext;

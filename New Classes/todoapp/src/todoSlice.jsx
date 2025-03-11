// import { createSlice } from "@reduxjs/toolkit";

// const todoSlice = createSlice({
//   name: "mytodo",
//   initialState: {
//     tasks: [],
//   },
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//     },
//     deleteTask: (state, action) => {
//       state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
//     },
//     taskComplete: (state, action) => {
//       state.tasks = state.tasks.map((task) =>
//         task.id === action.payload.id ? { ...task, status: "complete" } : task
//       );
//     },
//     taskIncomplete: (state, action) => {
//       state.tasks = state.tasks.map((task) =>
//         task.id === action.payload.id ? { ...task, status: "Incomplete" } : task
//       );
//     },
//   },
// });

// export const { addTask, deleteTask, taskIncomplete, taskComplete } = todoSlice.actions;
// export default todoSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "mytodo",
  initialState: {
    task: [],
  },
  reducers: {
    addTask: (state, actions) => {
      console.log(actions.payload);
      state.task.push(actions.payload);
    },
    deleteTask: (state, actions) => {
      state.task = state.task.filter((key) => key.id !== actions.payload.id);
    },
    taskcomplete: (state, actions) => {
      for (let i = 0; i < state.task.length; i++) {
        if (state.task[i].id === actions.payload.id) {
          state.task[i].status = "complete";
        }
      }
    },
    taskIncomplete: (state, actions) => {
      for (let i = 0; i < state.task.length; i++) {
        if (state.task[i].id === actions.payload.id) {
          state.task[i].status = "Incomplete";
        }
      }
    },
    editDataSave:(state,actions)=>{
        for (let i = 0; i < state.task.length; i++) {
            if (state.task[i].id === actions.payload.id) {
              state.task[i].work = actions.payload.work;
            }
          }
    }
  },
});

export const { addTask, deleteTask, taskIncomplete, taskcomplete,editDataSave } = todoSlice.actions;
export default todoSlice.reducer;

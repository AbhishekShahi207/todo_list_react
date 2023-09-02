import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    setTask([...task, { title, desc }]);
    setTitle("");
    setDesc("");
  };
  const deleteHandler=(i)=>{
    let copyTask=[...task]
copyTask.splice(i,1)
setTask(copyTask)
  }

  let renderTask = <h2>No task available</h2>;

  if (task.length > 0) {
    renderTask = task.map((t, i) => {
      return (
        <li key={i} className="mb-4">
          <div className="flex justify-between">
            <h5 className=" w-1/8 text-2xl">{t.title}</h5>
            <h6 className="text-xl ">{t.desc}</h6>
            <button  className="bg-red-400 text-xl text-black border-black border-1 p-2 rounded" onClick={()=>{
              deleteHandler(i)
            }}>Delete</button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className=" text-5xl bg-black text-white text-center  font-mono py-3">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className=" border-2 border-blue-100 ml-[50px] text-3xl mt-10 py-1 px-2  w-[19rem]"
          placeholder="Enter Task here.."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className=" border-2 border-blue-100 text-3xl ml-[50px] mt-6 py-1 px-2 w-[27rem] "
          placeholder="Add Description..."
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="ml-[40px] bg-black text-white text-2xl p-1.5 rounded font-bold">
          Add task
        </button>
      </form>
      <hr />
      <div className="ml-12 p-8 mt-6 bg-slate-300 mr-12 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;

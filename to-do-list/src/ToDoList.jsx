import { useState } from "react"

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk a dog"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i !== index)
        setTasks(updatedTask)
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTask = [...tasks]
            const temp = updatedTask[index - 1]
            updatedTask[index - 1] = updatedTask[index]
            updatedTask[index] = temp
            setTasks([...updatedTask]) // ensure it's a new reference

            setTasks(updatedTask)
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updated = [...tasks]
            const temp = updated[index + 1]
            updated[index + 1] = updated[index]
            updated[index] = temp
            setTasks(updated)
        }
    }

    return(
        <>
            <div className="list">
                <h1>To-Do-List</h1>

                <div>
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                    <button className="add-btn" onClick={addTask}>Add</button>
                </div>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={task + index}>
                            <span className="text">{task}</span>
                            <button className="del-btn" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="move-btn" onClick={() => moveTaskUp(index)}>⬆</button>
                            <button className="move-btn" onClick={() => moveTaskDown(index)}>⬇</button>
                        </li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default ToDoList
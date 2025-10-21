//Handles viewing a specific task
import { readTask } from "../utils/fileHandler.js";

//Exporting the view task function
export const viewTask = (id) => {
    const tasks = readTask() // Reading all the tasks from the file
    const foundTasks = tasks.find(task => task.id == id) // Finding the task when the id matches the given id
    if(!foundTasks){
        console.log('Task not found')
    }else{ //Displaying details of the task
        console.log(`Title:${tasks.title}`)
        console.log(`Date:${tasks.date}`)
    }
}

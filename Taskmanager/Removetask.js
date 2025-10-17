//Handles removing a task

import { readTask,writeTask } from "../utils/fileHandler.js"

export const removeTask = (id) => {
    console.log('Remove task module loaded')
    const tasks = readTask() //Read all tasks from the JSON file
    const updatedTasks = tasks.filter(task => task.id !== id) //Filtering out the tasks that matches the given id
    if(updatedTasks.length === tasks.length){
        console.log('There is no task with such ID')
        return
    }
    writeTask(updatedTasks)
    console.log('Task removed successfully')
}




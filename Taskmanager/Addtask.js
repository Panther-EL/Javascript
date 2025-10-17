//Handles adding a new Task
import { readTask, writeTask } from "../utils/fileHandler.js"
import { validateTask } from "../utils/validator.js"

export const addTask = (title) => {
if(!validateTask(title)){
    console.log('Invalid task name')
    return
}

//Reading the existing tasks from the file 
if(!validateTask(title)){
    console.log('Invalid task name')
    return
}
const tasks = readTask()
let newTask = {
    id:Date.now(),
    title:title,
    date:new Date().toISOString()
    
}
//Add to task list
tasks.push(newTask)

//Save tasks back to file
writeTask(tasks)

console.log('Task saved successfully')
}

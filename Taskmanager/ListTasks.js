//Handles listing all tasks
import { readTask } from "../utils/fileHandler.js"

//Exporting the list tasks function
export const listTasks = () => {
    console.log('List tasks module loaded')
    const tasks = readTask()
    if(tasks.length === 0){
        console.log('There are no tasks yet')
        return
    }
    console.log('--- Your tasks ---')
    
    //Looping through each task and printing its details
    tasks.forEach(task,index => {
        console.log(`${index+1}. ${task.title} ${task.date}`)
    });
}

document.addEventListener('DOMContentLoaded',function(){
    const tinput=document.getElementById('taskInput');
const tlist=document.getElementById('taskList');
const button=document.getElementById('btn');
button.addEventListener('click',function(){
    addTask();
})
function addTask(){
    const taskText=tinput;

    if(taskText!==''){
        //new task creation
        const newTask=document.createElement('li');
        newTask.textContent=taskText.value;

        newTask.addEventListener('click',()=>{
            newTask.classList.toggle('completed');
        });

        tlist.appendChild(newTask);
        tinput.value=''
        console.log(tlist)
    }
}
});

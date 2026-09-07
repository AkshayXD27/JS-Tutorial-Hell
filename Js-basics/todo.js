const tasks = [];
const time = [];
function render() {
  let taskHolder = "";

  for (let i = 0; i < tasks.length; i++){
    const html = ` <p> ${tasks[i]} <span> ${time[i]} </span>  <span> <button id="delete" onclick="deleteTask(${i})"> Delete </button> </span></p> `;
    taskHolder += html;
     }
  document.querySelector('.tasks').innerHTML = taskHolder;
}


function taskAdd() {
  const item = document.querySelector('.userTask').value;
  const item2 = document.querySelector('.time').value;
  console.log(item,item2);
  tasks.push(item);
  time.push(item2);
  console.log(tasks,time);
  render();
}

function deleteTask(i) {
  console.log(i);
  if (i != undefined && i >= 0 && i!=null) {
    console.log(i);
    tasks.pop(i);
    time.pop(i);
    console.log(tasks,time);
    render();
  }
}

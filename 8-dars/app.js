const addBtn = document.querySelector('.addtask');
const modal = document.querySelector('.section2');
const closeBtn = document.querySelector('.closeBtn');
const saveBtn = document.querySelector('.saveBtn');
const box = document.querySelector('.box');

addBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

saveBtn.addEventListener('click', () => {
    const title = document.getElementById('tasktitle').value;
    const desc = document.getElementById('taskdesc').value;
    const status = document.getElementById('taskStatus').value;

   if(title.trim() == "") {
    alert("iltimos sarlavha kiriting");
    return;
   }

   let statusClass = 'status';
   if(status == 'in progress') statusClass = 'status2';
   if(status == 'completed') statusClass = 'status3';

   const newTask = document.createElement('div');
   newTask.classList.add('task1');

  newTask.innerHTML = `
        <div class="head">
            <p class="task">${title}</p>
            <span class="${statusClass}">${status}</span>
        </div>
        <p class="desc">${desc}</p>
        <button class="del">Delete</button>
    `;

    
    box.insertBefore(newTask, addBtn);

    newTask.querySelector('.del').addEventListener('click', () => {
        newTask.remove();
    });

    modal.style.display = 'none';
    document.getElementById('tasktitle').value = "";
    document.getElementById('taskdesc').value = "";
});

const existingDeleteBtns = document.querySelectorAll('.del');
existingDeleteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('div[class^="task"]').remove();
    });
});

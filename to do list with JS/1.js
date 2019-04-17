function addItem() {

    var inputData;

    inputData = document.getElementById('input').value;

    if(inputData == "") {
        alert('Please enter the task!')
    }

    else 
    {
        document.getElementById('input').value = "";
        console.log("add task");
        // -------- var --------
        var tRow = document.createElement('tr');
        var tdTag = document.createElement('td');
        var tdTag2 = document.createElement('td');
        var tdTag3 = document.createElement('td');
        var tdTag4 = document.createElement('td');
        var taskTag = document.createElement('span');
        var task = document.createTextNode(inputData);
        var tbody = document.getElementById('tbody');
        tRow.appendChild(tdTag);
        tRow.appendChild(tdTag2);
        tRow.appendChild(tdTag3);
        tRow.appendChild(tdTag4);
        tbody.appendChild(tRow);

        // -------Enter Task
        taskTag.appendChild(task);
        tdTag.appendChild(taskTag);

        //  --------- Delete task

        var remTag = document.createElement('span');
        var deleteIcon = document.createTextNode('❌');
        remTag.appendChild(deleteIcon);
        tdTag2.appendChild(remTag);
        var remove = document.createAttribute('onclick');
        remove.value = "this.parentNode.remove()";
        tdTag2.setAttributeNode(remove);

        // ------------ Edit Task 
        var editTag = document.createElement('span');
        var editIcon = document.createTextNode('✏️');
        editTag.appendChild(editIcon);
        tdTag3.appendChild(editTag);



        editTag.addEventListener('click', function(){
            newTask = prompt("New Task");
            localStorage.editing = newTask;
            tdTag.innerHTML = localStorage.editing;
            

        });
        


        // ------------ Done Task 
        var doneTag = document.createElement('span');
        var doneIcon = document.createTextNode('✅');
        doneTag.appendChild(doneIcon);
        tdTag4.appendChild(doneTag);
        var doneText = document.createTextNode('✅Done✅');
        tdTag4.addEventListener('click',taskDone);
        
        function taskDone(){
            taskTag.style.textDecoration = 'line-through';
            editTag.removeChild(editIcon);
            doneTag.removeChild(doneIcon);
            editTag.appendChild(doneText);
            

        }
    }
}


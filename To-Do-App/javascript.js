let toDoAdd = document.querySelector("#todoadd");
let toDoInput = document.querySelector("#todoinput");
let toDoBox = document.querySelector("#todobox");



toDoAdd.addEventListener('click',function() {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-css')
    paragraph.id = 'todo'
    paragraph.innerText=toDoInput.value;
    toDoBox.appendChild(paragraph);
    toDoInput.value= "";
    
    //CheckBox
    
    var checkbox = document.createElement('input');
    checkbox.classList.add('checkbox-css')
    checkbox.type ='checkbox';
    paragraph.appendChild(checkbox);
    
    //Delete Button
    
   var deleted = document.createElement('button');
   deleted.classList.add('delete-css')
    deleted.innerHTML = '<i class="fas fa-trash"></i>';
   paragraph.appendChild(deleted);
   deleted.addEventListener('click',function() {
   var deleting = document.getElementById('todo');
    deleting.remove();
});
});

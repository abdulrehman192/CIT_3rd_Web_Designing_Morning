let addForm = document.querySelector(".add"); // receive data from html
let list = document.querySelector(".todos"); // send data to hmtl

// insert data
function insert(data)
{
    let html = `<li class="list-group-item w-50  "><b>${data}</b> <i class="fas fa-trash-alt float-right delete"></i></li>`;
    list.innerHTML += html;
}

// send data to html document

function sendData()
{
    let text = addForm.add.value.trim();
    if(text.length > 0)
    {
        insert(text);
        addForm.reset();
    }
}

// prevent defualt reloading

function preventReloading(event)
{
    event.preventDefault();
}

addForm.addEventListener('submit',preventReloading);

// delete todo from list

list.addEventListener('click', (e) =>{
    if(e.target.classList.contains("delete"))
    {
        let dell = confirm("Do you want to delete this item?");
        if(dell == true)
        {
            e.target.parentElement.remove();
        }
    }
});

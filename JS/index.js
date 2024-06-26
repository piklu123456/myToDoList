let titleElement = document.getElementById('title');

let descriptionElement = document.getElementById('description');

let addToDoButton = document.getElementById('addToDo');

let count = 1;

addToDoButton.addEventListener('click', function () {
    if (titleElement.value == "" || descriptionElement.value == "") {
        alert("Title and Description must not be blank.");
    } else {
        let table = document.getElementById('toDoList');

        let rowElement = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerText = count;
        count++;

        let td2 = document.createElement('td');
        td2.innerText = titleElement.value;

        let td3 = document.createElement('td');
        td3.innerText = descriptionElement.value;

        let td4 = document.createElement('td');
        let deleteButton = document.createElement('button');

        deleteButton.innerText = "Delete";
        deleteButton.classList.add('btn');
        deleteButton.classList.add('btn-danger');

        td4.appendChild(deleteButton);

        rowElement.appendChild(td1);
        rowElement.appendChild(td2);
        rowElement.appendChild(td3);
        rowElement.appendChild(td4);

        table.appendChild(rowElement);

        titleElement.value = "";
        descriptionElement.value = "";

        deleteButton.addEventListener('click', function () {

            Swal.fire({
                title: "Do you want to delete the To Do?",
                showDenyButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    let rowEl = this.closest('tr');
                    table.removeChild(rowEl);
                    Swal.fire("Deleted!", "", "success");
                } else if (result.isDenied) {
                    Swal.fire("To Do not deleted", "", "danger");
                }
            });

        })
    }
})



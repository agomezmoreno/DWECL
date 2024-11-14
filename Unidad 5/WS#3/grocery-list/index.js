window.onload = () =>  {
    let input_list = document.getElementById("input_list");
    let btn_submit = document.getElementById("btn_submit");
    let list = document.getElementById("list");
    let edit_window = document.getElementById("edit_window");
    let new_value = document.getElementById("new_value");
    let btn_accept = document.getElementById("btn_accept");
    let btn_clear = document.getElementById("btn_clear");

    btn_submit.addEventListener("click", () => {
        let item = input_list.value;

        if(item)
        {
            let listItem = document.createElement("li");
            listItem.innerText = item;

            let editIcon = document.createElement("img");
            editIcon.src = "./img/edit.png";
            editIcon.width = 16;

            editIcon.addEventListener("click", () => {
                edit_window.style.display = "block";
                
            });
        }

    })

}


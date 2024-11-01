function saveTask(){
   // console.log("save task fctn");

    //get values
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();

    let taskToSave = new Task(title, description, color, date, status, budget);
    console.log(taskToSave);

    displayTask(taskToSave);
    clearForm();
    //save to server (POST)

    // display the task (Get)

}

function displayTask(taskToSave){
    let syntax = `
    <div class="task-container" style="border-color:${taskToSave.color}">
        <div class="task">
            <div class="info">
                <h5>${taskToSave.title}</h5>
                <p>${taskToSave.description}</p>
            </div>

            <div class="status">${taskToSave.status}</div>

            <div class="date-budget">
                <span>${taskToSave.date}</span>
                <br>
                <span>$${taskToSave.budget}</span>
            </div>
        </div>
    </div>
    `

    $("#list").append(syntax);
}

function clearForm(){
    console.log("clear form");
    // need jquery function to clear the value
}

function init(){
    console.log("init");
    $("#btnSave").click(saveTask);
    $("#btnClear").click(clearForm);
}


window.onload = init;
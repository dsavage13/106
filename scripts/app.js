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

    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        },

    })
}
    // display the task (Get)
    function loadTask(){
        $.ajax({
            type: "GET",
            url: "http://fsdiapi.azurewebsites.net/api/tasks",
            success: function(response){
                let data = JSON.parse(response);
                //create the logic to retrieve only the messages 
                //that match with your name
                for(let i = 0; i<data.length;i++){
                    let task = data[i];
                    if(task.name == "Damian"){
                        console.log(task);
                        displayTask(task);
                    }
                }

            },
            error: function (error){
                console.log(error);
            },
        })
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
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selColor").val("");
    $("#selDate").val("");
    $("#selStatus").val("");
    $("#numBudget").val("");
}

function testRequest(){
    $.ajax({
        type: "GET", 
        url: "http://fsdiapi.azurewebsites.net",
        success: function(response){
            let data = JSON.parse(response);
            console.log(data);
        },
        error: function(error){
            console.log(error);
        },
    })
}

function init(){
    console.log("init");
    $("#btnSave").click(saveTask);
    $("#btnClear").click(clearForm);
    loadTask();
}


window.onload = init;
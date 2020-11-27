console.log("wtf 1");
let input = prompt("What do you want to do?");
console.log(input);
const todos = ["Finish the bootcamp", "Do the Laundry"];
while (input !== "quit" && input !== "q") {
    console.log("wtf 2");
    if (input === "new") {
        todos.push(prompt("Add your new todo"));
    }
    else if (input === "list") {
        console.log("*********************");
        if (todos.length > 0) {
            for (let i = 0; i < todos.length; i++) {
                console.log(`${i}. ${todos[i]}`);
            }
        }
        else {
            console.log("You have no Todos left. YAY!");
        }
        console.log("*********************");
    }
    else if (input === "delete") {
        input = parseInt(prompt("Add the index value of the Todo to remove"));
        while (input === NaN || input >= todos.length || input < 0) {
            console.log("That isn´t a valid index.");
            input = parseInt(prompt("Add the index value of the Todo to remove"));
        }
        todos.splice(input,1);
        console.log("The todo has been removed");
    }
    else {
        console.log("Thats not a valid action!");
    }
    input = prompt("What do you want to do?");
}
console.log("Quitting the app, cya!");
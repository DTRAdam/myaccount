import Action from "./classes/Action.js";
import ActionsManager from "./classes/ActionsManager.js";

let actionsManager = new ActionsManager();
let divBalance = document.getElementById("divbalance");

window.addAction = function addAction() {
    let type = document.getElementById("select").value
    let description = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;
    if (description && amount) {
        let action = new Action(type, description, amount)
        actionsManager.addAction(action)
        updateScreen()
    } else {
        alert(`Invalid input: You need to add a ${description ? "" : "description"}${description || amount ? "" : " and "}${amount ? "" : "amount"}`)
    }
}

function updateScreen() {
    divBalance.innerHTML = "";
    divBalance.innerHTML = "Balance: " + actionsManager.calcBalance();
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = "";
    for (let action of actionsManager.Actions) {
        let color = action.type == "income" ? "#00D100" : "red"
        tbody.innerHTML += `<td style="color:${color};">${action.description}</td>
                        <td style="color:${color};">${action.amount}</td>
                        <td>
                            <button class="button" onclick="updateAction(${action.id})"><i style="color:${color};" class="fa-regular fa-pen-to-square"></i></button>
                        </td>
                        <td>
                            <button class="button" onclick="deleteAction(${action.id})"><i style="color:${color};" class="fa-solid fa-trash-can"></i></button>
                        </td> `
    }
    localStorage.setItem("Actions", JSON.stringify(actionsManager.Actions))


}
let actions = JSON.parse(localStorage.getItem("Actions"));

for (let action of actions) {
    let { type, description, amount, id } = action
    let action1 = new Action(type, description, amount)
    action1.id = id
    actionsManager.Actions.push(action1)
}

updateScreen()


window.deleteAction = function deleteAction(id) {
    actionsManager.deleteAction(id)
    updateScreen()
}


window.updateAction = function updateAction(id) {
    let updatedamount = prompt(`What is the new amount of money`)
    actionsManager.updateAction(id, updatedamount)
    updateScreen()
}








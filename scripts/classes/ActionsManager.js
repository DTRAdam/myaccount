class ActionsManager {
    constructor() {
        this.Actions = []
    }

    addAction(Action) {
        this.Actions.push(Action)




    }

    deleteAction(id) {
        for (let i = 0; i < this.Actions.length; i++) {
            if (id == this.Actions[i].id) {
                this.Actions.splice(i, 1)
            }
        }

    }

    updateAction(id, newAmount) {
        for (let i = 0; i < this.Actions.length; i++) {
            if (id == this.Actions[i].id) {
                this.Actions[i].amount = newAmount
            }
        }

    }


    calcBalance() {
        let balance = 0;
        for (let i = 0; i < this.Actions.length; i++) {
            if (this.Actions[i].type == "income") {
                balance += parseInt(this.Actions[i].amount)
            } else {
                balance -= parseInt(this.Actions[i].amount)
            }
        }
        return balance

    }

}


export default ActionsManager;
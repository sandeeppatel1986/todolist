var app = angular.module("toDoApp", ['checklist-model']);
app.controller("toDoAppCtrl", toDoAppCtrlFunction);
function toDoAppCtrlFunction() {
    this.addFlag = false;
    this.index = 1;
    this.todos = [];

    this.validateCheckAll = function () {
        if (this.todos.length > 0) {
            this.checkAllFlag = false;
            this.deleteSelectedFlag = false;
            this.uncheckAllFlag = false;
            this.deleteAllFlag = false;
        }
    }

    this.addToDo = function () {
        console.log(model);
        var model = {};
        model.id = this.index;
        model.value = this.newTodo;
        console.log(model);
        this.todos.push(model);
        this.newTodo = "";
        this.index++;
    };
    this.triggerEditMode = function () {
        this.editMode = !this.editMode;
    };

    this.triggerDeleteMode = function (index) {
        this.todos.splice(index, 1);
    };

    this.selected = {
        items: []
    };

    this.checkAll = function () {
        this.selected.items = this.todos.map(function (item) {
            return item;
        });

    };
    this.uncheckAll = function () {
        this.selected.items = [];
    };
    this.deleteAll = function () {
        this.todos.splice(0, this.todos.length);
    };
    this.deleteSelected = function () {
        for (var cnt = 0; cnt < this.selected.items.length; cnt++) {
            var varIndex = this.todos.indexOf(this.selected.items[cnt])
            if (varIndex > -1) {
                this.todos.splice(varIndex, 1);
            }
        }
        this.uncheckAll();
    };
}

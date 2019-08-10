var app = new Vue({
    el: '#app',
    data: {
      todos: [
      ],
      newToDoName: ""
    },
    created :function() {
        if (localStorage.getItem("todos")) {
            this.todos = JSON.parse(localStorage.getItem("todos"));
        }
    },
    methods: {
        addToDo: function() {
            const newToDo ={
                name: this.newToDoName,
                isDone: false
            };
            this.todos.unshift(newToDo);
            this.newToDoName =""

            this.persistData();
        },
        delToDo: function(idx) {
           this.todos.splice(idx,1) ;

           this.persistData();
        },
        chckToDo: function(idx) {
           this.todos[idx].isDone = !this.todos[idx].isDone;
           this.persistData();
        },
        persistData: function() {
            localStorage.setItem("todos" , JSON.stringify(this.todos))
        }
    }
    
  }) 
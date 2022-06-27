import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todoArray: any[] = [];
  todo;

  addTodo(value) {
    if (value !== "") {
      this.todoArray.push(value);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Field required'
      })
    }
  }

  /*delete item*/
  deleteItem(todo) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        for (let i = 0; i <= this.todoArray.length; i++) {
          if (todo == this.todoArray[i]) {
            this.todoArray.splice(i, 1)
          }
        }
        Swal.fire(
          'Deleted!',
          'Your todo has been deleted.',
          'success'
        )
      }
    })
  }

  // submit Form
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo);
      //this.todoForm.reset()
    } else {
      alert('Field required **')
    }

  }

}

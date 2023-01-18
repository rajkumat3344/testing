import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(){}

  ngOnInit(): void{

  }

  
  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Rohit HF"),
    new Task("AWP22.3"),
  ];

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  removeExistingTask(existingTask: Task) {
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask}"`);
  
    if(userConfirmed){
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }

  markAsDone(task: Task){
    task.isDone = true;
  }
}

class Task{
  constructor(public title: string){

  }

  public isDone = false;

  toggleDone(){
    this.isDone = !this.isDone;
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  constructor(private route: ActivatedRoute){}
  newTaskTitle:string = "";

  date:Date = new Date();

  ngOnInit(): void{
    this.date = new Date(this.route.snapshot.params['date']);
  }

  
  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Rohit HF"),
    new Task("AWP22.3"),
  ];

  add(taskNgForm: NgForm) {
    if(taskNgForm.touched == false)
     return;

    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({date: this.date});
  }

  removeExistingTask(existingTask: Task) {
    var userConfirmed = confirm(`Are you sure that you want to remove the following task? \n "${existingTask}"`);

    console.log(existingTask);
  
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

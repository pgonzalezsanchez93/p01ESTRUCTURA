import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  marcaDeTiempo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  setMarcaDeTiempo(): void {
    this.marcaDeTiempo = `Aceptado el ${new Date()}`;
  }

}

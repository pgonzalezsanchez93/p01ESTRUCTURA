import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  actor: any = {
    nombre: 'Robert',
    apellidos: 'De Niro',
    fechaNacimiento: new Date(1943, 7, 17)
  }

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    const edad: number = (new Date().getTime() - this.actor.fechaNacimiento.getTime()) / 
                          (365 * 24 * 60 * 60 *1000)
    return Math.floor(edad);
  }

}

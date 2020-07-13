import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Exercise } from 'src/app/common/interfaces/exercise.interface';

@Component({
  selector: 'app-muscle-group',
  templateUrl: './muscle-group.component.html',
  styleUrls: ['./muscle-group.component.scss']
})
export class MuscleGroupComponent {
  @Input() muscleGroupName: string;
  @Input() exerciseList: Exercise;
  @Output() selected = new EventEmitter();
}

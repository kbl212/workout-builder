import { Component, OnInit } from '@angular/core';
import { Exercise } from '../common/interfaces/exercise.interface';
import { Workout } from '../common/interfaces/workout.interface';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../common/services/workout.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  workout: Workout;
  exerciseList: Exercise[] = [];
  selectedExercise: number = 0;


  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    const workoutId = this.route.snapshot.paramMap.get('id');
    this.workout = this.workoutService.getWorkoutById(workoutId)
    this.exerciseList = !!this.workout ? this.workout.exercises : [];
  }

  selectExercise(index) {
    if (index !== this.selectedExercise) {
      this.selectedExercise = index;
    }
  }

  goToNextExercise() {
    if (this.selectedExercise !== this.exerciseList.length - 1) {
      this.selectedExercise++;
    }
  }

  goToPreviousExercise() {
    if (this.selectedExercise !== 0) {
      this.selectedExercise--;
    }
  }

  getSelectedExerciseUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.exerciseList[this.selectedExercise].videoUrl);
  }
}

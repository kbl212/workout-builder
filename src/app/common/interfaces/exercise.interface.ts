export interface Exercise {
    id: number;
    name: string;
    videoUrl: string;
    targetMuscles: string[];
    repCount?: number;
}
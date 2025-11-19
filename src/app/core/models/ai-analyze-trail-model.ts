export interface AIAnalyzeTrails {
    totalTrails: number;
    averageDistanceKm: number;
    averageTimeMinutes: number;
    difficultyCounts: DifficultyCounts;
    loopPercentage: number;
    notableTrails: NotableTrail[];
    patterns: string[];
}

export interface DifficultyCounts {
    easy: number;
    moderate: number;
    hard: number;
}

export interface NotableTrail {
    name: string;
    placeName: string;
    reason: string;
}

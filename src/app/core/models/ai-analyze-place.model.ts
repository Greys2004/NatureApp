export interface AIAnalyzePlaces {
    topCategories: TopCategory[];
    difficultyStats: DifficultyStats;
    accessiblePercentage: number;
    highlightPlaces: string[];
    patterns: string[];
}

export interface TopCategory {
    name: string;
    count: number;
}

export interface DifficultyStats {
    easy: number;
    moderate: number;
    hard: number;
}

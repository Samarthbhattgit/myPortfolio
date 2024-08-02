export interface Education {
    institute: string;
    course: string;
    duration: string;
    score: string;
}

export interface WorkExp {
    role: string;
    company: string;
    duration: string;
    description: string[];
}

export interface Skills {
    name: string;
    level: string;
    rating: number;
}

export interface Project {
    title: string;
    technologies: string;
    description: string[];
  }
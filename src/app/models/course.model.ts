export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: string;
  instructor: string;
  price?: number;
  date?: string;
  popular?: boolean;
}

export interface BlogInterface {
  id: number;
  title: string;
  picURL: string;
  description: string;
  previewText: string;
  date: {
    year: string;
    month: string;
    day: string;
  };
  type: string;
}

export interface BlogInterface {
  id: string;
  title: string;
  picURL: string;
  description: string;
  imageCaption: string;
  previewText: string;
  date: {
    year: string;
    month: string;
    day: string;
  };
  type: string;
}

export interface BlogInterface {
  [objectKey: string]:
    | string
    | {
        year: string;
        month: string;
        day: string;
      };

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

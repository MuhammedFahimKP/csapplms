export type VideoType = "Vimeo" | "Youtube";

export interface Subject {
  id: number;
  title: string;
  description: string;
  image: string;
}

export type ModuleType = Omit<Subject, "image">;

export interface VideoResponseType extends Omit<Subject, "image"> {
  video_type: VideoType;
  video_url: string;
}

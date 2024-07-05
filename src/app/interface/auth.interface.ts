

export interface ResponseArrayPoster {
  data: Poster[];
  ok: boolean;
  message: string;
}

export interface Poster {
  _id?: string;
  descripcion: string;
  url: string;
  categoria: string;
  item: number;
}

export interface ResponsePoster {
  data: Poster;
  ok: boolean;
  message: string;
}
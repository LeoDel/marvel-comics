export interface Comic {
  id: number;
  title: string;
  variantDescription: string;
  description: string;
  pageCount: number;
  // collections: [];
  // thumbnail (Image, optional): The representative image for this comic.,
  // images (Array[Image], optional): A list of promotional images associated with this comic.,
  creators: string[];
  characters: string[];
}

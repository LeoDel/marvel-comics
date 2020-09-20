export interface Comic {
  id: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  pageCount: number;
  resourceURI: string;
  series: {
    'resourceURI': string;
    'name': string;
  };
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: any[];
  prices: any[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: [{
    path: string;
    extension: string;
  }];
  creators: {
      items: [
        {
          resourceURI: string;
          name: string;
          role: string;
        }
      ]
    };
  characters: {
      items: [
        {
          resourceURI: string;
          name: string;
        }
      ]
    };
}

interface PostEntity {
  endpoint: string;
  body: { [x: string]: any }[];
  params?: { [x: string]: any }[];
}

interface UpdateEntity {
  idIri: string;
  body: { [x: string]: any }[];
  params?: { [x: string]: any }[];
}

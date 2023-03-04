type APIError = { status: number; message: string; error?: any };

type ApiType<T> = { status: ApiStatusEnum; result: T; error?: any };
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

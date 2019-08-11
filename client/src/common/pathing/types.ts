export enum UrlQueryKeys {
  redirect = 'redirect'
}

export type UrlQuery = { [key in UrlQueryKeys]?: string };

export interface LinkgenOptions {
  params?: string[];
  query?: UrlQuery;
}

export type GetUrlQueryFn = (queryString: string) => UrlQuery;
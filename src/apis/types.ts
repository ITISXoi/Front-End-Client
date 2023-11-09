export interface ISuccessResponse {
  meta: {
    code: number;
    message: string;
    pagination: IPaginationResponse;
  };
  data: any;
}

export interface IError {
  message: string;
  error: string;
  // meta: {
  //   code: number;
  // };
}

export interface IPaginationResponse {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface IPaginationRequest {
  page?: number;
  page_size?: number;
}

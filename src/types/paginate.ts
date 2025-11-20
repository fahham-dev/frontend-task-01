export type PaginateProps = {
  currentPage: number;
  totalPages: number;
  totalStudents: number;
  startStudent: number;
  endStudent: number;
  onPageChange: (page: number) => void;
};


import request from '@/utils/request';

export function fetch({ pageNum, pageCount }) {
  return request(`/api/users?_page=${pageNum}&_limit=${pageCount}`);
}
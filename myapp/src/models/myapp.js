import * as myappService from '../services/myapp'

const initState = {
  list:[],
  pageNum:1, //当前页
  pageCount:3, //每条的页数
  total:10, 
}
const Myapp = {
  namespace:'myapp',
  state:initState,
  reducers: {
    save(state, { payload: { data: list, total, pageNum, pageCount } }) {
      return { ...state, list, total, pageNum, pageCount };
    },
  },
  effects: {
    *fetch({ payload: { pageNum, pageCount } }, { call, put }) {
      const { data, headers, } = yield call(myappService.fetch, { pageNum, pageCount });
      yield put({
         type: 'save', 
         payload: {
            data,
            total: headers['x-total-count'],
            pageNum: parseInt(pageNum, 10),
            pageCount,
          },
      });
    },
  },
}

export default Myapp
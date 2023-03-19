import { changeData, queryData } from './redux';
import { useAppSelector, useAppDispatch } from '../../redux/hook';
import { AppDispatch, store } from '../../redux/store';

const changeDataAsync = (
  amount: { a: string, b: number }
) => (dispatch: AppDispatch, getState: typeof store.getState) => {
  setTimeout(() => {
    dispatch(changeData(amount));
  }, 1000);
};

interface Props {
  name: string;
}
function Sponsors(props: Props) {
  const { name } = props;
  const data = useAppSelector(state => state.sponsorsReducer.data);
  const status = useAppSelector(state => state.sponsorsReducer.status);

  const dispatch = useAppDispatch();
  const handleQuery = () => {
    dispatch(changeDataAsync({ a: 'my', b: 18 }));
  }

  const handleSuccessStatus = () => {
    dispatch(queryData('success'));
  }

  const handleFailStatus = () => {
    dispatch(queryData('fail'));
  }
  return <div className="sponsors">
    <div className="sponsors-name">
      {name}
    </div>
    <div className="sponsors-data">
      {data.a}{data.b}
      <button onClick={handleQuery}>
        请求
      </button>
    </div>
    <div className="sponsors-loading">
      {String(status)}
      <button onClick={handleSuccessStatus}>
        状态-成功
      </button>
      <button onClick={handleFailStatus}>
        状态-失败
      </button>
    </div>
  </div>
}

export {
  Sponsors
}
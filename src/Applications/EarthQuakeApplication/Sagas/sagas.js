import { FinalDetails, Error1 } from '../Actions/actions';
import { takeLatest, put } from 'redux-saga/effects';
export function* calls() {
  yield takeLatest('DetailsList', loadDetailsListToVariable);
  yield takeLatest('DataList', loadDataListToVaiable);
}

function* loadDetailsListToVariable(action) {
  
  try {
    const res = yield fetch(action.payload);
    const ans = yield res.json();
    yield put(FinalDetails(ans));
  } catch (error) {
    yield put(Error1('DataNotAvailable'));
  }
}

function* loadDataListToVaiable(action) {
  yield put(FinalData(action.payload));
}

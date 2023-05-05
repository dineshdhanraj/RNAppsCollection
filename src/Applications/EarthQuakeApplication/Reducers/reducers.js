const initialData={
    listData:"",
    listDetails:[],
    listError:"",
  }
  
  export default function reducers(state = initialData,action){
    switch(action.type){
  case 'DataList1':
  return {...state,listData:action.payload};
  case 'DetailsList1': 
  return {...state,listDetails:action.payload};
  case 'Error':
  return {...state,listError:action.payload};
  default:
  return state;
    }
  }
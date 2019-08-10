
const initState = {

}

const shipmentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_SHIPMENT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_SHIPMENT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default shipmentReducer;
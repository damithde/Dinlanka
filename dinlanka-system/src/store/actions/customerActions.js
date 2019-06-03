export const getquoate = (quote) => {
    return (dispatch, getState, {getFirestore}) => {
      console.log(quote);
      const firestore = getFirestore();
      firestore.collection('quote').add({
        ...quote,
        test : '01'
        
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
        console.log('successfully');
        
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  }
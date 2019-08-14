
  export const userCount = () => {
    return (dispatch, getState, {getFirestore}) => {
      console.log(id);
      const firestore = getFirestore();
      const db = firestore.collection('users');
      const getCount;
      db.where('isAdmin', '==', 'no').get()
  .then(function(querySnapshot) {
    getCount=querySnapshot.size()
    console.log(getCount);
        
    });
};
}
  
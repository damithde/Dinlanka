

export const createShipment = (project) => {
    return (dispatch, getState, {getFirestore}) => {
     
      const firestore = getFirestore();
      firestore.collection('shipments3').add({
        ...project,
        location:"place01",
        geo:{
          lat:"51.509865",
          lon:"-0.118092"
        }
        
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS' });
        console.log('successfully');
        
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };

  export const updateShipment2 = (id) => {
    return (dispatch, getState, {getFirestore}) => {
      console.log(id);
      const firestore = getFirestore();
      const db = firestore.collection('shipments3');
      db.where('shipment_id', '==', id).get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        // Build doc ref from doc.id
        db.doc(doc.id).update({location: "place02"});
    });
})
    }
  }

  export const updateShipment3 = (id) => {
    return (dispatch, getState, {getFirestore}) => {
      console.log(id);
      const firestore = getFirestore();
      const db = firestore.collection('shipments3');
      db.where('shipment_id', '==', id).get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        // Build doc ref from doc.id
        db.doc(doc.id).update({location: "place03"});
    });
})
    }
  }

  export const updateShipment4 = (id) => {
    return (dispatch, getState, {getFirestore}) => {
      console.log(id);
      const firestore = getFirestore();
      const db = firestore.collection('shipments3');
      db.where('shipment_id', '==', id).get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        // Build doc ref from doc.id
        db.doc(doc.id).update({location: "place04"});
    });
})
    }
  }

      
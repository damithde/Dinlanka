import firebase from '../../config/fbConfig.js'

export const createShipment = (project, port) => {
  console.log(project.origin_port)
    return (dispatch, getState, {getFirestore}) => {
     
     const ports = {
       "London":[51.442053, 0.397622],
       "Liverpool":[53.458050,-3.049009],
       "Grimsby":[53.583151, -0.044369],
       "Hartlepool":[58.687149, -1.180022]
     }
     var point1 = ports[project.origin_port][0]
     var point2 = ports[project.origin_port][1]
     console.log(point1)
      const firestore = getFirestore();
      firestore.collection('shipments').add({
        ...project,
        location:project.origin_port,
        location2: new firebase.firestore.GeoPoint(point1, point2)
        
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

  export const count = () => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const db = firestore.collection('users');
      db.get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.id, " => ", doc.data());
        // Build doc ref from doc.id
    });
})
    }
  }
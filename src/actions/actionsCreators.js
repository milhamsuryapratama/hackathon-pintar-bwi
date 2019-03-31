import firebase from '../config/firebase';

export const fetchToDo = () => {
    return function (dispatch) {
        firebase.database().ref('Pengguna_android').on('value', (snapshot) => {
            setTimeout(() => {
                const data = snapshot.val() || []
                let user = []
                Object.values(data).forEach((todo) => {
                    user.push(todo)
                })
                dispatch({
                    type: 'FETCH_TODO',
                    payload: user
                })
            }, 0)
        })
    }
}

export const addToDo = (user) => {
    return function () {
        const newTodoRef = firebase.database().ref('user').push()
        user.id = newTodoRef.key
        newTodoRef.set(user)
    }
}

export const fetchEvent = () => {
    return function (dispatch) {
        firebase.database().ref('event').on('value', (snapshot) => {
            setTimeout(() => {
                const data = snapshot.val() || []
                let event = []
                Object.values(data).forEach((acara) => {
                    event.push(acara)
                })
                dispatch({
                    type: 'FETCH_EVENT',
                    payload: event
                })
            }, 0)
        })
    }
}

export const addEvent = (event, wisata, game_aktif, imgEvent) => {
    return function () {
        let upload = firebase.storage().ref().child(`event/${imgEvent.name}`).put(imgEvent);

        upload.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {

        }, function () {

            upload.snapshot.ref.getDownloadURL().then(function (url) {
                const newEventRef = firebase.database().ref('event').push()
                event.id = newEventRef.key
                event.wisata = wisata
                event.game_aktif = game_aktif
                event.imgEvent = url

                const mulai = event.mulai;

                var today = new Date();

                var dd = today.getDate();
                var mm = today.getMonth() + 1; //January is 0!
                var yyyy = today.getFullYear();

                if (dd < 10) {
                    dd = '0' + dd
                }

                if (mm < 10) {
                    mm = '0' + mm
                }

                console.log(today);

                //today = mm + '/' + dd + '/' + yyyy;
                today = yyyy + '-' + mm + '-' + dd;
                console.log(today);
                if (today != mulai) {
                    event.status = "tidak aktif";
                } else {
                    event.status = "aktif";
                }

                newEventRef.set(event)
            })
            // console.log('File available at', downloadURL);                
        })
    }
}

export const editEvent = (id) => {
    return function (dispatch) {
        firebase.database().ref(`event/${id}`).on('value', (snapshot) => {
            setTimeout(() => {
                const data = snapshot.val() || []
                let event = []
                Object.values(data).forEach((acara) => {
                    event.push(acara)
                })
                dispatch({
                    type: 'EDIT_EVENT',
                    payload: event
                })
                // console.log(event)
            }, 0)
        })
    }
}

export const updateEvent = (event, id) => {
    return function (dispatch) {
        firebase.database().ref(`event/${id}`).set(event)
    }
}

export const hapusEvent = (id) => {
    return function (dispatch) {
        firebase.database().ref(`event/${id}`).remove();
    }
}

export const fetchWisata = () => {
    return function (dispatch) {
        firebase.database().ref('wisata').on('value', (snapshot) => {
            setTimeout(() => {
                const data = snapshot.val() || []
                let wisata = []
                Object.values(data).forEach((wis) => {
                    wisata.push(wis)
                })
                dispatch({
                    type: 'FETCH_WISATA',
                    payload: wisata
                })
            }, 0)
        })
    }
}

export const addPariwisata = (pariwisata, img, fotoWisata, qrValue) => {
    return function () {
        var urlQr = '';
        var urlWisata = '';
        let upload = firebase.storage().ref().child(`qrcode/${img.name}`).put(img);

        upload.on('state_changed', function (snapshot) {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {
            // Handle unsuccessful uploads
        }, function () {
            const newPariwisataRef = firebase.database().ref('wisata').push();

            upload.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                urlQr = downloadURL
                pariwisata.id = newPariwisataRef.key;
                pariwisata.urlQr = downloadURL
                pariwisata.qrScore = 100;

                firebase.database().ref('qrcode').push({
                    id: '2',
                    qrUrl: downloadURL
                })
            });

            let uploadFotoWisata = firebase.storage().ref().child(`fotoWisata/${fotoWisata.name}`).put(fotoWisata);
            uploadFotoWisata.on('state_changed', function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, function (error) {

            }, function () {

                uploadFotoWisata.snapshot.ref.getDownloadURL().then(function (url) {
                    pariwisata.urlWisata = url
                    newPariwisataRef.set(pariwisata);
                    urlWisata = url;
                })
                // console.log('File available at', downloadURL);                
            })

            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...             

        });
    }
}

export const hapusPariwisata = (id) => {
    return function (dispatch) {
        firebase.database().ref(`wisata/${id}`).remove();
    }
}

export const fetchHistory = (idEvent) => {
    return function (dispatch) {
        firebase.database().ref(`/user_point/${idEvent}`).orderByChild('point').once('value', (snap) => {
            var arrPoint = [];
            snap.forEach((child) => {
                const childVal = child.val();
                const childNama = childVal.nama;
                const childPoint = childVal.point;
                const childObj = { childNama, childPoint };
                arrPoint.push(childObj);
            })
            var sortPoint = arrPoint.sort((a, b) => parseFloat(b.childPoint) - parseFloat(a.childPoint));
            // console.log(sortPoint);
            dispatch({
                type: 'FETCH_HISTORY',
                payload: sortPoint
            })
        })
    }
}

export const uploadImagesToStorage = (img) => {
    return function () {
        firebase.storage().ref().child(`qrcode/${img.name}`).put(img)
    }
}

export const getQrCodeEvent = () => {
    return function (dispatch) {
        firebase.database().ref('list_event').on('value', (snapshot) => {
            setTimeout(() => {
                const data = snapshot.val() || []
                let qrcode = []
                Object.values(data).forEach((q) => {
                    qrcode.push(q)
                })
                dispatch({
                    type: 'FETCH_QR',
                    payload: qrcode
                })
            }, 0)
            //console.log(snapshot.val());
        })
    }
}

export const addQr = (qr) => {
    return function () {
        const newQrRef = firebase.database().ref('qr').push()
        qr.id = newQrRef.key
        newQrRef.set(qr)
    }
}

export const singIn = (loginData) => {
    return function (dispatch) {
        //console.log(loginData);
        const email = loginData.email;
        const password = loginData.password;
        firebase.database().ref('/administrator/admin').on('value', (snapshot) => {
            const sn = snapshot.val();
            const em = sn.email;
            firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
                firebase.auth().onAuthStateChanged(function (user) {
                    // firebase.auth().currentUser.then((current) => {
                    //     console.log(current);
                    // })
                    console.log(user);
                    dispatch({
                        type: 'LOGIN_SUKSES'
                    })
                })
            })
        })
    }
}

// export const checkLogin = () => {
//     return function (dispatch) {
//         firebase.auth().onAuthStateChanged(function(user) {
//             if (user) {
//               return null
//             } else {
//               // No user is signed in.
//             }
//           });
//     }
// }

export const singOut = () => {
    return async function (dispatch) {
        firebase.auth().signOut().then(() => {
            dispatch({
                type: 'LOGOUT_SUKSES'
            })
        })
    }
}

export const subscribe = () => {
    return function (dispatch) {
        firebase.messaging().requestPermission()
            .then(() => handleTokenRefresh())
            .then(() => checkSubscription())
            .catch((err) => {
                console.log(err)
            })
    }
}

function checkSubscription() {
    return firebase.database().ref('/tokens').orderByChild('uid').equalTo(firebase.auth().currentUser.uid).once('value').then((snapshot) => {
        if (snapshot.val()) {
            console.log('subscribed');
        } else {
            console.log('unsubscribe');
        }
    })
}

function handleTokenRefresh() {
    return firebase.messaging().getToken().then((token) => {
        firebase.database().ref('/tokens').push({
            token: token,
            uid: firebase.auth().currentUser.uid
        });
    });
}

export const sendNotif = (message) => {
    return function (dispatch) {
        if (!message) return;

        firebase.database().ref('/notifications').push({
            user: firebase.auth().currentUser.displayName,
            message: message,
            userPhoto: firebase.auth().currentUser.photoURL
        })
            .then(() => {
                console.log('sukses kirim notif');
            })
            .catch((err) => {
                console.log(err);
            })
    }
}


const functions = require('firebase-functions');
const slugify = require('slugify');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.forbidNewUsers = functions.auth.user().onCreate((user) => {
    return admin.auth().updateUser(user.uid, {
        disabled: true,
        emailVerified: false
    })
})

exports.slugifyOnCreate = functions.firestore
    .document('projects/{mediaId}')
    .onCreate((snap) => {
        return snap.ref.set({
            slug: slugify(snap.data().name, {
                remove: /[!@#$%^*()=+{[\]}\\|/,.?;:'"`~]/,
                lower: true
            })
        }, { merge: true });
    })

exports.slugifyOnUpdate = functions.firestore
    .document('projects/{mediaId}')
    .onUpdate((change) => {
        const name = change.after.data().name;
        return admin.firestore().doc(`projects/${change.after.id}`).set({
            slug: slugify(name, {
                remove: /[!@#$%^*()=+{[\]}\\|/,.?;:'"`~]/,
                lower: true
            })
        }, {merge: true})
    })


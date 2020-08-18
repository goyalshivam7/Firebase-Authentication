var firebaseConfig = {
    apiKey: "AIz
    authDomain: "shivam
    databaseURL: "https://shivam
    projectId: "shivam
    storageBucket: "shivam
    messagingSenderId: "471
    appId: "1:471296058765:
    measurementId: "G-WJ7PQZYF1B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    // Terms of service url.
    tosUrl: '<your-tos-url>',
    // Privacy policy url.
    privacyPolicyUrl: '<your-privacy-policy-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

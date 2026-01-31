importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBxe0NPT6W47NzuBCURCIykoh2PSVLLMr0",
    projectId: "atchat-at",
    messagingSenderId: "1075535307819",
    appId: "1:1075535307819:web:95baf0479d0a101c3bf66e"
});

const messaging = firebase.messaging();

// This runs when a notification hits your phone while the app is CLOSED
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = 'ATchat - New Message';
    const notificationOptions = {
        body: 'You have a new secure message.',
        icon: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/733/733585.png',
        tag: 'new-msg' // Prevents multiple notification stacks
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});

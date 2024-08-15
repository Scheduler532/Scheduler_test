/* eslint-env serviceworker */
/* global firebase */



importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging.js');

// Firebase 構成情報
const firebaseConfig = {
  apiKey: "AIzaSyBJS4vl9KGH5qPIIGv6aMBNhV4bSMStyGs",
  authDomain: "schedular-412113.firebaseapp.com",
  projectId: "schedular-412113",
  storageBucket: "schedular-412113.appspot.com",
  messagingSenderId: "860429400662",
  appId: "1:860429400662:web:ea6b26102be323177f19f7",
  measurementId: "G-6VRDPLPHDT"
};

// Firebase を初期化
firebase.initializeApp(firebaseConfig);

// Firebase Messaging を初期化
const messaging = firebase.messaging();

// バックグラウンドメッセージの受信設定


/* eslint-disable no-restricted-globals */

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo-192.png'  // 通知アイコンのパスを指定
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

/* eslint-enable no-restricted-globals */


# Valdo

Valdo is a simple Instagram-like mobile application built with React Native and
Firebase. It showcases a retro RPG pixel aesthetic using the following color
palette:

```css
.color1 { color: #5a3938; }
.color2 { color: #847b6d; }
.color3 { color: #a3ab98; }
.color4 { color: #d2d5af; }
.color5 { color: #dfa49b; }
```

## Running the App

1. Install dependencies with `npm install` (requires Node.js and Expo).
2. Replace the Firebase configuration in `valdo-app/firebase.js` with your
   project details.
3. Run `npm start` inside the `valdo-app` directory to launch the Expo
   development server.
4. Use the Expo app on your device or an emulator to view Valdo.

Posts are loaded from the Firestore `posts` collection. Each document should
contain at least an `image` URL and a `caption` string.

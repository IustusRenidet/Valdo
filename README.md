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
<<<<<<< o1om7i-codex/crear-app-móvil-estilo-rpg-pixel-valdo
1. Install the Expo CLI if you haven't already: `npm install -g expo-cli`.
2. Install project dependencies with `npm install` inside `valdo-app`.
3. Replace the Firebase configuration in `valdo-app/firebase.js` with your
   project details.
4. Start the project with `npm start` (or `expo start`) in the `valdo-app`
   directory.
5. Scan the QR code using the **Expo Go** app on your mobile device to view
   Valdo instantly.
=======
1. Install dependencies with `npm install` (requires Node.js and Expo).
2. Replace the Firebase configuration in `valdo-app/firebase.js` with your
   project details.
3. Run `npm start` inside the `valdo-app` directory to launch the Expo
   development server.
4. Use the Expo app on your device or an emulator to view Valdo.
>>>>>>> main


Posts are loaded from the Firestore `posts` collection. Each document should
contain at least an `image` URL and a `caption` string.

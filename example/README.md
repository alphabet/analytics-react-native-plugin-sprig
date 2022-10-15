# React Native Test App

This is a test app for Sprig's analytics react native plugin.

## Get Started
In the example directory run the following commands

```
npm i
watchman watch-del-all
rm -rf node_modules/@sprig-technologies/analytics-react-native-plugin-sprig package-lock.json yarn.lock
yarn add ../
```
Note: it's important to use yarn here because npm does not add local file dependencies properly. 
After installing dependencies you can run the mobile app by `npm run android` or `npm run ios` from the example directory.

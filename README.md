#  ECOMI Wallet
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install react native cli (npm install -g react-native-cli)

**Step 4:** Install [detox](https://github.com/wix/detox/blob/master/docs/Introduction.GettingStarted.md)

**Step 5:** Install the Application with `yarn` or `npm i`

**Step 6:** For android: Install Android Studio and configure with Genymotion or other emulator of choice

**Step 7:** For IOS: cd into the ios/ directory run pod install

## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Emulator
    * run `react-native run-android`

## :arrow_forward: How to test App
1. `yarn test`
2. E2E testing
  * for iOS
    * run `detox build --configuration ios`
    * run `detox test --configuration ios`
  * for Android
    * Work in progress

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.
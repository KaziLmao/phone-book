<h1>phone-book</h1>

A simple phone book with ionic5 angular 16.

<h3>How to run:</h3>

From your console, inside of project folder run this commands:
## Clone my repository
```
git clone https://github.com/KaziLmao/phone-book.git phone-book

cd phone-book
```
## Install
1. modules to project
```
npm install
```
2. ionic and capacitors
```
npm install -g @ionic/cli @capacitor/assets

npm install @capacitor-community/contact

npm install @capacitor-mlkit/barcode-scanning
```
3. Capacitor Android and IOS
```
npm install @capacitor/android

npm install @capacitor/ios
```
### Buld for IOS or Android
```
ionic build

npx cap add android

npx cap add ios

npx cap sync
```
### Browse app
1. Open android studio or xcode
2. Run emulator
3. Run this command
```
ionic cap run -l --external
```

visit url with https prefix
```
https://localhost:8100
```

if you can't see url, check your firewall or antivirus.

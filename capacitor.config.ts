import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.phoneBookApp',
  appName: 'PhoneBook',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

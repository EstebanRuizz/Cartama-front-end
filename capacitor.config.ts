import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cartamaparque',
  appName: 'hr-frontend',
  webDir: 'dist/hr-frontend',
  server: {
    androidScheme: 'https'
  }
};

export default config;

import * as plugins from './capacitor';

const capacitorSdk = {
  plugins,
  multiply: (a: number, b: number) => a * b,
  capitalize: (s: string): string => s.charAt(0).toUpperCase() + s.slice(1),
  humanize: (s: string): string =>
    s
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str: string) => str.toUpperCase()),
};
declare global {
  interface Window {
    CapacitorSdk: typeof capacitorSdk;
  }
}

window.CapacitorSdk = capacitorSdk;
// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
window.CapacitorSdk = window.CapacitorSdk || {};

// export default capacitorSdk;

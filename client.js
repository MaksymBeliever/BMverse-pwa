import { ReactInstance } from 'react-360-web';
import KeyboardModule from 'react-360-keyboard/KeyboardModule';
import WebVRPolyfill from 'webvr-polyfill';
const polyfill = new WebVRPolyfill();

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    nativeModules: [KeyboardModule.addModule],
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('Application', {}),
    r360.getDefaultSurface(),
);

  r360.compositor.setBackground(r360.getAssetURL('panorama-room.jpeg'));

  KeyboardModule.setInstance(r360);
}

window.React360 = {init};

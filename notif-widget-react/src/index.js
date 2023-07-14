import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import Frame from 'react-frame-component';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './index.scss';
import { FRAME_CLOSED } from 'SRC/constants/iframeSizes';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId: '424806dddd0ead9356bf31b05b6db579',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export const setFrameSize = (targetFrame, sizeSet) => {
  targetFrame.style.width = `${sizeSet[0]}px`;
  targetFrame.style.height = `${sizeSet[1]}px`;
};

// const rootElement = ReactDOM.createRoot(
//   document.getElementsByTagName('body')[0]
// );
const newElement = document.createElement('div');
newElement.setAttribute('id', 'meta-crm-widget-container');
newElement.classList.add('meta-crm-widget-container');
document.body.appendChild(newElement);

const rootElement = document.getElementById('widget');
// if (!rootElement) {
//   throw new Error('No root element found in your index.html');
// }
// root.render(
//   <WagmiConfig config={wagmiConfig}>
//     <RainbowKitProvider chains={chains}>
//       <Component />
//     </RainbowKitProvider>
//   </WagmiConfig>
// );

window.addEventListener('load', event => {
  ReactDOM.render(
    <Frame className="meta-crm-widget" id="meta-crm-widget">
      <App />
    </Frame>,
    newElement
  );

  const widgetElement = document.getElementById('meta-crm-widget');
  setFrameSize(widgetElement, FRAME_CLOSED);
});

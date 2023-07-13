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

// const rootElement = ReactDOM.createRoot(
//   document.getElementsByTagName('body')[0]
// );
const rootElement = document.getElementById('widget');
if (!rootElement) {
  throw new Error('No root element found in your index.html');
}
// root.render(
//   <WagmiConfig config={wagmiConfig}>
//     <RainbowKitProvider chains={chains}>
//       <Component />
//     </RainbowKitProvider>
//   </WagmiConfig>
// );

ReactDOM.render(
  <Frame>
    <App />
  </Frame>,
  rootElement
);

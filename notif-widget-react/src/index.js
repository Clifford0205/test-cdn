import React, { useRef, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './index.scss';
import { FRAME_CLOSED } from 'SRC/constants/iframeSizes';

import CustomThemeProvider from './CustomThemeProvider';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

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
  if (!targetFrame) {
    return;
  }
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

const CustomHead = props => {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Previewer</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <base target="_parent" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </>
  );
};

const AppFrameComponent = props => {
  const iframeRef = useRef(null);

  return (
    <Frame
      className="meta-crm-widget"
      id="meta-crm-widget"
      head={<CustomHead />}
      ref={iframeRef}
    >
      <FrameContextConsumer>
        {({ document, window }) => {
          const cache = createCache({
            key: 'mui',
            container: iframeRef?.current?.contentWindow?.document?.head,
            prepend: true,
          });
          return (
            <CacheProvider value={cache}>
              <CustomThemeProvider>
                <App />
              </CustomThemeProvider>
            </CacheProvider>
          );
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

window.addEventListener('load', event => {
  ReactDOM.render(<AppFrameComponent />, newElement);

  const widgetElement = document.getElementById('meta-crm-widget');
  setFrameSize(widgetElement, FRAME_CLOSED);
});

/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, StrictMode, useEffect } from 'react';

import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/order, import/no-unresolved
import Stylesheet from '!!raw-loader!@metacrm/metacrm-svg/dist/public/fonts/font-icon.css';
import '@metacrm/metacrm-svg/dist/public/fonts/font-icon.css';

import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { Provider } from 'react-redux';
import './index.css';
import './index.scss';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import App from './App';
import CustomThemeProvider from './CustomThemeProvider';

import { FRAME_CLOSED } from 'SRC/constants/iframeSizes';
import { store } from 'SRC/store/store';

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

function CustomHead(props) {
	return (
		<>
			<meta charSet='utf-8' />
			<title>MetaCRM widget</title>
			<meta name='viewport' content='width=device-width,initial-scale=1' />
			<base target='_parent' />
			<link
				rel='stylesheet'
				href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
			/>
			{/* TODO 可以再想想看 應該是 src: url 路徑問題 */}
			{/* <style>{Stylesheet}</style> */}
		</>
	);
}

function AppFrameComponent(props) {
	const iframeRef = useRef(null);
	const parentWindow = window;

	useEffect(() => {
		const iframe = iframeRef.current;

		function handleLoad() {
			const headNode = iframe?.contentWindow?.document?.head;

			if (headNode) {
				const originalHTML = headNode.innerHTML;
				const newHTML = document.head.innerHTML;
				headNode.innerHTML = originalHTML + newHTML;
			}
		}

		iframe.addEventListener('load', handleLoad);

		// 移除監聽
		return () => iframe.removeEventListener('load', handleLoad);
	}, []);

	return (
		<Frame className='meta-crm-widget' id='meta-crm-widget' head={<CustomHead />} ref={iframeRef}>
			<FrameContextConsumer>
				{({ document, window }) => {
					const cache = createCache({
						key: 'mui',
						container: iframeRef?.current?.contentWindow?.document?.head,
						prepend: true,
					});
					return (
						<CacheProvider value={cache}>
							<Provider store={store}>
								<MemoryRouter>
									<CustomThemeProvider>
										<App parentWindow={parentWindow} />
									</CustomThemeProvider>
								</MemoryRouter>
							</Provider>
						</CacheProvider>
					);
				}}
			</FrameContextConsumer>
		</Frame>
	);
}

window.addEventListener('load', (event) => {
	ReactDOM.render(<AppFrameComponent />, newElement);

	const widgetElement = document.getElementById('meta-crm-widget');
	setFrameSize(widgetElement, FRAME_CLOSED);
});

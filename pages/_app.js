import App from 'next/app';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { ThemeProvider } from 'styled-components';
import Global from '../components/Global';
import '@fontsource/arvo';
import '@fontsource/cabin';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import '../node_modules/highlight.js/styles/dark.css';
import { green } from '../utils/colors';

const theme = {
	colors: {
		primary: green,
	},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps, router } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Flipper flipKey={router.asPath}>
					<div>
						<Flipped flipId='page'>
							<Component {...pageProps} />
						</Flipped>
					</div>
				</Flipper>
				<Global />
			</ThemeProvider>
		);
	}
}

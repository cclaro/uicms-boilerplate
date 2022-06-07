import { Global } from '@emotion/react'
import { GlobalStyles } from '../globalStyles';
import { ThemeProvider } from '@emotion/react'
import { theme } from '../utils/theme';
import type { NextPage } from 'next';
import Head from 'next/head';
import Container from '../components/Container'
import Header from '../components/Header';
import Block from '../components/Block';
import Footer from '../components/Footer';
import Blocks from '../components/Blocks';
import navigationData from '../docs/data/navigation.json';
import footerData from '../docs/data/footer.json';

const Home: NextPage = () => {
	return (
		<>
			<Global styles={GlobalStyles} />
			<Head>
				<title>UI Boilerplate - Carlos Claro</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ThemeProvider theme={theme}>
				<Header navigation={navigationData} />
				<Blocks />
				<Block backgroundType='bgGray50'>
					<Container>
						<Footer footer={footerData} />
					</Container>
				</Block>
			</ThemeProvider>
		</>
	);
};

export default Home;
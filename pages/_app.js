import App from 'next/app'
import Layout from '../components/layout';
import '../styles/global.css';

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}
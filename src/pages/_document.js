import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Ahsan Muneer - React Native & React Dev" />
          <meta name="description" content="Hey there, This is Ahsan Muneer. Inquisitive and Highly-motivated software engineer, with strong web and mobile application skills. Forward-thinker by nature and loves to code. Spends most of my time learning and experimenting with anything that looks promising.   " />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Ahsan Muneer - React Native & React Dev" />
          <meta property="og:description" content="Hey there, This is Ahsan Muneer. Inquisitive and Highly-motivated software engineer, with strong web and mobile application skills. Forward-thinker by nature and loves to code. Spends most of my time learning and experimenting with anything that looks promising.   " />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Ahsan Muneer - React Native & React Dev" />
          <meta property="twitter:description" content="Hey there, This is Ahsan Muneer. Inquisitive and Highly-motivated software engineer, with strong web and mobile application skills. Forward-thinker by nature and loves to code. Spends most of my time learning and experimenting with anything that looks promising.   " />
       
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

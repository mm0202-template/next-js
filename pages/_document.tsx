import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import React from 'react'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): React.ReactElement {
    const gtmScript = `
                   (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                   })(window,document,'script','dataLayer','${process.env.GTM_CONTAINER_ID}');
             `

    const gtmNoscript = `
                    <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_CONTAINER_ID}"
                    height="0" width="0" style="display:none;visibility:hidden"></iframe>
             `

    // noinspection HtmlRequiredTitleElement
    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{ __html: gtmNoscript }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

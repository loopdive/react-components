import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <style>
            {" "}
            {`
              @font-face {
                font-family: 'Foo';
                src: url('./static/foo.ttf');
              }

              body {
                font-family: 'Foo';
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

import Document, { Head, Main, NextScript } from "next/document";
import "../sass/_main.scss";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

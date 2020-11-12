import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
          {/* <script type="text/javascript">
      (function () {
        function $MPC_load() {
          window.$MPC_loaded !== true &&
            (function () {
              var s = document.createElement("script");
              s.type = "text/javascript";
              s.async = true;
              s.src =
                document.location.protocol +
                "//secure.mlstatic.com/mptools/render.js";
              var x = document.getElementsByTagName("script")[0];
              x.parentNode.insertBefore(s, x);
              window.$MPC_loaded = true;
            })();
        }
        window.$MPC_loaded !== true
          ? window.attachEvent
            ? window.attachEvent("onload", $MPC_load)
            : window.addEventListener("load", $MPC_load, false)
          : null;
      })();
    </script>  */}
    <title>Maimo Desk</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          
          


        </body>
      </Html>
    )
  }
}

export default MyDocument
  
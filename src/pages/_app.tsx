import antdTheme from "@/theme";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ConfigProvider theme={antdTheme}>
    <Component {...pageProps} />
  </ConfigProvider>
);

export default App;

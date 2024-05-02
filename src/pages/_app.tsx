import '../styles/globals.scss';

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: React.ComponentType<any>;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}

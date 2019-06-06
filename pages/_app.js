import App, { Container } from 'next/app';
import Router from 'next/router';
import withGA from "next-ga";
import * as Language from '../defaults/Language';
import { DEFAULT_LANGUAGE } from '../defaults/Languages';

class MyApp extends App {
  render() {
    const { router, Component, pageProps } = this.props;
    return (
      <Container>
        <Language.Provider locale={router.query.locale || DEFAULT_LANGUAGE}>
          <Component {...pageProps} />
        </Language.Provider>
      </Container>
    );
  }
}

export default withGA("UA-141673772-1", Router)(MyApp);

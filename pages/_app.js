import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from "next-redux-saga";
import { PersistGate } from "redux-persist/integration/react";
import { renderToStaticMarkup } from "react-dom/server";

import { LocalizeProvider, withLocalize } from "react-localize-redux";

import createStore from "../store";

import langSv from "../services/lang/sv.json";
import langEn from "../services/lang/en.json";

const onMissingTranslation = ({ defaultTranslation }) => defaultTranslation;

class Main extends React.Component {
  constructor(props) {
    super(props);
    const languages = [
      { name: "English", code: "en" },
      { name: "Svenska", code: "sv" }
    ];
    const defaultLanguage = languages[0];

    this.props.initialize({
      languages,
      translation: {
        ...langSv
      },
      options: { renderToStaticMarkup, defaultLanguage, onMissingTranslation }
    });
    this.props.setActiveLanguage(props.lang || "sv");
    this.props.addTranslationForLanguage(langSv, "sv");
    this.props.addTranslationForLanguage(langEn, "en");
  }
  render() {
    const { Component, pageProps, lang } = this.props;
    return <Component {...pageProps} />;
  }
}

const MainwithLocalize = withLocalize(Main);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return {
      pageProps,
      lang: ctx.query && ctx.query.lang ? ctx.query.lang : null
    };
  }

  render() {
    const { Component, pageProps, store, lang } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <PersistGate loading={null} persistor={store.__persistor}>
            <LocalizeProvider store={store}>
              <MainwithLocalize
                Component={Component}
                pageProps={pageProps}
                lang={lang}
              />
            </LocalizeProvider>
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp));

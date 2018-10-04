/* eslint-disable no-undef, no-unused-vars */
import Head from "next/head";
import React from "react";
import { withLocalize } from "react-localize-redux";
import { connect } from "react-redux";

import NProgress from "nprogress";
// import Router from "next/router";
// import { Router, Link, routes as test } from "../router";

import { Router } from "../router";

import routes from "../routes";

import Link from "../components/link";

import stylesheet from "../styles/index.scss";

Router.onRouteChangeStart = url => NProgress.start();

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

class Layout extends React.Component {
  render() {
    const { children, activeLanguage } = this.props;
    const lang =
      activeLanguage && activeLanguage.code ? activeLanguage.code : "sv";
    return (
      <div style={{ height: "100%" }}>
        <Head>
          <title>Next / Contentful / Bootstrap 4 Boilerplate</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>

        <div className="container-fluid" style={{ height: "100%" }}>
          <nav>
            {routes.map((route, i) => (
              <span key={route.page}>
                <span className="p-1">
                  <Link route={route.page} params={{ lang }}>
                    <a>{route.title}</a>
                  </Link>
                </span>
                {i !== routes.length - 1 ? <span>{`|`}</span> : null}
              </span>
            ))}
          </nav>
          {children}
        </div>
      </div>
    );
  }
}

export default withLocalize(Layout);

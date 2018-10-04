/* eslint-disable no-undef, no-unused-vars */
import { withLocalize } from "react-localize-redux";

import { Router, Link, routes as test } from "../router";

class MyLink extends React.Component {
  render() {
    const { children, activeLanguage, route, params } = this.props;
    const lang =
      activeLanguage && activeLanguage.code ? activeLanguage.code : "sv";
    return (
      <Link route={route} params={{ lang, ...params }}>
        {children}
      </Link>
    );
  }
}

export default withLocalize(MyLink);

import Router from "next/router";
import { deleteCookie, getCookie, getCookies, setCookie } from "cookies-next";

export const auth = (ctx) => {
  const cookie = getCookies(ctx);
  if (!cookie.session_id || !cookie.user_id) return redirect(ctx?.res);
  return cookie;
};

export const login = ({ userid, sessionid }) => {
  setCookie("user_id", userid);
  setCookie("session_id", sessionid);
  Router.push("/");
};

function redirect(res) {
  if (res) {
    // SSR
    res.writeHead(302, { Location: "/auth/signin" });
    res.end();
    return;
  }
  // Client side
  return Router.push("/auth/signin");
}

export function withAuthSync(WrappedComponent, { loggedOnly = false }) {
  const withAuthSession = (props) => {
    return <WrappedComponent {...props} />;
  };
  withAuthSession.getInitialProps = async (ctx) => {
    let token = getCookie("session_id", ctx);
    const cookie = getCookies(ctx);
    if (loggedOnly && !token) redirect(ctx.res);
    let componentProps = {};
    if (WrappedComponent.getInitialProps) {
      componentProps = await WrappedComponent.getInitialProps(ctx);
    }
    return { token, user_id: cookie.user_id, ...componentProps };
  };

  return withAuthSession;
}

export const logout = () => {
  deleteCookie("session_id");
  Router.push("/auth/signin");
  return;
};

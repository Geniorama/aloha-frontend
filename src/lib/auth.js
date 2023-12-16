import Router from "next/router";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export const auth = (ctx) => {
  const session_id = getCookie("session_id", ctx);
  const user_id = getCookie("user_id", ctx);
  console.log(session_id);
  if (!session_id || !user_id) return redirect(ctx?.res);
  return { session_id, user_id };
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
    if (loggedOnly && !token) redirect(ctx.res);
    let componentProps = {};
    if (WrappedComponent.getInitialProps) {
      componentProps = await WrappedComponent.getInitialProps(ctx);
    }
    return { token, ...componentProps };
  };

  return withAuthSession;
}

export const logout = () => {
  deleteCookie("session_id");
  Router.push("/auth/signin");
  return;
};

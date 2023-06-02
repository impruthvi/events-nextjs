import { Fragment, useContext } from "react";
import MainHeader from "./main-header";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";
const Layout = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <MainHeader />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;

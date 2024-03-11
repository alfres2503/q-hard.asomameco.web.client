import { useState } from "react";
import { NotificationContext } from "../NotificationContext";
import { Dialog, DialogPanel } from "@tremor/react";
import Button from "@/components/common/Button";

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [message, setMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState<
    "ERROR" | "SUCCESS" | "INFO" | "WARNING"
  >("INFO");

  const Notification = (message: string, type?: any) => {
    setNotificationType(type || "INFO");
    setMessage(message);
    setShowNotification(true);
  };

  return (
    <NotificationContext.Provider
      value={{
        message,
        setMessage,
        showNotification,
        setShowNotification,
        notificationType,
        setNotificationType,
        Notification,
      }}
    >
      {children}
      <Dialog
        open={showNotification}
        onClose={(val) => setShowNotification(val)}
        static={true}
      >
        <DialogPanel className="">
          <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Hubo un error
          </h3>
          <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {message}
          </p>
          <Button
            color="blue"
            className="mt-8 w-full p-3 text-white"
            onClick={() => setShowNotification(false)}
          >
            Ok
          </Button>
        </DialogPanel>
      </Dialog>
    </NotificationContext.Provider>
  );
};

export default NotificationContext;

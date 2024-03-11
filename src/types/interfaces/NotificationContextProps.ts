export interface NotificationContextProps {
  message: string;
  setMessage: (message: string) => void;
  showNotification: boolean;
  setShowNotification: (showNotification: boolean) => void;
  notificationType: "ERROR" | "SUCCESS" | "INFO" | "WARNING";
  setNotificationType: (
    notificationType: "ERROR" | "SUCCESS" | "INFO" | "WARNING"
  ) => void;
  Notification: (message: string, type?: any) => void;
}

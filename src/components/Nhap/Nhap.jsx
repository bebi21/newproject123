import { Button, notification } from "antd";
import React from "react";
import { WarningFilled } from "@ant-design/icons";
const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    icon: <WarningFilled style={{ color: "red" }} />,
  });
};
const nhap = () => (
  <Button className="bg-blue-500 text-white" onClick={openNotification}>
    Open the notification box
  </Button>
);

export default nhap;

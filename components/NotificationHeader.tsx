import React from "react";
import { motion } from "framer-motion";

interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

const NotificationHeader = ({
  unreadCount,
  onMarkAllAsRead,
}: NotificationHeaderProps) => {
  return (
    <motion.div
      className="flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <h1 className="text-xl font-black text-gray-900">
        Notifications
        <span className="bg-blue-900 text-white rounded ms-2 px-3 py-1">
          {unreadCount}
        </span>
      </h1>
      <p
        onClick={onMarkAllAsRead}
        className="text-gray-500 cursor-pointer hover:font-semibold"
      >
        Mark all as read
      </p>
    </motion.div>
  );
};

export default NotificationHeader;

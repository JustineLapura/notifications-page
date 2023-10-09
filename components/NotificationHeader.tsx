import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clickMeGif from "/public/images/giphy.gif"

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
          className={`text-gray-500 ${unreadCount === 0 ? "text-green-600" : "animate-bounce hover:font-semibold cursor-pointer"}`}
        >
         {unreadCount === 0 ? "Youv'e read all notifications!" : "Mark all as read"}
        </p>
        {/* <Image src={clickMeGif} alt="click gif" className="w-32 absolute bottom-0 right-5"/> */}
    </motion.div>
  );
};

export default NotificationHeader;

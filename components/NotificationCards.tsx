import Image from "next/image";
import React from "react";
import { Notification } from "@/app/types";
import { motion } from "framer-motion";

interface NotificationCardsProps {
  index: number;
  notification: Notification;
  handleRead: (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

const NotificationCards = ({
  index,
  notification,
  handleRead,
}: NotificationCardsProps) => {
  return (
    <motion.div
      onClick={handleRead}
      className={
        notification.read === false
          ? "flex w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4 cursor-pointer gap-4"
          : "flex w-full hover:bg-gray-100 rounded-lg p-4 cursor-pointer gap-4"
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index + 0.5 }}
    >
      
      <div className="w-12 h-12 sm:w-[65px] sm:h-[65px] lg:w-16 lg:h-14 rounded-full  overflow-hidden">
        <Image
          src={notification.profileImg}
          alt="Mark Webber"
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-between w-[80%] lg:w-full text-sm">
        <div className="">
          <p className="items-center text-gray-700">
            <span className="font-bold text-gray-900">{notification.name}</span>
            {" " + notification.notif + " "}
            {/* event notif  */}
            {notification.event.post && (
              <span className="font-bold text-gray-600">
                {notification.event.post}
              </span>
            )}
            {notification.event.group && (
              <span className="font-bold text-blue-900">
                {notification.event.group}
              </span>
            )}
            {notification.read === false && (
              <div className="w-2 h-2 bg-red-500 rounded-full inline-block ms-1 my-auto" />
            )}
          </p>
          <p className="text-gray-500">{notification.timeNotified}</p>
          {notification.event.message && (
            <div className="border p-3 rounded text-gray-600 mt-2">
              {notification.event.message}
            </div>
          )}
        </div>
        {notification.event.photo && (
          <div className="w-[20%] sm:w-[65px] lg:w-12 lg:h-9 ">
            <Image
              src={notification.event.photo}
              alt="Mark Webber"
              className="w-full rounded-lg ms-1"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NotificationCards;

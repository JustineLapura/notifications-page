"use client";
import { useEffect, useState } from "react";
import { notifications } from "./notifications";
import { Notification } from "./types";
import NotificationCards from "@/components/NotificationCards";
import NotificationHeader from "@/components/NotificationHeader";

export default function Home() {
  const [notifs, setNotifs] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifs(notifications);
  }, []);

  const unreadNotifs = notifs.filter((notif) => notif.read === false);

  const markAllNotificationsAsRead = (
    event: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ): void => {
    // Prevent the default click behavior if needed
    event.preventDefault();

    const updatedNotifications = notifs.map((notification) => {
      return { ...notification, read: true };
    });
    setNotifs(updatedNotifications);
  };

  const handleRead = (
    id: number,
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    e.preventDefault();
    setNotifs((prevNotifs) =>
      prevNotifs.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <main className="flex w-full h-full justify-center bg-gray-100 md:py-8">
      <div className="bg-white w-full max-w-[650px] min-h-screen mx-auto md:rounded-xl p-4">
        {/* Notificatoion Header  */}
        <NotificationHeader
          unreadCount={unreadNotifs.length}
          onMarkAllAsRead={markAllNotificationsAsRead}
        />
        <div className="w-full h-full py-5 space-y-4 lg:space-y-2">
          {/* notification cards */}
          {notifs &&
            notifs.map((notification) => (
              <NotificationCards
                notification={notification}
                handleRead={(e) => handleRead(notification.id, e)}
              />
            ))}
        </div>
      </div>

      {/* Moda overlay */}
      {/* Post Modal  */}
    </main>
  );
}

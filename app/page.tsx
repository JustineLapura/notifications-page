"use client";
import Image from "next/image";
import markWebber from "/public/images/avatar-mark-webber.webp";
import angelaGray from "/public/images/avatar-angela-gray.webp";
import jacobThompson from "/public/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "/public/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "/public/images/avatar-kimberly-smith.webp";
import nathanPeterson from "/public/images/avatar-nathan-peterson.webp";
import annaKim from "/public/images/avatar-anna-kim.webp";
import imageChess from "/public/images/image-chess.webp";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface Event {
  post?: string;
  group?: string;
  message?: string;
  photo?: StaticImageData;
}

interface Notification {
  id: number;
  name: string;
  profileImg: StaticImageData;
  timeNotified: string;
  event: Event;
  notif: string;
  read: boolean;
}

const notifications = [
  {
    id: 1,
    name: "Mark Webber",
    profileImg: markWebber,
    timeNotified: "1m ago",
    event: {
      post: "My first tournament today!",
    },
    notif: "reacted to your recent post",
    read: false,
  },
  {
    id: 2,
    name: "Angela Gray",
    profileImg: angelaGray,
    timeNotified: "5m ago",
    event: {},
    notif: "followed you",
    read: false,
  },
  {
    id: 3,
    name: "Jacob Thompson",
    profileImg: jacobThompson,
    timeNotified: "1day ago",
    event: {
      group: "Chess Club",
    },
    notif: "has joined your group",
    read: false,
  },
  {
    id: 4,
    name: "Rizky Hasanuddin",
    profileImg: rizkyHasanuddin,
    timeNotified: "5days ago",
    event: {
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having alots of fun and improving my game.",
    },
    notif: "sent you a private message",
    read: true,
  },
  {
    id: 5,
    name: "Kimberly Smith",
    profileImg: kimberlySmith,
    timeNotified: "1week ago",
    event: {
      photo: imageChess,
    },
    notif: "commented on your picture",
    read: true,
  },
  {
    id: 6,
    name: "Nathan Peterson",
    profileImg: nathanPeterson,
    timeNotified: "2weeks ago",
    event: {
      post: "5 end-game strategies to increase your win rate",
    },
    notif: "reacted to your recent post",
    read: true,
  },
  {
    id: 7,
    name: "Anna Kim",
    profileImg: annaKim,
    timeNotified: "2weeks ago",
    event: {
      group: "Chess Club",
    },
    notif: "left the group",
    read: true,
  },
];

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
    console.log(notifs);
  };

  return (
    <main className="flex w-full h-full justify-center bg-gray-100 md:py-8">
      <div className="bg-white w-full max-w-[650px] min-h-screen mx-auto md:rounded-xl p-4">
        {/* Notificatoion Header  */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-black text-gray-900">
            Notifications
            <span className="bg-blue-900 text-white rounded ms-2 px-3 py-1">
              {unreadNotifs.length}
            </span>
          </h1>
          <p
            onClick={markAllNotificationsAsRead}
            className="text-gray-500 cursor-pointer hover:font-semibold"
          >
            Mark all as read
          </p>
        </div>
        <div className="w-full h-full py-5 space-y-4 lg:space-y-2">
          {/* notification cards */}
          {notifs &&
            notifs.map((notification) => (
              <div
                key={notification.id}
                className={
                  notification.read === false
                    ? "flex w-full bg-gray-100 hover:bg-gray-200 rounded-lg p-4 cursor-pointer"
                    : "flex w-full hover:bg-gray-100 rounded-lg p-4 cursor-pointer"
                }
              >
                <div className="w-[20%] sm:w-[65px] lg:w-16 lg:h-9 rounded-full ps-1 pe-4">
                  <Image
                    src={notification.profileImg}
                    alt="Mark Webber"
                    className="w-full"
                  />
                </div>
                <div className="flex justify-between w-[80%] lg:w-full text-sm">
                  <div className="">
                    <p className="items-center text-gray-700">
                      <span className="font-bold text-gray-900">
                        {notification.name}
                      </span>
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
                    <div className="w-[20%] sm:w-[65px] lg:w-12 lg:h-9 rounded-full">
                      <Image
                        src={notification.event.photo}
                        alt="Mark Webber"
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

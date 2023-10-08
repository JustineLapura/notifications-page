import markWebber from "/public/images/avatar-mark-webber.webp";
import angelaGray from "/public/images/avatar-angela-gray.webp";
import jacobThompson from "/public/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "/public/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "/public/images/avatar-kimberly-smith.webp";
import nathanPeterson from "/public/images/avatar-nathan-peterson.webp";
import annaKim from "/public/images/avatar-anna-kim.webp";
import profile from "/public/images/profile.jpg";

export const notifications = [
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
        group: "Table Tennis Club",
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
          "Hello, thanks for setting up the Table Tennis Club. I've been a member for a few weeks now and I'm already having alots of fun and improving my game.",
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
        photo: profile,
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
        group: "Table Tennis Club",
      },
      notif: "left the group",
      read: true,
    },
  ];
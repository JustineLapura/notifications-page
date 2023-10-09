import raymondImg from "/public/images/raymond.jpg";
import ivanaImg from "/public/images/ivana.webp";
import simonImg from "/public/images/simon.jpg";
import maLong from "/public/images/maLong.jpeg";
import francineImg from "/public/images/francine.jpeg";
import jethroImg from "/public/images/jethro.jpg";
import seniorAgilaImg from "/public/images/senior-agila.webp";
import profile from "/public/images/profile.jpg";

export const notifications = [
    {
      id: 1,
      name: "Raymond Verzosa",
      profileImg: raymondImg,
      timeNotified: "1m ago",
      event: {
        post: "My first tournament today!",
      },
      notif: "reacted to your recent post",
      read: false,
    },
    {
      id: 2,
      name: "Ivana Alawi",
      profileImg: ivanaImg,
      timeNotified: "5m ago",
      event: {},
      notif: "followed you",
      read: false,
    },
    {
      id: 3,
      name: "Simon Siachua",
      profileImg: simonImg,
      timeNotified: "1day ago",
      event: {
        group: "Table Tennis Club",
      },
      notif: "has joined your group",
      read: false,
    },
    {
      id: 4,
      name: "Ma Long",
      profileImg: maLong,
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
      name: "Francine Diaz",
      profileImg: francineImg,
      timeNotified: "1week ago",
      event: {
        photo: profile,
      },
      notif: "commented on your picture",
      read: true,
    },
    {
      id: 6,
      name: "Jethroo Lapura",
      profileImg: jethroImg,
      timeNotified: "2weeks ago",
      event: {
        post: "5 end-game strategies to increase your win rate",
      },
      notif: "reacted to your recent post",
      read: true,
    },
    {
      id: 7,
      name: "Senior Agila",
      profileImg: seniorAgilaImg,
      timeNotified: "2weeks ago",
      event: {
        group: "Table Tennis Club",
      },
      notif: "left the group",
      read: true,
    },
  ];
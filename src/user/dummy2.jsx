import moment from "moment";

export const empData = () => {
  const TEAM_MEMBERS = [
    {
      name: "Alex",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      email: "alex@dashwind.com",
      role: "Owner",
      joinedOn: moment(new Date())
        .add(-5 * 1, "days")
        .format("DD MMM YYYY"),
      lastActive: "5 hr ago",
    },
    {
      name: "Ereena",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
      email: "ereena@dashwind.com",
      role: "Admin",
      joinedOn: moment(new Date())
        .add(-5 * 2, "days")
        .format("DD MMM YYYY"),
      lastActive: "15 min ago",
    },
    {
      name: "John",
      avatar: "https://reqres.in/img/faces/3-image.jpg",
      email: "jhon@dashwind.com",
      role: "Admin",
      joinedOn: moment(new Date())
        .add(-5 * 3, "days")
        .format("DD MMM YYYY"),
      lastActive: "20 hr ago",
    },
    {
      name: "Matrix",
      avatar: "https://reqres.in/img/faces/4-image.jpg",
      email: "matrix@dashwind.com",
      role: "Manager",
      joinedOn: moment(new Date())
        .add(-5 * 4, "days")
        .format("DD MMM YYYY"),
      lastActive: "1 hr ago",
    },
    {
      name: "Virat",
      avatar: "https://reqres.in/img/faces/5-image.jpg",
      email: "virat@dashwind.com",
      role: "Support",
      joinedOn: moment(new Date())
        .add(-5 * 5, "days")
        .format("DD MMM YYYY"),
      lastActive: "40 min ago",
    },
    {
      name: "Miya",
      avatar: "https://reqres.in/img/faces/6-image.jpg",
      email: "miya@dashwind.com",
      role: "Support",
      joinedOn: moment(new Date())
        .add(-5 * 7, "days")
        .format("DD MMM YYYY"),
      lastActive: "5 hr ago",
    },
  ];
  return [TEAM_MEMBERS];
};

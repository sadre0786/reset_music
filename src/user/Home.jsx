import React from "react";
import UserLayout from "../components/UserLayout";
import UserHeader from "../components/UserHeader";
import RecentPlays from "../components/RecentPlays";

const Home = () => {
  return (
    <UserLayout>
      <UserHeader />
      <RecentPlays />
    </UserLayout>
  );
};

export default Home;

import React, { useEffect } from "react";
import HomeCarousel from "../../components/HomeComponents/Home/HomeCarousel";
import HomeRoom from "../../components/HomeComponents/Home/HomeRoom";
import Menu from "../../components/HomeComponents/Home/Menu/Menu";
import About from "../../components/HomeComponents/Home/HomeAbout";
import HomeBlogs from "../../components/HomeComponents/Home/HomeBlogs";
import { useDispatch, useSelector } from "react-redux";
import { actListCity } from "../../redux/actions/actCity";
import Loading from "../../components/Loading";
import Overview from "../../components/HomeComponents/Home/Overview/Overview";

export default function Home() {
  return (
    <div className="">
      <HomeCarousel />
      <HomeRoom />
      <Overview />
      <About />
      <HomeBlogs />
    </div>
  );
}

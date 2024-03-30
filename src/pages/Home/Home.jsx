import React, { useEffect } from "react";
import HomeCarousel from "../../components/HomeComponents/Home/HomeCarousel";
import HomeRoom from "../../components/HomeComponents/Home/HomeRoom";
import Menu from "../../components/HomeComponents/Home/Menu/Menu";
import About from "../../components/HomeComponents/Home/HomeAbout";
import HomeBlogs from "../../components/HomeComponents/Home/HomeBlogs";
import { useDispatch, useSelector } from "react-redux";
import { actListCity } from "../../redux/actions/actCity";
import Loading from "../../components/Loading";
import HomeNews from "../../components/HomeComponents/Home/HomeNews";

export default function Home() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actListCity());
  //   window.scrollTo(0, 0);
  // }, []);

  // const { data: cityReducerData, loading } = useSelector(
  //   (state) => state.cityReducer
  // );

  return (
    <div className="">
      <HomeCarousel />
      <HomeRoom />
      <About />
      {/* {cityReducerData ? <Menu listCityData={cityReducerData} /> : <Loading />} */}
      <HomeBlogs />
      <HomeNews />
    </div>
  );
}

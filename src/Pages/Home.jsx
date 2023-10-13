import React from "react";
import Header from "../Components/Header";
import StaysSearch from "../Components/SearchElements/StaysSearch";
import Offers from "../Components/Stays/Offers";
import Trendingdestinations from "../Components/Stays/Trendingdestinations";
import BrowsebypropertyType from "../Components/Stays/BrowsebypropertyType";
import ExploreSriLanka from "../Components/Stays/ExploreSriLanka";
import Footer from "../Components/Footer";
import TripPlanner from "../Components/Stays/TripPlanner";

export default function Home() {
  return (
    <div>
      <Header />
      <StaysSearch/>
      <Offers/>
      <Trendingdestinations/>
      <BrowsebypropertyType/>
      <ExploreSriLanka/>
      <TripPlanner/>
      <Footer/>
    </div>
  );
}

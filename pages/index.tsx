import Banner from "../components/Home/Banner";
import Category from "../components/Common/Category";
import ListingArea from "../components/Home/ListingArea";
import PlacesArea from "../components/Common/PlacesArea";
import Feedback from "../components/Home/Feedback";
import MostVisitedListing from "../components/Home/MostVisitedListing";
import BusinessArea from "../components/Home/BusinessArea";
import Blog from "../components/Home/Blog";
import ManageBusiness from "../components/Home/ManageBusiness";
import Subscribe from "../components/Common/Subscribe";
import AppDownload from "../components/Common/AppDownload";

const Index = () => {
  return (
    <>
      <Banner />
      <Category />
      <AppDownload />
      <ManageBusiness />
      <ListingArea />
      <Feedback />
      <MostVisitedListing />
      <Blog />
      {/* <Subscribe /> */}
    </>
  );
};
export default Index;

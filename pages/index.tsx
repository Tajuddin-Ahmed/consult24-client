import Banner from '../components/Home/Banner';
import Category from '../components/Common/Category';
import ListingArea from '../components/Home/ListingArea';
import PlacesArea from '../components/Common/PlacesArea';
import Feedback from '../components/Home/Feedback';
import MostVisitedListing from '../components/Home/MostVisitedListing';
import BusinessArea from '../components/Home/BusinessArea';
import Blog from '../components/Home/Blog';
import ManageBusiness from '../components/Home/ManageBusiness';
import Subscribe from '../components/Common/Subscribe';


const Index = () => {
  return (
    <>
       <Banner />
      <Category />
      <ListingArea />
      <PlacesArea />
      <Feedback/>
      <MostVisitedListing/>
      <BusinessArea/>
      <Blog/>
      <ManageBusiness/>
      <Subscribe/>
    </>
  );
};

export default Index;

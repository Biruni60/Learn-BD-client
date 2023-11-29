import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Collaborator from "./Collaborator";
import FeedbackHome from "./FeedbackHome";

import Statistic from "./HomeStat";
import JoinNow from "./JoinNow";
import Questions from "./Questions";
import ContactUs from "./ContactUs";
import Popular from "./Popular";



const Home = () => {
    
    return (
     <>
        <Helmet prioritizeSeoTags>
        <title>LEARNBD | HOME</title>
        </Helmet>
        <div>
          <Banner></Banner>
        </div>
       <div className="my-10">
       <Collaborator></Collaborator>
       </div>
       <div>
        <Popular></Popular>
       </div>
       <div>
        <FeedbackHome></FeedbackHome>
       </div>
       <div>
        <Statistic></Statistic>
       </div>
       <div>
        <JoinNow></JoinNow>
       </div>
       <div>
        <Questions></Questions>
       </div>
       <div><ContactUs></ContactUs></div>
     </>
    );
};

export default Home;
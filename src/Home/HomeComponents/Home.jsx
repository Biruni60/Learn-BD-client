import { Helmet } from "react-helmet-async";
import Banner from "./Banner";



const Home = () => {
    
    return (
     <>
        <Helmet prioritizeSeoTags>
        <title>LEARNBD | HOME</title>
        </Helmet>
        <div className=" p-40">
          <Banner></Banner>
        </div>
     </>
    );
};

export default Home;
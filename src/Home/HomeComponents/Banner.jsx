import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
       <div >
      <div className=''>
      <Carousel>
            <div className='h-96'  >
                <img  src="https://i.ibb.co/9rNKL0b/learning-education-ideas-insight-intelligence-study-concept.jpg"/>
            </div>
            <div className='h-96'>
                <img src="https://i.ibb.co/RQ6mdx9/close-up-hand-writing-notebook-top-view.jpg" />
            </div>
            <div className='h-96'>
                <img  src="https://i.ibb.co/1GSDGTR/3784896-1.jpg" />
            </div>
            <div className='h-96'>
                <img  src="https://i.ibb.co/Xbr8vW6/17947-1.jpg" />
            </div>
            <div className='h-96' >
                <img src="https://i.ibb.co/qpLnFNR/5286640-1.jpg" />
            </div>
            <div className='h-96'>
                <img src="https://i.ibb.co/RC1wWfK/2176-1.jpg" />
            </div>
        </Carousel>
      </div>
       </div>
    );
};

export default Banner;
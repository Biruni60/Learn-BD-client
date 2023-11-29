import { Link } from "react-router-dom";
import SectionTitle from "../../Shared/SectionTitle";


const JoinNow = () => {
    return (
        <div className="my-20">
           <div className="my-10 p-4"><SectionTitle title="JOIN AS A TEACHER"></SectionTitle></div> 
           <div className="card card-side h-96 bg-base-100">
  <figure className="w-1/2"><img src="https://i.ibb.co/XJ5pG6T/8ezm-o3w4-140614-1.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">BECOME A TEACHER</h2>
    <p>Instructors from around the world teach millions of learners on LEARNBD.We provide the tools and skills to teach what you love</p>
    <div className="card-actions justify-end">
      <Link><button className="btn  btn-outline">Start Teaching Today</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default JoinNow;
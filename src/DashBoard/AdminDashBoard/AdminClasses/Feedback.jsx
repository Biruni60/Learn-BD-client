
import ReactStars from "react-rating-stars-component";
const Feedback = ({feedback}) => {
    const{description,ratings,name,image}=feedback
    return (
        <div>
           <div >
           <div className="card  bg-lime-100 shadow-xl">
  <div className="card-body">
    <p className="text-lg"><span className="text-xl font-semibold">feedback: </span>{description}</p>
   <div className="flex">
   <label >
        <p  className="text-xl font-semibold mr-4">ratings:</p>
    </label>
    <ReactStars
    count={5}
    value={ratings}
    size={24}
    activeColor="#ffd700"
  />
   </div>
    <h2 className="text-center text-2xl font-semibold">Feedback Giver,</h2>
    <div className="flex mx-auto items-center mt-4">
  
    <div >
    <div className="avatar">
  <div className="w-12 mr-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={image} />
  </div>
</div>
    </div>
    <p className="text-xl font-semibold">{name}</p>
    </div>
  </div>
</div>
           </div> 
        </div>
    );
};

export default Feedback;
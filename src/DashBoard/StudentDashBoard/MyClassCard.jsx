import { Link } from "react-router-dom";


const MyClassCard = ({myclassitem}) => {
    console.log(myclassitem);
    const {title,name,image,classId}=myclassitem
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/2 h-64"><img className="w-full h-full" src={image} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p><span className="text-xl font-semibold">Teacher Name: </span>{name}</p>
          <div className="card-actions justify-end">
          <Link to={`/dashboard/myenrollclass/${classId}`}> <button className="btn btn-outline">Continue</button></Link>
           
          </div>
        </div>
      </div>
    );
};

export default MyClassCard;
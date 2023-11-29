import SectionTitle from "../../Shared/SectionTitle";


const Collaborator = () => {
    return (
        <div>
            <SectionTitle title="OUR PARTNERS"></SectionTitle>
            <div className="bg-base-200 py-10 mt-10">
                <p className="text-sm text-center my-5">Trusted By Over 1000  Companies and 15000 Students</p>
                <div className="flex justify-evenly">
                    <div>
                        <img className="h-20 rounded-2xl" src="https://i.ibb.co/CwmJGRp/download-4.png" alt="" />
                        <p className="w-36 text-sm">Enlarge Your Knowledge</p>
                    </div>
                    <div>
                        <img className="h-20 rounded-2xl" src="https://i.ibb.co/XjS29pJ/techtalksaustralia-logo.jpg" alt="" />
                        <p className="w-36 text-sm">Learn With Us</p>
                    </div>
                    <div>
                        <img className="h-20 rounded-2xl"  src="https://i.ibb.co/Rg3r9D9/unnamed-1.png" alt="" />
                        <p className="w-36 text-sm ml-1">Explore All</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Collaborator;
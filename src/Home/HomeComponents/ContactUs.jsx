import SectionTitle from "../../Shared/SectionTitle";


const ContactUs = () => {
    return (
        <div className="">
        <SectionTitle title="CONTACT US"></SectionTitle>
   <div className="my-10 p-20 border-black border">
   <p className="text-center">Have a question or need assistance? Please fill out the form below, and our team will get back to you promptly</p>
   <form className="flex flex-col my-10">
       
      
       <textarea className="textarea textarea-accent mb-2" placeholder="Tell Us Your Query..."></textarea>
       <button className="btn btn-outline ">Submit</button>
            </form>

<div className="text-center">
<p><span className="text-xl font-semibold mb-2">Email: </span>info@learnbd.com</p>
<p><span className="text-xl font-semibold mb-2">Phone: </span>0130000000</p>
<p className="text-xl font-semibold mb-2">Physical Address: </p>
<p>123 Educational Street</p>
<p>Cityville, State 54321</p>
<p>Country</p>
</div>
</div>
  
        </div>
    );
};

export default ContactUs;
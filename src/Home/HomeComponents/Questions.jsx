import SectionTitle from "../../Shared/SectionTitle";


const Questions = () => {
    return (
        <div>
        <div className="mt-10"><SectionTitle title="FAQs"></SectionTitle></div>
          <div className="py-10 px-4">
          <div className="collapse ">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  How long do I have access to a course after enrollment?
  </div>
  <div className="collapse-content"> 
    <p>Typically, you have unlimited access to course materials once enrolled. You can learn at your own pace and revisit the content whenever you need.</p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  How do I get technical support?
  </div>
  <div className="collapse-content"> 
    <p>If you encounter technical issues, please visit our Contact Us page to reach our support team. Provide as much detail as possible about the issue, and we all assist you promptly.</p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  Are certificates provided upon course completion?
  </div>
  <div className="collapse-content"> 
    <p>Yes, certificates of completion are provided for most courses. You can download or print your certificate from your user dashboard upon successfully finishing a course.</p>
  </div>
</div>
          </div>
        </div>
    );
};

export default Questions;
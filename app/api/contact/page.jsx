import ContactCard from "./ContactCard";
import CardShadow from "./ContactStyle/Contact.module.css";
import ContactService from "./ContactStyle/ContactService";
const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      image: "/contact1.png",
      title: "Email Address",
      infoOne: "afranislamabir6789@gmail.com",
      infoTwo: "mdtofazzalislam6789@gmail.com",
    },
    {
      id: 2,
      image: "/contact2.png",
      title: "Phone Number",
      infoOne: "+8801306700357",
      infoTwo: "+8801931342951",
    },
    {
      id: 3,
      image: "/contact3.png",
      title: "Office Address",
      infoOne: "Dhaka, Tongi-Gazipur",
      infoTwo: "Dhaka, BANGLADESH",
    },
  ];

  const ourService = [
    {
      id: 1,
      title: "Curated Products",
      para: "Provide Curated Products for all product over $100",
      image: "/tree1.png",
    },
    {
      id: 2,
      title: "Handmade",
      para: "We ensure the product quality that is our main goal",
      image: "/tree2.png",
    },
    {
      id: 3,
      title: "Natural Food",
      para: "Return product within 3 days for any product you buy",
      image: "/tree3.png",
    },
    {
      id: 4,
      title: "Free home delivery",
      para: "We ensure the product quality that you can trust easily",
      image: "/tree4.png",
    },
  ];

  return (
    <div className="my-[20px] md:my-[100px]">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-8">
          {contactInfo.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-[20px] md:mt-[60px]">
          <div className={CardShadow.cardShadow}>
            <div className="md:w-[800px] mx-auto p-4 md:p-0">
              <div>
                <div className="text-center border-b-[1px] py-[20px] md:py-[60px]">
                  <h2 className=" text-[25px] md:text-[40px]">Send Us</h2>
                  <p className="text-[16px] md:text-[18px] mx-auto text-gray-600 md:w-[600px]">
                    Orfarm Grocery is an online shopping platform that
                    simplifies grocery shopping. Users can browse, search,
                    categorize, and sort products effortlessly
                  </p>
                </div>
                <div className="mt-[20px] md:mt-[60px] pb-[30px] md:pb-[100px]">
                  <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className="col-span-1">
                      {" "}
                      <div>
                        <label>Your name *</label>
                        <input
                          type="text"
                          className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 rounded-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      {" "}
                      <div>
                        <label>Your email *</label>
                        <input
                          type="text"
                          className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 mb-4 rounded-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>Subject *</label>
                    <input
                      type="text"
                      className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 mb-4 rounded-sm"
                      required
                    />
                  </div>
                  <div>
                    <label>Your message *</label>
                    <textarea
                      className="w-full bg-[#f3f4f7] outline-none px-4 py-2 mt-2 rounded-sm"
                      cols="30"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button className="bg-[#80b500] py-[10px] text-white px-8 rounded-sm mt-4">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] md:mt-[100px]">
        <div className={`md:w-[1700px] mx-auto ${CardShadow.cardShadow}`}>
          <div className="flex items-center md:flex-row flex-col gap-4 md:gap-0 justify-center py-4 md:py-8">
            {ourService.map((item) => (
              <ContactService key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

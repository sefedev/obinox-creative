import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="#contact"
      className="flex flex-col w-screen gap-12 px-4 py-16 bg-orange-400 scroll-mt-[132rem] md:px-32 md:flex-row md:justify-center md:items-center"
    >
      <div className="flex flex-col flex-1 gap-4 text-white">
        <Image
          src="/assets/images/marketing.png"
          alt="Marketing"
          width={300}
          height={300}
        />
        <span className="flex flex-col gap-2 text-left text-wrap">
          <h3 className="text-4xl font-semibold">Get Intouch</h3>
          <p className="text-xs">
            interested in discussing a graphic design project with us. Schedule
            a time to chat? Looking forward to hearing from you!
          </p>
        </span>
      </div>

      <div className="flex flex-col flex-1 rounded-md bg-[rgba(41,45,56,1)]">
        <form>
          <div className="flex flex-col gap-4 p-4 py-8 md:p-8 ">
            <input type="text" placeholder="Name" className="p-4 rounded-md" />
            <input type="text" placeholder="Email" className="p-4 rounded-md" />
            <textarea
              rows="4"
              cols="50"
              placeholder="Message"
              className="p-4 rounded-md"
              id="myTextarea"
              name="myTextarea"
            ></textarea>
            <div className="justify-end mt-4 md:flex">
              <button className="w-full px-12 py-4 transition-all duration-300 bg-white border rounded-md md:w-fit hover:bg-inherit hover:text-white">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React, {useEffect, useRef} from "react";


const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, []);
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Cotact
          </p>
          <p className="py-6">Let's get in touch!!</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
          ref={formRef}
            action="https://getform.io/f/20b54902-2452-4671-8b00-455f31104303"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
            required
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="text-white bg-gradient-to-r from-blue-900 to-purple-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
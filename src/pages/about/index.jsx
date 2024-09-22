import React from "react";
import Banner from "../../components/banner";

const About = () => {
  return (
    <>
      <Banner
        title="About Us"
        content="We are a travel agency that provides the best tours and services for you"
      />
      <div className="container max-w-5xl mx-auto mt-12 grid grid-cols-4 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">Business Plan</h2>
          <p className="text-lg text-justify">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">
            Brand Identity
          </h2>
          <p className="text-lg text-justify">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">Social Media</h2>
          <p className="text-lg text-justify">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-center mb-4">Data Analyze</h2>
          <p className="text-lg text-justify">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center h-[700px] mt-12">
        <img
          src="https://res.cloudinary.com/dx2o9ki2g/image/upload/v1726930497/ufnh11ha7livzgplfkjz.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-full px-24 flex">
          <div className="w-2/3 py-32">
            <h2 className="text-3xl font-bold text-center mb-4">Our Mission</h2>
            <p className="text-lg text-justify">
              Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
              lacus vel augue laoreet rutrum faucibus dolor auctor.
            </p>
            <br />
            <p className="text-lg text-justify">
              Maecenas faucibus mollis interdum. Donec id elit non mi porta
              gravida at eget metus. Aenean lacinia. Donec ullamcorper nulla non
              metus auctor fringilla.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-96"
        style={{
          backgroundImage: `url("https://www.efacility.in/wp-content/uploads/2020/10/Travel-Expense-Landing-Banner-3.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto max-w-5xl h-full flex justify-between items-center">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold">12000+</h3>
            <p className="text-xl mt-4">Customers</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold">1400</h3>
            <p className="text-xl mt-4">Projects</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold">16800</h3>
            <p className="text-xl mt-4">Working Hours</p>
          </div>
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold">17000</h3>
            <p className="text-xl mt-4">SKUs</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl h-full flex justify-between items-center py-28 gap-6">
        <h2 className="w-4/12 font-bold text-3xl">Etiam Vehicula Euismod Fusce Fermentum .</h2>
        <p className="w-8/12">
          Vestibulum id ligula porta felis euismod semper. Cras mattis
          consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare
          sem lacinia quam venenatis vestibulum. Aenean eu leo quam.
          Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus.Ligula Dolor.
        </p>
      </div>
    </>
  );
};

export default About;

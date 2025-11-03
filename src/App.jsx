import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAE9E3] text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-20 py-6">
        <div className="flex items-center gap-2">
          <img
            src="https://img.icons8.com/emoji/48/leaf-fluttering-in-wind.png"
            alt="logo"
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold text-[#E8612C]">Zeal Taste</h1>
        </div>

        <div className="flex items-center gap-2 text-[#E8612C] text-sm">
          <i className="fa fa-envelope"></i>
          <a href="mailto:info@zealtaste.com" className="hover:underline">
            info@zealtaste.com
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 md:py-24">
        {/* Left Text */}
        <div className="md:w-1/2 text-left">
          <p className="uppercase text-[#E8612C] font-semibold tracking-wide mb-3">
            Flavor Wheels
          </p>
          <h2 className="text-[#1A3A32] text-4xl md:text-5xl font-extrabold leading-tight mb-5">
            Zeal Taste: <br />
            Culinary Delights <br />
            on Wheels
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Bringing Gourmet Street Food to Your Neighborhood – Fresh,
            Flavorful, and Fast!
          </p>
          <button className="bg-[#E8612C] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d55420] transition">
            Book Your Table
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food Truck"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[50%_50%_0_0/60%_60%_0_0]"
          />
        </div>
      </section>
            {/* Info Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Find Us */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-[#E8612C] rounded-full p-3">
                <i className="fa fa-map-marker text-white text-xl"></i>
              </div>
            </div>
            <h3 className="text-[#1A3A32] font-bold text-lg mb-2">Find Us</h3>
            <p className="text-gray-600 leading-relaxed">
              2234 Innovation Drive <br />
              Suite 587 Citroville, State <br />
              89012 Country
            </p>
          </div>

          {/* Open Hours */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-[#E8612C] rounded-full p-3">
                <i className="fa fa-clock-o text-white text-xl"></i>
              </div>
            </div>
            <h3 className="text-[#1A3A32] font-bold text-lg mb-2">Open Hours</h3>
            <p className="text-gray-600 leading-relaxed">
              Mon to Fri <br />
              9:00 AM - 10:00 PM <br />
              Sat 9:00 AM - 10 PM
            </p>
          </div>

          {/* Reservation */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-[#E8612C] rounded-full p-3">
                <i className="fa fa-calendar text-white text-xl"></i>
              </div>
            </div>
            <h3 className="text-[#1A3A32] font-bold text-lg mb-2">Reservation</h3>
            <p className="text-gray-600 leading-relaxed">
              +1 (800) 555-1234 <br />
              abc@zealtaste.com
            </p>
          </div>
        </div>
      </section>
            {/* Zeal Taste Adventure Section */}
      <section className="bg-[#E9F7F5] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <p className="text-[#E8612C] font-semibold mb-2 uppercase tracking-wide">
            Our Story
          </p>
          <h2 className="text-[#1A3A32] text-3xl md:text-4xl font-bold mb-4">
            The Zeal Taste Adventure
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Journey with us from our inception to today as we revolutionize the
            way foodies enjoyed on the go. Our passion for culinary excellence
            and commitment to quality have driven us to create a unique dining
            experience, bringing gourmet flavors right to your doorstep.
          </p>

          {/* Image and Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
            {/* Left Images */}
            <div className="flex flex-col items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
                alt="Friends eating"
                className="w-48 h-48 object-cover rounded-[50%_0_0_50%/50%_0_0_50%]"
              />
              <div className="bg-[#1A3A32] text-white w-36 h-36 rounded-full flex flex-col items-center justify-center">
                <i className="fa fa-youtube text-2xl mb-2"></i>
                <h4 className="text-xl font-bold">14K+</h4>
                <p className="text-[#E8A67C] text-sm font-semibold">Subscribe</p>
              </div>
            </div>

            {/* Center Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
                alt="Zeal Taste Adventure"
                className="w-80 h-110 object-cover rounded-[50%]"
              />
            </div>

            {/* Right Images */}
            <div className="flex flex-col items-center gap-6">
              <div className="bg-[#1A3A32] text-white w-36 h-36 rounded-full flex flex-col items-center justify-center">
                <i className="fa fa-instagram text-2xl mb-2"></i>
                <h4 className="text-xl font-bold">14K+</h4>
                <p className="text-[#E8A67C] text-sm font-semibold">Follow us</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="Food lovers"
                className="w-48 h-48 object-cover rounded-[0_50%_50%_0/0_50%_50%_0]"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#fffaf6] py-16 px-6">
  <div class="max-w-6xl mx-auto text-center">
    <p class="text-[#e05d2f] font-semibold tracking-wider uppercase mb-2">Featured Delicacies</p>
    <h2 class="text-3xl md:text-4xl font-bold text-[#0f3c2e] mb-12">Signature Selections</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
<div class="bg-[#fff1e7] p-8 rounded-3xl shadow-sm text-center">
  <img
    src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300&q=80"
    alt="Truffle Mac & Cheese"
    class="w-28 h-28 object-cover rounded-full mx-auto mb-6"
  />
  <h3 class="text-xl font-bold text-[#0f3c2e] mb-2">Truffle Mac & Cheese</h3>
  <p class="text-gray-600 text-sm mb-4">
    Creamy macaroni and cheese infused with the rich aroma of truffle oil, topped with a crisp breadcrumb crust.
  </p>
  <span class="bg-[#e05d2f] text-white px-4 py-2 rounded-full font-semibold">$12</span>
</div>

<div class="bg-[#fff1e7] p-8 rounded-3xl shadow-sm text-center">
  <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=300&q=80" 
       alt="Gourmet Beef Sliders" 
       class="w-28 h-28 object-cover rounded-full mx-auto mb-6"/>
  <h3 class="text-xl font-bold text-[#0f3c2e] mb-2">Gourmet Beef Sliders</h3>
  <p class="text-gray-600 text-sm mb-4">
    Juicy beef patties grilled to perfection, layered with cheddar, onions, and our special house sauce.
  </p>
  <span class="bg-[#e05d2f] text-white px-4 py-2 rounded-full font-semibold">$15</span>
</div>

<div class="bg-[#fff1e7] p-8 rounded-3xl shadow-sm text-center">
  <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=300&q=80" 
       alt="Spicy Shrimp Tacos" 
       class="w-28 h-28 object-cover rounded-full mx-auto mb-6"/>
  <h3 class="text-xl font-bold text-[#0f3c2e] mb-2">Spicy Shrimp Tacos</h3>
  <p class="text-gray-600 text-sm mb-4">
    Fresh shrimp marinated in chili-lime glaze, wrapped in soft tortillas with crunchy slaw and tangy sauce.
  </p>
  <span class="bg-[#e05d2f] text-white px-4 py-2 rounded-full font-semibold">$14</span>
</div>

<div class="bg-[#fff1e7] p-8 rounded-3xl shadow-sm text-center">
  <img src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300&q=80" 
       alt="Vegetable Tempura" 
       class="w-28 h-28 object-cover rounded-full mx-auto mb-6"/>
  <h3 class="text-xl font-bold text-[#0f3c2e] mb-2">Vegetable Tempura</h3>
  <p class="text-gray-600 text-sm mb-4">
    Crispy assortment of seasonal veggies served with a savory dipping sauce and a hint of ginger zest.
  </p>
  <span class="bg-[#e05d2f] text-white px-4 py-2 rounded-full font-semibold">$10</span>
</div>

    </div>
  </div>
  </section>
  <section class="bg-[#e6f7f3] py-16">
  <div class="max-w-6xl mx-auto px-6">

    <div class="text-center mb-10">
      <p class="text-[#e05d2f] font-semibold uppercase text-sm tracking-wider mb-2">
        About Us
      </p>
      <h2 class="text-3xl font-bold text-[#0f3c2e]">Voices of Flavor</h2>
    </div>


    <div class="flex flex-col md:flex-row items-center md:items-start gap-10">

      <div class="shrink-0">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=500&q=80"
          alt="Customer enjoying meal"
          class="w-80 h-80 object-cover rounded-[60%_0_0_60%/60%_0_0_60%] shadow-md"
        />
      </div>


      <div class="flex-1 text-[#0f3c2e]">
        <span class="text-[#e05d2f] text-4xl font-bold mb-4 inline-block">❝</span>
        <p class="text-gray-700 mb-6 leading-relaxed text-lg">
          "Zeal Taste is a revelation in street food! The gourmet dishes are not
          only delicious but also beautifully presented. The food truck
          experience is both convenient and indulgent. I can’t get enough of
          their truffle mac & cheese!"
        </p>
        <h4 class="font-semibold text-[#0f3c2e]">Sophia Martinez</h4>
        <p class="text-sm text-gray-500">San Francisco, CA</p>
      </div>
    </div>


    
  </div>
</section>
<section class="bg-[#FAE9E3] py-16">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    

    <div class="flex flex-col items-center">
      <div class="w-16 h-16 rounded-full bg-[#F36E3E] flex items-center justify-center mb-4">
        <i class="fa-solid fa-tag text-white text-2xl"></i>
      </div>
      <h3 class="font-semibold text-lg text-[#003C3C]">Reasonable<br/>Prices</h3>
    </div>

    <div class="flex flex-col items-center">
      <div class="w-16 h-16 rounded-full bg-[#F36E3E] flex items-center justify-center mb-4">
        <i class="fa-solid fa-couch text-white text-2xl"></i>
      </div>
      <h3 class="font-semibold text-lg text-[#003C3C]">Cozy<br/>Atmosphere</h3>
    </div>


    <div class="flex flex-col items-center">
      <div class="w-16 h-16 rounded-full bg-[#F36E3E] flex items-center justify-center mb-4">
        <i class="fa-solid fa-award text-white text-2xl"></i>
      </div>
      <h3 class="font-semibold text-lg text-[#003C3C]">Good Quality<br/>Products</h3>
    </div>

  </div>
</section>
<section class="bg-[#004D43] text-center py-16 text-white">
  <div class="max-w-lg mx-auto px-6">
    <p class="text-sm uppercase tracking-wider text-[#F36E3E] mb-2">Book Your Table</p>
    <h2 class="text-3xl font-bold mb-3">Make a Reservation</h2>
    <p class="text-sm text-gray-300 mb-8">
      Call +1 (800) 555-1234 from 5a – 11p daily, or book online.<br/>
      Reservations required for parties of 4 or more.
    </p>

    <form class="space-y-4">
      <input type="text" placeholder="Your name" class="w-full px-4 py-3 rounded-full bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-[#F36E3E]" />
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Phone number" class="px-4 py-3 rounded-full bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-[#F36E3E]" />
        <input type="email" placeholder="Email address" class="px-4 py-3 rounded-full bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-[#F36E3E]" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Date/time" class="px-4 py-3 rounded-full bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-[#F36E3E]" />
        <input type="text" placeholder="Seats" class="px-4 py-3 rounded-full bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-[#F36E3E]" />
      </div>

      <textarea placeholder="Message" rows="4" class="w-full px-4 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-[#F36E3E]"></textarea>

      <button type="submit" class="bg-[#F36E3E] hover:bg-[#ff8153] text-white font-semibold px-8 py-3 rounded-full transition">
        Book Your Table
      </button>
    </form>

    <div class="flex justify-center space-x-4 mt-8">
      <a href="#" class="w-10 h-10 bg-[#F36E3E] rounded-full flex items-center justify-center hover:bg-[#ff8153]"><i class="fab fa-facebook-f"></i></a>
      <a href="#" class="w-10 h-10 bg-[#F36E3E] rounded-full flex items-center justify-center hover:bg-[#ff8153]"><i class="fab fa-twitter"></i></a>
      <a href="#" class="w-10 h-10 bg-[#F36E3E] rounded-full flex items-center justify-center hover:bg-[#ff8153]"><i class="fab fa-instagram"></i></a>
      <a href="#" class="w-10 h-10 bg-[#F36E3E] rounded-full flex items-center justify-center hover:bg-[#ff8153]"><i class="fab fa-pinterest"></i></a>
    </div>

    <p class="text-gray-400 text-sm mt-6">
      Developed by <span class="text-[#F36E3E]">ZealousWeb</span> — Powered by Webflow
    </p>
    <div class="text-gray-400 text-xs mt-2">License • Instructions</div>
  </div>
</section>


      
    </div>
  );
}

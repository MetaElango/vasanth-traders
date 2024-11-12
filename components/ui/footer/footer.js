import { User, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#484848] max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row p-4 md:p-16 pt-16">
        <div className="flex-1">
          <div>
            <h3 className="text-white text-3xl font-bold">Quick Links</h3>
            <ul className="mt-4 text-xl text-[#ffff00] font-semibold">
              <li className="mt-2">
                <a href="/">Home</a>
              </li>
              <li className="mt-2">
                <a href="/products">Products</a>
              </li>
              <li className="mt-2">
                <a href="/about">About</a>
              </li>
              <li className="mt-2">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="mt-16">
            <h3 className="text-white text-3xl font-bold">Our Products</h3>
            <ul className="mt-4 text-xl text-[#ffff00] font-semibold">
              <li className="mt-2">
                <a href="/products">Puffed Rice</a>
              </li>
              <li className="mt-2">
                <a href="/products">Parboiled Rice</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className="mt-16 lg:mt-0 lg:w-3/5 mx-auto bg-[#ffff00] min-h-full">
            <div className="p-8">
              <div className="flex">
                <div>
                  <User
                    size={24}
                    color="#dc3850"
                    className="inline-block mt-1"
                  />
                </div>
                <div className="pl-4">
                  <p className="text-xl md:text-2xl font-bold">Mr. Vasanth</p>
                  <p className="text-lg md:text-xl">(Owner & Operation Head)</p>
                </div>
              </div>
              <div className="flex mt-8">
                <div>
                  <Phone
                    size={24}
                    color="#dc3850"
                    className="inline-block mt-2"
                  />
                </div>
                <div className="pl-4">
                  <a
                    href="tel:+917708317656"
                    className="text-xl md:text-2xl inline-block underline font-bold underline-offset-4"
                  >
                    +91 77083 17656
                  </a>

                  <a
                    href="tel:+919865565655"
                    className="text-xl md:text-2xl inline-block underline font-bold underline-offset-4 mt-4"
                  >
                    +91 98655 65655
                  </a>
                </div>
              </div>

              <div className="flex mt-8">
                <div>
                  <p className="text-lg md:text-xl">
                    © 2024 Sri Vasanth Traders. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

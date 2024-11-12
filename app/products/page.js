import montserrat from "@/components/montserrat-font";
import Footer from "@/components/ui/footer/footer";
import GoogleMap from "@/components/ui/googleMap/googleMap";
import { cn } from "@/lib/utils";
import { CornerDownRight, Mail, MapPin, Phone } from "lucide-react";

export default function Products() {
  return (
    <div>
      <section className="p-4 md:p-16 pt-16">
        <h2
          className={cn(
            `text-2xl md:text-3xl ${montserrat.className} text-heading_color `
          )}
        >
          Our Products
        </h2>
      </section>
      <section>
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex-1 px-4 md:px-16 mt-8 lg:mt-0">
            <h2 className={cn(`text-2xl md:text-3xl  ${montserrat.className}`)}>
              Health benifits of{" "}
              <span className="text-heading_color font-semibold">
                Puffed Rice
              </span>
            </h2>
            <ul className="mt-4 text-lg md:w-3/4">
              <li className="mt-2">
                <span>
                  <CornerDownRight
                    size={20}
                    color="#dc3850"
                    className="inline-block mr-2"
                  />
                </span>
                <span className=" font-bold">Low in Calories:</span> Ideal for
                weight management, puffed rice is light and low in calories,
                making it a great snack option.
              </li>

              <li className="mt-2">
                <span>
                  <CornerDownRight
                    size={20}
                    color="#dc3850"
                    className="inline-block mr-2"
                  />
                </span>
                <span className=" font-bold">Gluten-Free:</span> Suitable for
                those with gluten sensitivities or celiac disease, as it is
                naturally gluten-free.
              </li>

              <li className="mt-2">
                <span>
                  <CornerDownRight
                    size={20}
                    color="#dc3850"
                    className="inline-block mr-2"
                  />
                </span>
                <span className=" font-bold">Easy to Digest:</span> Its light
                texture makes it gentle on the digestive system, promoting easy
                digestion.
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <img src="/images/puffed-rice.webp" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-0">
          <div className="flex-1">
            <img src="/images/parboiled-rice.jpg" />
          </div>
          <div className="flex-1 mt-8">
            <h2
              className={cn(
                `text-2xl md:text-3xl  ${montserrat.className} px-4 md:px-16`
              )}
            >
              Health benifits of{" "}
              <span className="text-heading_color font-semibold">
                Parboiled Rice
              </span>
            </h2>
            <ul className="mt-4 text-lg md:w-3/4 pl-4 md:pl-16 pb-8">
              <li className="mt-2">
                <span>
                  <CornerDownRight
                    size={20}
                    color="#dc3850"
                    className="inline-block mr-2"
                  />
                </span>
                <span className=" font-bold">Rich in Nutrients:</span> Parboiled
                rice retains more nutrients like B vitamins and minerals due to
                its unique processing method, making it a nutritious choice.
              </li>

              <li className="mt-2">
                <span>
                  <CornerDownRight
                    size={20}
                    color="#dc3850"
                    className="inline-block mr-2"
                  />
                </span>
                <span className=" font-bold">Low Glycemic Index:</span>{" "}
                Parboiled rice has a lower glycemic index compared to regular
                white rice, helping to manage blood sugar levels.
              </li>

              <li className="mt-2">
                <span>
                  <CornerDownRight
                    size={20}
                    color="#dc3850"
                    className="inline-block mr-2"
                  />
                </span>
                <span className=" font-bold">Supports Digestive Health:</span>{" "}
                With its high fiber content, parboiled rice can aid in digestion
                and support a healthy gut.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <h2
          className={cn(
            `text-2xl md:text-3xl ${montserrat.className} text-heading_color p-4 md:p-16 pt-16`
          )}
        >
          Connect with us now
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 bg-[#ffff00] py-8 md:py-0">
            <div className="p-4 md:p-16">
              <h2
                className={cn(
                  `text-2xl md:text-4xl ${montserrat.className} font-extrabold`
                )}
              >
                Contact
              </h2>
              <div className="mt-4">
                <div className="flex">
                  <div>
                    <MapPin
                      size={24}
                      color="#dc3850"
                      className="inline-block mt-1"
                    />
                  </div>
                  <div className="pl-4">
                    <p className="text-xl md:text-2xl font-bold">
                      Sri Vasanth Traders
                    </p>
                    <p className="text-lg md:text-xl">69, RS Road,</p>
                    <p className="text-lg md:text-xl">Perundura, Erode,</p>
                    <p className="text-lg md:text-xl">
                      Tamilnadu, India - 638052
                    </p>
                    <a
                      href={`https://www.google.com/maps?q=${11.273654},${77.588783}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg md:text-xl inline-block mt-2 underline underline-offset-4"
                    >
                      Direction
                    </a>
                  </div>
                </div>
                <div className="flex mt-8">
                  <div>
                    <Phone
                      size={24}
                      color="#dc3850"
                      className="inline-block mt-1"
                    />
                  </div>
                  <div className="pl-4">
                    <p className="text-xl md:text-2xl font-bold">
                      +91 77083 17656
                    </p>
                    <a
                      href="tel:+917708317656"
                      className="text-lg md:text-xl inline-block underline underline-offset-4 mt-2"
                    >
                      Make call
                    </a>
                  </div>
                </div>

                <div className="flex mt-8">
                  <div>
                    <Mail
                      size={24}
                      color="#dc3850"
                      className="inline-block mt-1"
                    />
                  </div>
                  <div className="pl-4">
                    <p className="text-xl md:text-2xl font-bold">
                      srivasanthtraders@gmail.com
                    </p>
                    <a
                      href="mailto:srivasanthtraders@gmail.com?subject=Inquiry%20About%20Puffed%20Rice%20and%20Parboiled%20Rice%20Products&body=Hello%20Sri%20Vasanth%20Traders%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20puffed%20rice%20and%20parboiled%20rice%20products.%20Could%20you%20please%20provide%20me%20with%20details%20about%20the%20product%20specifications%2C%20pricing%2C%20and%20availability%3F%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A%5BYour%20Name%5D%0D%0A%5BYour%20Contact%20Information%5D"
                      className="text-lg md:text-xl inline-block underline underline-offset-4 mt-2"
                    >
                      Send email
                    </a>
                  </div>
                </div>
                {/* <p>
                  <MapPin size={24} color="#dc3850" className="inline-block" />
                  <span className="inline-block ml-4 text-xl align-middle font-bold">
                    Sri Vasanth Traders
                  </span>
                </p>
                <p>
                  <span className="inline-block ml-4 text-xl align-middle">
                    Sri Vasanth Traders
                  </span>
                </p> */}
              </div>
            </div>
          </div>
          <div className="flex-1 ">
            <GoogleMap />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

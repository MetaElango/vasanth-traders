import montserrat from "@/components/montserrat-font";
import Footer from "@/components/ui/footer/footer";
import GoogleMap from "@/components/ui/googleMap/googleMap";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="p-4 md:p-16 pt-16">
        <h2
          className={cn(
            `text-2xl md:text-3xl ${montserrat.className} text-heading_color `
          )}
        >
          About Our Company
        </h2>
        <p className="mt-8 text-xl leading-relaxed md:w-3/4">
          Sri Vasanth Traders is a respected and established enterprise in the
          rice processing and distribution industry, with roots dating back over
          three decades. Founded with a vision to deliver premium-quality rice
          to customers across Tamil Nadu, Sri Vasanth Traders has become a
          trusted name in the parboiled and puffed rice market. Inspired by a
          commitment to excellence, our company proudly offers the highest
          standards of quality, integrity, and professionalism in every grain we
          produce. With our flagship brands, renowned for their taste and
          quality, we continue to uphold our legacy, catering to the needs of
          our valued customers with the same dedication that has defined us
          since our inception.
        </p>
        <p className="mt-8 text-xl leading-relaxed md:w-3/4">
          Our puffed rice is not only delightful but also packed with nutrients,
          making it an ideal choice for health-conscious consumers. Low in
          calories, Sri Vasanth Traders’ puffed rice can seamlessly fit into
          weight-loss diets, while its rich sodium content helps in maintaining
          balanced blood pressure levels. Gluten-free and perfect for those with
          dietary restrictions like celiac disease, our puffed rice stands out
          as a wholesome snack option for everyone. Whether you choose our
          premium products, you can trust that Sri Vasanth Traders is committed
          to providing rice that benefits your well-being and enhances your
          meals. Reach out to us to learn more about our products and discover
          the exceptional quality we bring to your table.
        </p>
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
                    <p className="text-lg md:text-xl">Perundurai, Erode,</p>
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

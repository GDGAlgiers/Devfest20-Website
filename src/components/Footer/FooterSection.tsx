import React, { ReactElement } from "react"
import Section from "../common/layout/Section"
import { H3 } from "../typography/typography"
import { H5 } from "../typography/typography"
import { Link } from "gatsby"

function FooterSection(): ReactElement {
  return (
    <Section id="footer">
      <div className="w-full pt-16 mb-20">
        <div className="w-full lg:w-2/5 mt-64 m-auto border-t-2 border-gray-600">
          <div className="mt-2 flex md:flex-row pt-8 pb-2 justify-center items-start">
            <img
              src={require("../../assets/svgs/gdgAlgiersLogo.svg")}
              alt="gdgAlgiers"
              className="w-14 mr-2"
            />
            <H5 className="text-1xl font-hairline text-black">GDG Algiers</H5>
          </div>
          <img
            src={require("../../assets/svgs/devfestNightBlue.svg")}
            alt="gdgAlgiers"
            className="mt-5 m-auto"
            style={{
              width: "350px",
            }}
          />

          <p className="text-center mt-6 text-nightBlue">
            One weekend, Multi Tracks, Multiple Challenges. Join This global
            moment that empowers developers to teach, learn, and connect when
            they may need it the most
          </p>
          <div className="mt-5 flex justify-center">
            <Link to="https://www.instagram.com/gdg_algiers/" target="_blank">
              <img
                src={require("../../assets/svgs/instagram.svg")}
                alt="gdgAlgiers"
                className="ml-5 mr-5"
                style={{
                  width: "25px",
                }}
              />
            </Link>

            <Link to="https://twitter.com/GDG_Algiers" target="_blank">
              <img
                src={require("../../assets/svgs/twitter.svg")}
                alt="gdgAlgiers"
                style={{
                  width: "25px",
                }}
              />
            </Link>

            <Link to="https://www.facebook.com/GDGAlgiers/" target="_blank">
              <img
                src={require("../../assets/svgs/facebook.svg")}
                alt="gdgAlgiers"
                className="ml-5 mr-5"
                style={{
                  width: "25px",
                }}
              />
            </Link>
          </div>
        </div>
      </div>

      <footer className="flex justify-around items-center py-4 bg-nightBlue">
        <Link to="https://gdg.community.dev/devfest/" target="_blank">
          <H3 className="text-white text-base md:text-xl">
            Devfest in the world
          </H3>
        </Link>

        <Link to="https://www.gdgalgiers.com/" target="_blank">
          <H3 className="text-white text-base md:text-xl">GDG Algiers</H3>
        </Link>

        <Link to="https://www.wtm-algiers.tech/" target="_blank">
          <H3 className="text-white text-base md:text-xl">WTM Algiers</H3>
        </Link>

        <Link
          to="https://www.facebook.com/events/enp-ecole-nationale-polytechnique-dalger/devfest-algiers-2019/1345054435675671/"
          target="_blank"
        >
          <H3 className="text-white text-base md:text-xl">2019 edition</H3>
        </Link>
      </footer>
    </Section>
  )
}

export default FooterSection

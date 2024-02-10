import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import MainHeader from "../components/main-header";
import { useRouter } from "next/router";
import SellYourHomeContainer from "../components/sell-your-home-container";
import CardContainer from "../components/card-container";
import WashingtonContainer from "../components/washington-container";
import FormContainer from "../components/form-container";

const LandingPage = () => {
  const router = useRouter();

  const onSearchCTAClick = useCallback(() => {
    router.push("/properties-grid-view");
  }, [router]);

  return (
    <div className="w-full h-[5096px] relative bg-gray-white flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-large-400">
      <MainHeader />
      <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
            <div className="self-stretch relative leading-[72px] font-semibold">
              Find Your Dream Home
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-large-400 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[17px] text-left text-base text-primary-700 font-body-large-400">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start">
                <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                  Rent
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-3 px-6 bg-gray-white rounded overflow-hidden flex flex-row items-start justify-start">
                <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-primary-400 text-center">
                  Sale
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
              <div className="flex-1 rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[0px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px] text-center">
                  <div className="relative leading-[24px] capitalize font-semibold">
                    Locations
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {[
                          { value: "New York" },
                          { value: "Los Angeles" },
                          { value: "Chicago" },
                          { value: "Berlin" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="w-[150px] relative leading-[24px] capitalize font-semibold flex items-end">
                    Property Type
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="w-[150px] relative leading-[24px] capitalize font-semibold flex items-end">
                    Rent Range
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <button
                  className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 w-[102px] rounded flex flex-row items-center justify-center box-border hover:bg-darkslateblue md:w-full md:hover:items-center md:hover:justify-center sm:self-stretch sm:w-auto sm:max-w-full sm:hover:self-stretch sm:hover:w-auto sm:hover:max-w-full"
                  onClick={onSearchCTAClick}
                >
                  <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
                    Search
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%] text-left text-5xl text-gray-white">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-1@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Arlington
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0">
        <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]">
            <SellYourHomeContainer
              imageId="/icon.svg"
              homeActionText="Sell your home"
            />
            <SellYourHomeContainer
              imageId="/icon.svg"
              homeActionText="Rent your home"
              propWidth="312px"
            />
            <SellYourHomeContainer
              imageId="/icon.svg"
              homeActionText="Buy a home"
              propWidth="unset"
            />
            <SellYourHomeContainer
              imageId="/icon.svg"
              homeActionText="Free marketing"
              propWidth="312px"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
            <CardContainer
              propertyImage="/property-image@2x.png"
              ellipse1="/ellipse-1@2x.png"
            />
            <CardContainer
              propertyImage="/property-image@2x.png"
              ellipse1="/ellipse-1@2x.png"
              propFlex="1"
              propMinWidth="355px"
              propWidth="unset"
            />
            <CardContainer
              propertyImage="/property-image@2x.png"
              ellipse1="/ellipse-1@2x.png"
              propFlex="1"
              propMinWidth="355px"
              propWidth="unset"
            />
            <CardContainer
              propertyImage="/property-image@2x.png"
              ellipse1="/ellipse-1@2x.png"
              propFlex="1"
              propMinWidth="355px"
              propWidth="unset"
            />
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
          <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
            Load more listing
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px]">
            <WashingtonContainer />
            <WashingtonContainer propBackgroundImage="url('/card-21@3x.png')" />
            <WashingtonContainer propBackgroundImage="url('/card-31@3x.png')" />
            <WashingtonContainer propBackgroundImage="url('/card-41@3x.png')" />
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
          <div className="relative text-base leading-[24px] font-medium font-body-large-400 text-gray-white text-center">
            Load more listing
          </div>
        </button>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px]">
        <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch h-9 relative leading-[36px] inline-block">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-[18px] leading-[30px] font-components-input-text text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    First name
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1 md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    Last name
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Email id
                </div>
              </div>
              <div className="self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1">
                <div className="h-6 relative tracking-[0.15px] leading-[24px] inline-block">
                  Comments or questions
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-primary-500 w-[222px] h-[46px] rounded flex flex-col items-center justify-center hover:bg-royalblue lg:bg-blueviolet sm:self-stretch sm:w-auto sm:max-w-full">
                <div className="w-[203.1px] relative text-base font-components-input-text text-gray-white text-center inline-block">
                  Submit
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default LandingPage;

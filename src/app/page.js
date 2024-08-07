"use client"
import { useState } from 'react'
import {
  heroTitle, heroSubTitle, brandTitle, brandSubText, serviceList, serviceSubTitle,
  brandText, aboutTitle, aboutSubText, serviceTitle, promiseTitle, promiseSubText,
  promiseBoxOneTitle, promiseBoxOneSubText, promiseBoxThreeSubText, promiseBoxThreeTitle,
  promiseBoxTwoSubText, promiseBoxTwoTitle, blogTitle, blogSubTitle,
  clientTitle,
  clientSubText,
  clientText
} from "../config/constant"
import TitleText from "../components/titleText";
import BrandBox from "../components/home/brandBox";
import ClientBox from "../components/home/clientBox";
import Button from "../components/button";
import PromiseBox from '../components/home/promiseBox';
import BlogBox from '../components/home/blogBox';
import BlogBoxList from '../components/blog/blogBoxList';
import BorderButton from '../components/borderButton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { push } = useRouter();
  const [selectedService, setSelectedService] = useState(1)

  return (
    <>
      {/* Hero Section Start */}
      <div className="hero">
        <div className="bg-color-section" />
        <div className="container">
          <TitleText heroTitle title={heroTitle} mainSubTitle={heroSubTitle} />
          <div className="hero-image" />
        </div>
      </div>
      {/* Hero Section End */}

      {/* Brand Section Start */}
      <div className="client">
        <div className="container">
          <TitleText title={clientTitle} subTitle={clientSubText} />

          <div className="client-box-container">
            <ClientBox no="1" subTitle={clientText.trueColors} />
            <ClientBox no="2" subTitle={clientText.cosmo} />
            <ClientBox no="3" subTitle={clientText.paperSlate} />
            <ClientBox no="4" subTitle={clientText.theStyle} />
          </div>

          <div className="section-end-space" />
        </div>
      </div>
      {/* Brand Section End */}

      {/* Brand Section Start */}
      <div className="brand">
        <div className="container">
          <TitleText title={brandTitle} subTitle={brandSubText} />

          <div className="brand-box-container">
            <BrandBox no="1" title={brandText.researchTitle} subTitle={brandText.researchSubText} />
            <BrandBox no="2" title={brandText.designTitle} subTitle={brandText.designSubText} />
            <BrandBox no="3" title={brandText.buildTitle} subTitle={brandText.buildSubText} />
            <BrandBox no="4" title={brandText.launchTitle} subTitle={brandText.launchSubText} />
          </div>

          <div className="section-end-space" />
        </div>
      </div>
      {/* Brand Section End */}

      {/* About Section Start */}
      <div className="about">
        <div className="about-container">
          <div className="about-text-container">
            <h1 className="title-text about-title">{aboutTitle}</h1>
            <div className="space-container" />
            <p className="description-text">{aboutSubText}</p>
            <div className="space-container" />
            <BorderButton onClick={() => push('/about')} title="About Us" />
          </div>
          <div className="about-images">
            <div className="about-image about-image-one" />
            <div className="about-image about-image-two" />
            <div className="about-image about-image-three" />
          </div>
        </div>
      </div>
      {/* About Section End */}

      {/* Service Section Start */}
      <div className="service">
        <div className="container">
          <TitleText title={serviceTitle} subTitle={serviceSubTitle} />
          <div className="service-container">
            <div onClick={() => push('service')} className={`service-images ${selectedService == 1 ? "uiux-image" : selectedService == 2 ? "mobile-image" : selectedService == 3 ? "website-image" :
              selectedService == 4 ? "software-image" : selectedService == 5 ? "shopify-image" : "website-image"
              }`} />
            {/* <div className={`service-images ${
              selectedService == 1 ? "service-images-one": selectedService == 2? "service-images-two" : selectedService == 3? "service-images-three" :
              selectedService == 4 ? "service-images-four" : selectedService == 5? "service-images-five" : "service-images-six"
            }`} /> */}
            <div className="service-list">
              {serviceList.map((item, index) => (
                <div key={index} onClick={() => setSelectedService(item.id)}>
                  <h2 className="sub-title recoleta-font smt click">{item.title}</h2>
                  <div className="space-container" />
                  {selectedService === item.id &&
                    <div>
                      <p className="description-text">{item.description}</p>
                      <div className="space-container" />
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
          <div className="section-end-space" />
        </div>
      </div>
      {/* Service Section End */}

      {/* Promise Section Start */}
      <div className="promise">
        <div className="container">
          <TitleText title={promiseTitle} subTitle={promiseSubText} />
          <div className="promise-box-container">
            <PromiseBox video="/assets/videos/dog.mp4" title={promiseBoxOneTitle} subTitle={promiseBoxOneSubText} />
            <PromiseBox video="/assets/videos/gym.mp4" title={promiseBoxTwoTitle} subTitle={promiseBoxTwoSubText} />
            <PromiseBox video="/assets/videos/book.mp4" title={promiseBoxThreeTitle} subTitle={promiseBoxThreeSubText} />
          </div>
          <div className="section-end-space" />
        </div>
      </div>
      {/* Promise Section End */}

      {/* <div className='promise'>
        <TitleText title={"FAQ"}
          subTitle={
            <>Unlock answers to common queries in our FAQ section.<br />
              Discover insights, troubleshoot concerns, and empower your journey with clarity.</>
          }
        />

        <div className="section-end-space" />
      </div> */}

      {/* Blog Section Start */}
      <div className="blog">
        <div className='blog-container'>
          <TitleText title={blogTitle} subTitle={blogSubTitle} />
          <BlogBoxList />

          <div className="space-container" />
          <BorderButton title="Explore" />
          {/* <span className="read-all-blog">Read All Blogs</span> */}

          <div className="section-end-space" />
        </div>
      </div>
      {/* Blog Section End */}
    </>
  );
}

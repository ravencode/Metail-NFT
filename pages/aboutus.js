import React from "react";
import Image from "next/image";

import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About</h1>
            <p>
            METAil is a decentralized digital Ecommerce platform, a retail hub for Metaverse, offering NFTs like exclusive collections and wearables. 
            <br></br>It also features NFT creation and buying services, with new campaigning and marketing strategies for creators and brands. 
            METAil is the perfect platform to explore the exciting world of Metaverse.

            </p>
          </div>
          <div className={Style.aboutus_box_hero_right_img}>
            <Image
              src={images.about}
              className={Style.aboutus_box_founder_box_img}
            />
          </div>
        </div>

        <div className={Style.aboutus_founder_box_hero}>
          <div className={Style.aboutus_box_hero_right}>
            <Image
              src={images.user}
              className={Style.aboutus_box_founder_box_img}
            />
          </div>
          <div className={Style.aboutus_box_hero_left}>
            <h2>👋 Creators.</h2>
            <p>
              Creataed by a group of 3 developers who are passionate about
              blockchain technology and NFTs.
            </p>
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;

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
            <h2>👋 About</h2>
            <p>
              NFT Marketplace is a decentralized application (dApp) that allows
              users to buy and sell NFTs. NFTs are non-fungible tokens that
              represent unique digital assets. NFTs can be used to represent
              ownership of digital assets such as art, music, videos, and
              collectibles. NFTs can also be used to represent ownership of
              physical assets such as real estate, cars, and collectibles.
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
            <h2>Creators.</h2>
            <p>
              Creataed by a group of developers who are passionate about
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

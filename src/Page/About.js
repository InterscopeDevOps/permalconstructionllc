import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/Values_1";
import BlockPrincipal from "../components/block/Block_6";
import BlockSecondary from "../components/block/Block_8";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.stock?.[13]}`}
        />
        <BlockPrincipal
          title={'a little about us'}
          text={rpdata?.dbAbout?.[0]?.text}
          image={rpdata?.stock?.[0]}
          image1={rpdata?.stock?.[6]}
          image3={rpdata?.stock?.[1]}
          image2={rpdata?.stock?.[12]}
          image4={rpdata?.stock?.[10]}
          listsAbout
        />
        <ValuesOne
          image={rpdata?.stock?.[5]}
          image1={rpdata?.stock?.[9]}
          image2={rpdata?.stock?.[8]} />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbHome?.[1]?.text}
          image={rpdata?.stock?.[18]}
          image1={rpdata?.stock?.[15]}
        />
      </div>
    </BaseLayout>
  );
}

export default About;

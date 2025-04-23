import React from 'react'
import { BsCollection } from "react-icons/bs";
import { BsBuildings } from "react-icons/bs";
import { BsToggles2 } from "react-icons/bs";
import FeatureItem from './FeatureItem';
import style from './Features.module.css'

const features = [
    {icon: <BsCollection />},
    {icon: <BsBuildings />},
    {icon: <BsToggles2 />}
]

function Features() {
    return (
      <div className={style.featuresWrapper}>
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    )
  }

export default Features
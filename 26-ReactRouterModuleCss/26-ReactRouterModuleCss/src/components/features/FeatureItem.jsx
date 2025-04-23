import React from 'react'
import style from './FeatureItem.module.css'

function FeatureItem({icon}) {
  return (
    <div className={style.featureItem}>
        <div className={style.iconBox}>
            {icon}
        </div>
        <h3 className={style.title}>Featured title</h3>
        <p className={style.text}>
        Paragraph of text beneath the heading to explain the heading.
        We'll add onto it with another sentence and probably just keep going
        until we run out of words.
        </p>
        <a href="#" className={style.link}>Call to action →</a>
    </div>
  )
}

export default FeatureItem
// code with React Hooks

import React, { Fragment, useState } from 'react';
import cn from 'classnames';
import '../../styles/styles.scss';
import '../../styles/goodybags.scss';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const App = () => {

  const [activeGoodybagIndex, setActiveGoodybagIndex] = useState(2);
  
  const data = { 
    goodybags: [
        { sku: "BD01", price: 500, maxData: 500, maxVoice: 300, maxTexts: 500, promoCaption: null },
        { sku: "BD21", price: 750, maxData: 2000, maxVoice: 500, maxTexts: "Unlimited", promoCaption: null},
        { sku: "BD27", price: 1000, maxData: 3000, maxVoice: "Unlimited", maxTexts: "Unlimited", promoCaption: null },
        { sku: "BD30", price: 1200, maxData: 4000, maxVoice: "Unlimited", maxTexts: "Unlimited", promoCaption: null },
        { sku: "BD33", price: 1500, maxData: 8000, maxVoice: "Unlimited", maxTexts: "Unlimited", promoCaption: null },
        { sku: "BD34", price: 2000, maxData: 20000, maxVoice: "Unlimited", maxTexts: "Unlimited", promoCaption: null },
        { sku: "BD37", price: 2500, maxData: "Always On*", maxVoice: "Unlimited", maxTexts: "Unlimited", promoCaption: "Always On* promo caption here" },
    ]
  };

  const renderGoodybag = (i) => {
    const { goodybags } = data;
  
    return goodybags.map((goodybag, index) => {
      const goodybagDataSize = goodybag.maxData > 999 ? `${goodybag.maxData / 1000} GB` : `${goodybag.maxData} MB`;
      const goodybagDataSizeDefined = isNaN(goodybag.maxData) ? goodybag.maxData : goodybagDataSize;
      
      if(i === index) { 
        return (
          <Fragment key={goodybag.sku}>
            <div className="goodybag-selector">
              <div className="goodybag__previous-button" onClick={handlePrevious}><i className="fa fa-chevron-left"></i></div>
              <div className={cn(goodybag.sku, "goodybag__sku")}></div>
              <div className="goodybag__next-button" onClick={handleNext}><i className="fa fa-chevron-right"></i></div>
            </div>
            {/* <div className="goodybag__price">£{goodybag.price / 100} goodybag</div> */}
            <div className="goodybag__max-data"><span className="text-bolder">{goodybagDataSizeDefined}</span> data</div>
            <div className="goodybag__max-voice"><span className="text-bolder">{goodybag.maxVoice}</span> minutes</div>
            <div className="goodybag__max-texts"><span className="text-bolder">{goodybag.maxTexts}</span> texts</div>
            { goodybag.promoCaption && 
              <div className="goodybag__promo-caption">{goodybag.promoCaption}</div> 
            }
          </Fragment>
        )
      } else { return null }
    })
  }
  
  const handleNext = () => {
    activeGoodybagIndex === data.goodybags.length - 1 
      ? setActiveGoodybagIndex(0)
      : setActiveGoodybagIndex(activeGoodybagIndex + 1)
  }


  const handlePrevious = () => {
    activeGoodybagIndex === 0
      ? setActiveGoodybagIndex(data.goodybags.length - 1)
      : setActiveGoodybagIndex(activeGoodybagIndex - 1)
  }

  return (
    <div className="goodybag">
      <div className="goodybag__text">
        {renderGoodybag(activeGoodybagIndex)}
        <div className="goodybag__all-plans">
          <div className="all-plans-text">See all plans </div>
          <i className="fa fa-caret-right"></i>
        </div>
      </div>       
    </div>
  )  
}

export default App;
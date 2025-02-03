import React from 'react';

const TradingViewChart = () => {
    return (
        <iframe
        id="dextools-widget"
        title="DEXTools Trading Chart"
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px]"
        src="https://www.dextools.io/widget-chart/en/bnb/pe-light/0x23dde40ac13927ed70f8c8caefe8c2653a5d001b?theme=dark&chartType=2&chartResolution=30&drawingToolbars=false"
        frameBorder="0"
        allowFullScreen
        style={{ border: 'none' }}
      ></iframe>
    );
}

export default TradingViewChart;

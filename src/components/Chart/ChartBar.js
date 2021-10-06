import React from 'react';

import './ChartBar.css';

const ChartBar = props => {
    const barInnerHeight = props.maxVale > 0 ? Math.round((props.value / props.maxVale) * 100) + '%' : '0%';
    return <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{ height: barInnerHeight }}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
};

export default ChartBar;
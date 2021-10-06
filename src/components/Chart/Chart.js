import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {
    const maxValue = [...props.dataPoints].sort((a, b) => b.value - a.value)[0].value
    // sort the array
    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxVale={maxValue}
            label={dataPoint.label}
        />)}
    </div>
};

export default Chart;
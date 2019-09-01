import React, { Component } from 'react';

import 'react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries,
    AreaSeries
  } from 'react-vis';
import {LearningConsumer} from '../context'

class Chart extends Component {
  render() {
    const data = (table) => {
let tabData ;
        if(table) {
  tabData =   table.map(el =>{ return { x :el.age,y: el.lvl_wanted}} )
}
return tabData
    }
    return (
      <div className="App Login">
      <LearningConsumer>
        {value => (  <div>
            <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <AreaSeries
        className="area-elevated-series-1"
        color="#79c7e3"
        data={data(value.state.dataStudents)}
      />
      <AreaSeries
        className="area-elevated-series-2"
        color="#12939a"
        data={data(value.state.dataStudents)}
      />
      <LineMarkSeries
        className="area-elevated-line-series"
        data={data(value.state.dataStudents)}
      />
    </XYPlot>
</div>  
)}
        </LearningConsumer>
      </div>
    );
  }
}

export default Chart;
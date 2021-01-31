import React from "react";
import {Bar, Line, Pie, Doughnut, HorizontalBar} from 'react-chartjs-2';
export function barChart(props) {
    return (
      <div className="barChart">
        <Bar 
            data = {props.data}
            options = {{
                maintianAspectRatio: false   
            }}
        />
      </div>
    );
  }
  
  export function lineChart(props) {
    return (
        <div className="barChart">
        <Line 
            data = {props.data}
            options = {{
                maintianAspectRatio: false   
            }}
        />
      </div>
    );
  }
  
  export function pieChart(props) {
    return (
        <div className="barChart">
        <Pie 
            data = {props.data}
            options = {{
                maintianAspectRatio: false   
            }}
        />
      </div>
    );
  }

  export function doughnutChart(props) {
    return (
        <div className="barChart">
        <Doughnut 
            data = {props.data}
            options = {{
                maintianAspectRatio: false   
            }}
        />
      </div>
    );
  }

  export function horizontalbarChart(props) {
    return (
        <div className="barChart">
        <HorizontalBar 
            data = {props.data}
            options = {{
                maintianAspectRatio: false   
            }}
        />
      </div>
    );
  }

import React from "react";
import { Bar, Line, Pie, Doughnut, HorizontalBar } from 'react-chartjs-2';
export function BarChart(props) {
    console.log(props.data)
    return (
        <div className="barChart">
            <Bar
                data={props.data}
                options={{
                    maintianAspectRatio: false
                }}
            />
        </div>
    );
}

export function LineChart(props) {
    console.log(props.data)
    return (
        <div className="barChart">
            <Line
                data={props.data}
                options={{
                    maintianAspectRatio: false
                }}
            />
        </div>
    );
}

export function PieChart(props) {
    console.log(props.data)
    return (
        <div className="barChart">
            <Pie
                data={props.data}
                options={{
                    maintianAspectRatio: false
                }}
            />
        </div>
    );
}

export function DoughnutChart(props) {
    console.log(props.data)
    return (
        <div className="barChart">
            <Doughnut
                data={props.data}
                options={{
                    maintianAspectRatio: false
                }}
            />
        </div>
    );
}

export function HorizontalbarChart(props) {
    console.log(props.data)
    return (
        <div className="barChart">
            <HorizontalBar
                data={props.data}
                options={{
                    maintianAspectRatio: false
                }}
            />
        </div>
    );
}

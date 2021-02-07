import React, { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm";
// import DataContext from "../context/UserTransactionData"
import { BarChart, LineChart, DoughnutChart, PieChart, HorizontalbarChart } from "../components/Charts"
import Axios from "axios";
import { groupBy } from "lodash"
function DashBoard() {

    // const newData = {
    //     data: [
    //         {
    //             type: 'work',
    //             name: 'travel',
    //             value: 100,
    //             createdAt: '2017-02-04T11:00:04.000Z',
    //             updatedAt: '2017-02-04T11:00:04.000Z',
    //             year: 2017,
    //             month: 2,
    //             day: 4
    //         },
    //         {
    //             type: 'life',
    //             name: 'groceries',
    //             value: 200,
    //             createdAt: '2018-02-04T11:00:04.000Z',
    //             updatedAt: '2018-02-04T11:00:04.000Z',
    //             year: 2018,
    //             month: 2,
    //             day: 4
    //         }
    //     ]
    // }
    // const [data, setData] = useState({})
    // const [filteredData, setFilteredData] = useState({})
    const [year, setYear] = useState("")
    const [filterRequest, setFilterRequest] = useState(false)
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")
    const [type, setType] = useState("")
    const [barChartData, setBarChartData] = useState({})
    const [lineChartData, setLineChartData] = useState({})
    const [pieChartData, setPieChartData] = useState({})
    const [doughnutChartData, setDoughnutChartData] = useState({})
    const [horizontalbarChartData, serHorizontalBarChartData] = useState({})




    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const filterDataSet = (e) => {
        e.preventDefault()
        setFilterRequest(true)
    }
    const getChartData = () => {
        let query = `?year=${year}&month=${month}&day=${day}&type=${type}`
        console.log(query)
        Axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:3001/api/auth/dashboard` + query,
        }).then((res) => {
            console.log(res)
            // setData(res)
            renderChartData(res)
            setFilterRequest(false)
            // organizeBarCharData(res);
            // organizePieCharData(res);
            // organizeLineCharData(res);
            // organizeDoughnutCharData(res);
            // organizeHorizontalBarCharData(res);
        });
    }
    const renderChartData = (data) => {
        console.log(data.data)
        organizeHorizontalBarCharData(data.data);
        organizeLineCharData(data.data);
        organizePieCharData(data.data);
        organizeDoughnutCharData(data.data);
        organizeBarCharData(data.data);
    }
    const organizeBarCharData = (param) => {
        console.log(param)
        const months = param.map((item) => item.month).filter(unique)
        console.log(months)
        const grouped = groupBy(param, function (d) {
            return d.month
        })
        console.log(grouped)
        const getDataSet = (dataset) => {
            let dataArr = []
            for (const key in dataset) {
                let sum = 0;
                console.log(dataset[key])
                dataset[key].forEach(element => {
                    sum = sum + element.value
                    console.log(sum)
                });
                dataArr.push(sum)
            }
            console.log(dataArr)
            return dataArr
        }
        const dataSet = getDataSet(grouped)
        console.log(dataSet)
        const data = {
            type: "bar",
            data: {
                labels: months,
                datasets: [
                    {
                        label: "Year",
                        data: dataSet,
                        parsing: {
                            yAxisKey: "Pres"
                        }
                    }
                ]
            }
        }
        console.log(data)
        setBarChartData(data)
    }
    const organizeLineCharData = (param) => {
        console.log(param)
        const labels = param.map((item) => item.createdAt).filter(unique)
        console.log(labels)
        const dataset = param.map((item) => item.value)
        const data = {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    data: dataset
                }]
            }
        }
        console.log(data)
        setLineChartData(data)
    }
    const organizePieCharData = (param) => {
        const types = param.map((item) => item.type).filter(unique)
        console.log(types)
        const grouped = groupBy(param, function (d) {
            return d.type
        })
        console.log(grouped)
        const getDataSet = (dataset) => {
            let dataArr = []
            for (const key in dataset) {
                let sum = 0;
                console.log(dataset[key])
                dataset[key].forEach(element => {
                    sum = sum + element.value
                    console.log(sum)
                });
                dataArr.push(sum)
            }
            console.log(dataArr)
            return dataArr
        }
        const dataSet = getDataSet(grouped)
        console.log(dataSet)
        const data = {
            type: "pie",
            data: {
                labels: types,
                datasets: [{
                    data: dataSet
                }]
            }
        }
        console.log(data)
        setPieChartData(data)
    }

    const organizeDoughnutCharData = (param) => {
        const names = param.map((item) => item.name).filter(unique)
        const grouped = groupBy(param, function (d) {
            return d.name
        })
        console.log(grouped)
        const getDataSet = (dataset) => {
            let dataArr = []
            for (const key in dataset) {
                let sum = 0;
                console.log(dataset[key])
                dataset[key].forEach(element => {
                    sum = sum + element.value
                    console.log(sum)
                });
                dataArr.push(sum)
            }
            console.log("line 189", dataArr)
            return dataArr
        }
        const dataSet = getDataSet(grouped)
        console.log(dataSet)
        const data = {
            type: "doughnut",
            data: {
                labels: names,
                datasets: [{
                    data: dataSet
                }]
            }
        }
        console.log(data)
        setDoughnutChartData(data)
    }

    const organizeHorizontalBarCharData = (param) => {
        const years = param.map((item) => item.year).filter(unique)
        const grouped = groupBy(param, function (d) {
            return d.year
        })
        console.log(grouped)
        const getDataSet = (dataset) => {
            let dataArr = []
            for (const key in dataset) {
                let sum = 0;
                console.log(dataset[key])
                dataset[key].forEach(element => {
                    sum = sum + element.value
                    console.log(sum)
                });
                dataArr.push(sum)
            }
            return dataArr
        }
        const dataSet = getDataSet(grouped)
        console.log(dataSet)
        const data = {
            type: "bar",
            data: {
                labels: years,
                datasets: [{
                    data: dataSet
                }]
            }
        }
        console.log(data)
        serHorizontalBarChartData(data)
    }
    // useEffect(() => {
    //     getChartData()
    // }, []);
    useEffect(() => {
        getChartData()
    }, [filterRequest])
    // console.log(barChartData)
    if (Object.keys(barChartData).length === 0) {
        return null
    }
    return (
        <div>
            <FilterForm
                year={year}
                month={month}
                day={day}
                type={type}
                setYear={(e) => setYear(e.target.value)}
                setMonth={(e) => setMonth(e.target.value)}
                setDay={(e) => setDay(e.target.value)}
                setType={(e) => setType(e.target.value)}
                filter={filterDataSet}
            ></FilterForm>
            <br></br>
            <BarChart
                data={barChartData.data}
            ></BarChart>
            <LineChart
                data={lineChartData.data}
            ></LineChart>
            <DoughnutChart
                data={doughnutChartData.data}
            ></DoughnutChart>
            <PieChart
                data={pieChartData.data}
            ></PieChart>
            <HorizontalbarChart
                data={horizontalbarChartData.data}
            ></HorizontalbarChart>
        </div>
    )
}
export default DashBoard
import React, { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm";
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Drawer from "@material-ui/core/Drawer"
import { FilterList } from "@material-ui/icons"
// import DataContext from "../context/UserTransactionData"
import { BarChart, LineChart, DoughnutChart, PieChart, HorizontalbarChart } from "../components/Charts"
import Axios from "axios";
import { groupBy } from "lodash"


const useStyles = makeStyles({
    root: {
        display: 'flex',
        background: 'white',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        height: '35vh'
    },
    chart: {
        height: "inherit",
        width: "inherit",
    }
});

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
    const classes = useStyles()
    const [filterDate, setFilterDates] = useState([]);
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [filterRequest, setFilterRequest] = useState(false)
    const [barChartData, setBarChartData] = useState({})
    const [lineChartData, setLineChartData] = useState({})
    const [pieChartData, setPieChartData] = useState({})
    const [doughnutChartData, setDoughnutChartData] = useState({})
    const [horizontalbarChartData, serHorizontalBarChartData] = useState({})
    const [open, setOpen] = useState(false)
    const handleDrawer = () => {
        setOpen(true)
    }


    const getMonthName = (month) => {
        const d = new Date();
        d.setMonth(month - 1);
        const monthName = d.toLocaleString("default", { month: "long" });
        return monthName;
    }
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const filterDataSet = (e) => {
        e.preventDefault()
        setFilterRequest(true)
    }
    const getChartData = () => {
        let query = `?startDate=${startDate}&endDate=${endDate}`
        console.log(query)
        Axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:3001/api/auth/dashboard`,
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
        organizeDataforFilter(data.data)
        organizeHorizontalBarCharData(data.data);
        organizeLineCharData(data.data);
        organizePieCharData(data.data);
        organizeDoughnutCharData(data.data);
        organizeBarCharData(data.data);
    }
    const organizeDataforFilter = (param) => {
        const dates = param.map((item) => item.date).filter(unique)
        setFilterDates(dates)
    }
    const organizeBarCharData = (param) => {
        console.log(param)
        const months = param.map((item) => item.month).filter(unique)
        console.log(months)
        const monthsWord = months.map((item) => getMonthName(item))
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
                labels: monthsWord,
                datasets: [
                    {
                        label: "Year",
                        data: dataSet,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1,
                        parsing: {
                            yAxisKey: "Pres"
                        }
                    }
                ],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
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
                    data: dataset,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1

                }],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            display: false
                        }]

                    }
                }
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
                    data: dataSet,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
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
                    data: dataSet,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
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
                    data: dataSet,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
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
            <div style={{ padding: "30px", background: "black", width: "100%" }}>
                {window.location.pathname === "/dashboard" ?
                    <IconButton onClick={handleDrawer}>
                        <FilterList color="secondary" />
                    </IconButton> :
                    console.log("no menu")
                }
                <Grid container spacing={2}>
                    <Grid item lg={6} sm={12} xs={12}>
                        <div className={classes.root}>
                            <BarChart
                                width={100}
                                height={100}
                                className={classes.chart}
                                data={barChartData.data}
                            ></BarChart>
                        </div>

                    </Grid>
                    <Grid item lg={6} sm={12} xs={12}>
                        <div className={classes.root}>
                            <LineChart
                                width={100}
                                height={100}
                                className={classes.chart}
                                data={lineChartData.data}
                            ></LineChart>
                        </div>
                    </Grid>
                    <Grid item lg={4} sm={12} xs={12}>
                        <div className={classes.root}>
                            <DoughnutChart
                                width={100}
                                height={100}
                                className={classes.chart}
                                data={doughnutChartData.data}
                            ></DoughnutChart>
                        </div>
                    </Grid>
                    <Grid item lg={4} sm={12} xs={12}>
                        <div className={classes.root}>
                            <PieChart
                                width={100}
                                height={100}
                                className={classes.chart}
                                data={pieChartData.data}
                            ></PieChart>
                        </div>
                    </Grid>
                    <Grid item lg={4} sm={12} xs={12}>
                        <div className={classes.root}>
                            <HorizontalbarChart
                                width={100}
                                height={100}
                                className={classes.chart}
                                data={horizontalbarChartData.data}
                            ></HorizontalbarChart>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Drawer
                anchor="top"
                open={open}
                onClose={() => setOpen(false)}
            >
                <div style={{ width: "250px", height: "100%" }}>
                    <FilterForm
                        filterdates={filterDate}
                        setStartDate={(e) => { setStartDate(e.target.value) }}
                        setEndDate={(e) => { setEndDate(e.target.value) }}
                        submit={filterDataSet}
                    />
                </div>
            </Drawer>
        </div>

        // <div>
        //     <FilterForm
        //         year={year}
        //         month={month}
        //         day={day}
        //         type={type}
        //         setYear={(e) => setYear(e.target.value)}
        //         setMonth={(e) => setMonth(e.target.value)}
        //         setDay={(e) => setDay(e.target.value)}
        //         setType={(e) => setType(e.target.value)}
        //         filter={filterDataSet}
        //     ></FilterForm>
        //     <br></br>
        //     <BarChart
        //         data={barChartData.data}
        //     ></BarChart>



        // </div>
    )
}
export default DashBoard
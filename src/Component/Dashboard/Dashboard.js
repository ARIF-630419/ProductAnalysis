import React from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='Half'>
            <div>
                <h1>Investment vs Revenue</h1>

                <LineChart width={500} height={350} data={data}>
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" strokeWidth={2} />
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <CartesianGrid></CartesianGrid>
                </LineChart>
            </div>
            <div>
                <h1>Investment vs Revenue</h1>
                <BarChart width={500} height={350} data={data}>
                    <Bar dataKey="investment" fill="#8884d8" />
                    <XAxis dataKey={"month"}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <CartesianGrid></CartesianGrid>
                </BarChart>
            </div>


        </div>
    );
};

export default Dashboard;
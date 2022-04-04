import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);
    return (
        <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    <LineChart width={300} height={200} data={data}>
                        <Line dataKey={'sell'}></Line>
                        <XAxis dataKey={'month'}></XAxis>
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                        <Legend></Legend>
                    </LineChart>
                </div>

                <div className='flex justify-center items-center'>
                    <PieChart width={530} height={250}>
                        <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
                        <Pie data={data} dataKey={'revenue'} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label></Pie>
                    </PieChart>
                </div>
                <div className='flex justify-center items-center'>
                    <BarChart width={430} height={250} data={data}>
                        <XAxis dataKey={'month'} />
                        <YAxis></YAxis>
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={'investment'} fill="#8884d8"></Bar>
                        <Bar dataKey={'revenue'} fill="#82ca9d"></Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
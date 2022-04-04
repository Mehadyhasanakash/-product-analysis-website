import React from 'react';
import { LineChart, BarChart, Line, RadialBarChart, RadialBar, PieChart, Pie, Tooltip, CartesianGrid, Legend, XAxis, Bar, YAxis, } from 'recharts';

const DisplayDeshBoar = ({ data }) => {


    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-log-6'>
                    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="id" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                    </LineChart>






                </div>

                <div className='col col-lg-6'>

                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="id" fill="#8884d8" />
                        <Bar dataKey="username" fill="#82ca9d" />
                    </BarChart>

                </div>

                <div className='row'>
                    <div className='col col-lg-6'>
                        <PieChart width={730} height={250}>
                            <Pie data={data} dataKey="id" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                            <Pie data={data} dataKey="id" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                        </PieChart>

                    </div>

                    <div className='col col-lg-6'>

                        <RadialBarChart
                            width={730}
                            height={250}
                            innerRadius="10%"
                            outerRadius="80%"
                            data={data}
                            startAngle={180}
                            endAngle={0}
                        >
                            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='id' />
                            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='name' align="right" />
                            <Tooltip />
                        </RadialBarChart>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DisplayDeshBoar;
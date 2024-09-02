"use client"

import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = (props) => {

  const data = {
    labels: ['-6', '-5', '-4', '-3', '-2', '-1'],
    datasets: [
      {
        type: props.ChartType,
        label: 'Kas dalam 6 bulan terakhir',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
        hoverBorderColor: 'rgba(255, 99, 132, 1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Chart;

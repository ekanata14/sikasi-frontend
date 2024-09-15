"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ChartPie = () => {

  const data = {
    labels: ["Sudah Bayar", "Belum bayar"],
    datasets: [
      {
        type: "doughnut",
        label: "Total Pembayaran Bulan Ini",
        data: [40, 25],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
        hoverOffset: 4
      },
    ],
  };

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default ChartPie;

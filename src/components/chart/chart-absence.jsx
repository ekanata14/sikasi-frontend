"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const ChartAbsence = () => {

  const data = {
    labels: ["Sudah Absen", "Belum Absen"],
    datasets: [
      {
        type: "doughnut",
        label: "Sudah Absen",
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

export default ChartAbsence;

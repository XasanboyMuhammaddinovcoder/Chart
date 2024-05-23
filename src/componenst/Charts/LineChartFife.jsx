import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['05:40', '06:30', '07:10', '07:40', '08:10', '08:50', '09:30', '10:10','10:40','11:10', '11:40', '12:10', '12:40','15:10','15:40', '16:10','16:40' ,'17:10' , '17:40', '18:10','18:40', '19:10' , '19:40', '20:10','20:40' ];

  
  function random () {
      return Math.trunc(Math.random() *1000)
  }
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() =>random()),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };
  
  export function LineChartFife() {
    return <Line options={options} data={data} />;
  }
  
'use client'
import React, { useEffect, useState } from 'react'
import styles from "./homepage.module.css"
import { dummyRiskStat, riskStatColor, riskStatRange } from '@/data/homepage'
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import { Chart } from 'chart.js';
import { Chart as PrimeChart } from 'primereact/chart';
import { customTextPlugin } from '@/utils/helper';

// Chart.register(ChartDataLabels)

const RiskStat = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: [...riskStatRange.reverse()],
            datasets: [
                {
                    data: [...Object.values(dummyRiskStat)],
                    backgroundColor: [
                        riskStatColor[Object.keys(dummyRiskStat)[0]],
                        riskStatColor[Object.keys(dummyRiskStat)[1]],
                        riskStatColor[Object.keys(dummyRiskStat)[2]]
                    ]
                }
            ]
        }
        const options = {
            cutout: '65%',
            maintainAspectRatio: false,
            plugins: {
                // datalabels: {
                //     color: '#000',
                //     anchor: 'center',
                //     align: 'end', 
                //     formatter: (value: any) => {
                //         return `${value}%`;
                //     },
                //     font: {
                //         size: 14,
                //         weight: 'bold',
                //     },
                // },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: true,
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className={styles.chartContainer}>
             <div>
                {
                    riskStatRange?.map((range) => (
                        <div key={range}>
                            <div style={{ backgroundColor: riskStatColor[range] }}></div>
                            <p>{range}</p>
                        </div>
                    ))
                }
            </div>
            <PrimeChart plugins={[customTextPlugin]} type="doughnut" data={chartData} options={chartOptions} className={styles.doughtnutChart} />
        </div>
    )
}

export default RiskStat
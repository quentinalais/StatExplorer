import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CardCustom } from "../Component/CardCustom";
import Chart from "react-apexcharts";

const ONS_WEBSITE = "https://www.ons.gov.uk";

function Inflation() {
  const [data, setdata] = useState(null);
 
  useEffect(() => {
    if(!data){
        axios
        .get(
          ONS_WEBSITE +
            "/economy/inflationandpriceindices/timeseries/l55o/mm23/data"
        )
        .then((resp) => {
          setdata(resp.data);
        });
    }
    
  }, [data]);

  

  const getSeries = (info) => {
    const series = [
      {
        name: "Inflation",
        data: info?.months?.map((element) => parseFloat(element.value)),
      },
    ];

    return series;
  };

  const getOptions = (info) => {
    return {
        xaxis: {
            categories: info?.months?.map(e=>e.label)
          },
      dataLabels: {
        enabled: false,
      },
      colors:['#065666'],
      title: {
        text: "UK Inflation by Month",
        align: "left",
      }
    };
  };


  return (
    <div>
      <CardCustom title="UK Inflation">
        This page sheds light on the UK Inflation using <b>ApexCharts.js</b>{" "}
        graphs.
      </CardCustom>
      <br />
    {(data)?
  <CardCustom> 
    <Chart 
        series={getSeries(data)} 
        options={getOptions(data)} 
        type="bar"
        width="800"
    />
  </CardCustom>
    :<p>Loading</p>

    }
      
    </div>
  );
}

export default Inflation;

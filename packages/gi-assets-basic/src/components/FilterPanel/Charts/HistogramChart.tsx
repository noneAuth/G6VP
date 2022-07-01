import React, { useEffect } from "react";
import { Histogram, G2 } from "@antv/g2plot";
import { IFilterCriteria, IHistogramValue } from "../type";

interface IHistogramChartProps {
  filterCriteria: IFilterCriteria;
  updateFilterCriteria: (id: string, filterCriteria: IFilterCriteria) => void;
  histogramData: IHistogramValue[];
}

const HistogramChart: React.FC<IHistogramChartProps> = (props) => {
  const { filterCriteria, updateFilterCriteria, histogramData } = props;

  useEffect(() => {
    G2.registerInteraction("element-highlight", {
      start: [{ trigger: "element:click", action: "element-highlight:toggle" }],
    });
  }, []);

  useEffect(() => {
    const histogramPlot = new Histogram(
      `${filterCriteria.id}-chart-container`,
      {
        data: histogramData,
        height: 200,
        binField: "value",
        color: "rgba(111, 147, 222, 1)",
        tooltip: {},
        interactions: [{ type: "element-highlight" }],
        state: {
          // 设置 active 激活状态的样式
          active: {
            style: {
              fill: "rgba(56, 83, 215, 1)",
              lineWidth: 0,
            },
          },
        },
        meta: {
          range: { nice: true },
          count: {
            type: "log",
            nice: true,
          },
        },
      }
    );

    histogramPlot.on("element:click", ({ view }) => {
      const elements = view.geometries[0].elements;
      const selectRanges = elements
        .filter((e) => e.states.indexOf("active") != -1)
        .map((e) => e.data.range);
      const isFilterReady = selectRanges.length !== 0;
      const range = isFilterReady
        ? [selectRanges[0][0], selectRanges[selectRanges.length - 1][1]]
        : [];
      console.log(range, isFilterReady);
      updateFilterCriteria(filterCriteria.id!, {
        ...filterCriteria,
        isFilterReady,
        range,
      });
    });

    histogramPlot.render();

    return () => {
      histogramPlot.destroy();
    };
  }, [histogramData]);

  return <div id={`${filterCriteria.id}-chart-container`} />;
};

export default HistogramChart;

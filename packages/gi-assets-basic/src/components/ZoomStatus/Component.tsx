import { useContext } from '@antv/gi-sdk';
import * as React from 'react';

export interface Props{
  minZoom?: number;
  statusName?: string;
}
export default (props: Props) => {
  const {minZoom = 0.6,statusName = 'minZoom'} = props;
  const graphContext = useContext();
  React.useEffect(() =>{
    const graph = graphContext.graph;
    let timeoutId: any;
    const execute = () => {
      const zoom = graph.getZoom();
      const min = zoom <= minZoom;
      graph.getNodes().forEach((node) => {
        graph.setItemState(node,statusName,min);
      });
      graph.getEdges().forEach((edge) => {
        graph.setItemState(edge,statusName,min);
      });
    }
    const onZoom = () => {
      if(timeoutId){
        clearTimeout(timeoutId);
        timeoutId = 0;
      }
      timeoutId = setTimeout(() => {
        execute();
        timeoutId = 0;
      },100);
    }
    graph.on('wheelzoom',onZoom);
    return () => {
      graph.off('wheelzoom',onZoom);
    }
  },[graphContext.graph,minZoom,statusName]);
  return null;
}

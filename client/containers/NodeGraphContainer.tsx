import React from 'react';

interface NodeGraphContainerProps {
  open: boolean;
}

function NodeGraphContainer(props: NodeGraphContainerProps) {
  const { open } = props;

  return (
    <div id='node-graph-container'>
      {/* PLACEHOLDER IMAGE UNTIL NODE GRAPH IS READY*/}
      <img src='https://grafana.com/static/img/docs/node-graph/node-graph-8-0.png'></img>
    </div>
  );
}

export default NodeGraphContainer;

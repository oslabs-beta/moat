import React from 'react';

interface LogsContainerProps {
  open: boolean;
}

function LogsContainer(props: LogsContainerProps) {
  const { open } = props;

  return (
    <div id='logs-container'>
      {/* PLACEHOLDER IMAGE UNTIL LOGS ARE READY*/}
      <img src='https://grafana.com/static/img/docs/node-graph/node-graph-8-0.png'></img>
    </div>
  );
}

export default LogsContainer;

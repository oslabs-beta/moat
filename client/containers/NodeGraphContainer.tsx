import React from 'react';

interface NodeGraphContainerProps {
  open: boolean;
}

function NodeGraphContainer(props: NodeGraphContainerProps) {
  const { open } = props;

  return (
    <div id='node-graph-container'>
      {/* PLACEHOLDER IMAGE UNTIL NODE GRAPH IS READY*/}
      <iframe src="http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/b0114a39-7ee6-4c8e-9948-389afd3e8b04/nodegraph?orgId=1&from=1696960212305&to=1696981812305&theme=light&panelId=1"
      width="2700" height="1600" id="nodegraph" frameBorder="0"></iframe>
    </div>
  );
}

export default NodeGraphContainer;

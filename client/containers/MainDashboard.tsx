import React from 'react';
// error with parsing image, React says correct loader is not installed on pkg
import logo from '../assets/moatIcon.png';

// TODO: Make a dashboard item component that will modularize the iframes and pass the source as a prop so we can create a filter so users can customize their dashboard. Anago had a query so you can build a dashboard from your query so we can look into that. Max has ideas about this.
interface MainDashboardProps {
  open: boolean;
}

function MainDashboard(props: MainDashboardProps) {
  const { open } = props;

  return (
    <div id='dashboard-container'>
      <div id='intro'>
        <img id='logo' src='https://res.cloudinary.com/mfrazb/image/upload/v1695922059/1_sxtwzi.png' alt='Moat logo' />
        <p className='text-block'>Security-First Cluster Monitoring. Detect and mitigate threats with ease. Powered by Prometheus and Grafana, moat scans clusters, finds vulnerabilities, and delivers real-time threat insights.</p>
      </div>
      <div id='dashboard'>
        {/* Alerts Panel */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/5lKoAHxZz/amazon-cloudwatch-logs?orgId=1&from=1696929831391&to=1696973031391&panelId=10' width='450' height='200' frameBorder='0'></iframe>
        {/* Incoming Event Logs */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/cb5089a3-f435-418a-bb4c-7d0612382cd3/amazon-cloudwatch-logs-copy?orgId=1&from=1696950373873&to=1696961173873&panelId=2' width='925' height='200' frameBorder='0'></iframe>
        {/* Scrape Duration */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/prometheus/prometheus-2-0-stats?orgId=1&refresh=1m&from=1696956679543&to=1696960279543&panelId=14' width='450' height='200' frameBorder='0'></iframe>
        {/* RDS Database Connection */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/AWSRDSdbi/aws-rds?orgId=1&from=1696959579504&to=1696963179504&panelId=18' width='450' height='200' frameBorder='0'></iframe>
        {/*K8s cluster CPU Usage */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zwArunW4k/kubernetes-cluster-resource-summary?orgId=1&from=1696958014740&to=1696961614740&panelId=43' width='450' height='200' frameBorder='0'></iframe>
        {/* K8s cluster Memory Usage */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zwArunW4k/kubernetes-cluster-resource-summary?orgId=1&from=1696958089290&to=1696961689290&panelId=45' width='450' height='200' frameBorder='0'></iframe>
        {/*Node overall resource overview */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/PwMJtdvnz/1-k8s-for-prometheus-dashboard-20211010-en?orgId=1&from=1696961624380&to=1696963424380&panelId=78' width='925' height='400' frameBorder='0'></iframe>
        {/* RDS Network Traffic */}
        {/* <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/af53f72f-01b9-491a-880e-2cc816aa4014/amazon-rds-os-metrics?orgId=1&from=1696960549113&to=1696964149113&panelId=10'
          width='450'
          height='200'
          frameBorder='0'></iframe> */}
        {/*NGINX Network Input  */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/4DFTt9Wnk/nginx?orgId=1&from=1696959032037&to=1696962632037&panelId=26' width='450' height='200' frameBorder='0'></iframe>
        {/* NGINX Network Output */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/4DFTt9Wnk/nginx?orgId=1&from=1696959223073&to=1696962823073&panelId=35' width='450' height='200' frameBorder='0'></iframe>
        {/* Pod Network I/O */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/2kmXP3d7z/kubernetes-pods?orgId=1&refresh=5s&from=1696961060580&to=1696961960580&panelId=3' width='925' height='400' frameBorder='0'></iframe>
        {/* Pods with OOM killed containters */}
        <iframe src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/RlEVpGmVk/oom-and-restarts?orgId=1&from=1696958456192&to=1696959356192&panelId=33' width='925' height='200' frameBorder='0'></iframe>
      </div>
    </div>
  );
}

export default MainDashboard;

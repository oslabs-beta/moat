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
        <img
          id='logo'
          src='https://res.cloudinary.com/mfrazb/image/upload/v1695922059/1_sxtwzi.png'
          alt='Moat logo'
        />
        <p className='text-block'>
          Security-First Cluster Monitoring. Detect and mitigate threats with
          confidence. Powered by Prometheus and Grafana, moat scans clusters,
          finds vulnerabilities, and delivers real-time threat insights.
        </p>
      </div>
      <div id='dashboard'>
        {/* Alerts Panel */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/5lKoAHxZz/amazon-cloudwatch-logs?orgId=1&panelId=10'
          width='925'
          height='425'></iframe>
        {/* Incoming Event Logs */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/cb5089a3-f435-418a-bb4c-7d0612382cd3/amazon-cloudwatch-logs-copy?orgId=1&refresh=1s&panelId=2'
          width='450'
          height='200'></iframe>
        {/* Scrape Duration */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/prometheus/prometheus-2-0-stats?orgId=1&refresh=1s&panelId=14'
          width='450'
          height='200'></iframe>
        {/*K8s cluster CPU Usage */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zwArunW4k/kubernetes-cluster-resource-summary?orgId=1&refresh=1s&panelId=43'
          width='450'
          height='200'></iframe>
        {/* K8s cluster Memory Usage */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zwArunW4k/kubernetes-cluster-resource-summary?orgId=1&refresh=5s&panelId=45'
          width='450'
          height='200'></iframe>
        {/*Node overall resource overview */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/PwMJtdvnz/1-k8s-for-prometheus-dashboard-20211010-en?orgId=1&refresh=1s&panelId=78'
          width='925'
          height='400'></iframe>
        {/*NGINX Network Input  */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/4DFTt9Wnk/nginx?orgId=1&refresh=5s&panelId=26'
          width='450'
          height='200'></iframe>
        {/* NGINX Network Output */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/4DFTt9Wnk/nginx?orgId=1&refresh=5s&panelId=35'
          width='450'
          height='200'></iframe>
        {/* Pod Network I/O */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/2kmXP3d7z/kubernetes-pods?orgId=1&refresh=5s&panelId=3'
          width='925'
          height='400'></iframe>
        {/* Pods with OOM killed containters */}
        <iframe
          src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/RlEVpGmVk/oom-and-restarts?orgId=1&refresh=5s&panelId=33'
          width='925'
          height='200'></iframe>
      </div>
    </div>
  );
}

export default MainDashboard;

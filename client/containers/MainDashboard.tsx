import React from 'react';
// error with parsing image, React says correct loader is not installed on pkg
import logo from '../assets/moatIcon.png';

// TODO: Make a dashboard item component that will modularize the iframes and pass the source as a prop so we can create a filter so users can customize their dashboard. Anago had a query so you can build a dashboard from your query so we can look into that. Max has ideas about this.
interface MainDashboardProps {
  open: boolean;
  id: string;
}

function MainDashboard(props: MainDashboardProps) {
  return (
    <div id='dashboard-container' className='container'>
      <div id='mainDashboard'>
        <div id='intro'>
          <img
            id='logo'
            src='https://res.cloudinary.com/mfrazb/image/upload/v1695922059/1_sxtwzi.png'
            alt='Moat logo'
          />
          <p className='text-block'>
            Security-First Cluster Monitoring. Detect and mitigate threats with
            ease. Powered by Prometheus and Grafana, moat scans clusters, finds
            vulnerabilities, and delivers real-time threat insights.
          </p>
        </div>
        <div id='dashboard'>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/k8s_views_pods/kubernetes-views-pods?orgId=1&refresh=5s&var-datasource=prometheus&var-namespace=prometheus&var-pod=alertmanager-stable-kube-prometheus-sta-alertmanager-0&var-resolution=1s&from=1695854574920&to=1695858174920&theme=dark&panelId=29'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/2kmXP3d7z/kubernetes-pods?orgId=1&refresh=5s&from=1695867620911&to=1695868520911&panelId=3'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/4DFTt9Wnk/nginx?orgId=1&from=1695911399696&to=1695914999696&panelId=26'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/4DFTt9Wnk/nginx?orgId=1&from=1695911426942&to=1695915026942&panelId=35'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1695911514627&to=1695915114627&panelId=8'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/R6abPf9Zz/kubernetes-apiserver?orgId=1&from=1695911582346&to=1695915182346&panelId=2'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zwArunW4k/kubernetes-cluster-resource-summary?orgId=1&from=1695914444322&to=1695918044322&panelId=43'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zwArunW4k/kubernetes-cluster-resource-summary?orgId=1&from=1695914418213&to=1695918018213&panelId=45'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zrP9cXD7l/1-cluster-and-node-health-and-scaling?orgId=1&from=1695872791859&to=1695915991859&panelId=21'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/zrP9cXD7l/1-cluster-and-node-health-and-scaling?orgId=1&from=1695872817479&to=1695916017479&panelId=5'
            width='450'
            height='200'
            frameBorder='0'></iframe>
          <iframe
            src='http://ab3008d30e38b46348e5df77df694e20-819087825.us-east-1.elb.amazonaws.com/d-solo/RlEVpGmVk/oom-and-restarts?orgId=1&from=1695914037541&to=1695914937541&panelId=33'
            width='900'
            height='200'
            frameBorder='0'></iframe>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;

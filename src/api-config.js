let backendHost;


const hostname = window && window.location && window.location.hostname;

if(hostname === 'agenda-node-client.herokuapp.com') {
  backendHost = 'https://agenda-node-server.herokuapp.com';
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || 'http://localhost:9000';
}

export const API_ROOT = backendHost
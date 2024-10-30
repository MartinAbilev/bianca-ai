const API_URL:any =
{
  // production: 'http://77.38.218.82:3000/api/state', // uncoment this for prod
  // production: 'http://host.docker.internal:3001/api/', // uncoment this for local build
  production: 'http://localhost:3001/api', // uncoment this for local build
  development:'http://localhost:3001/api'// uncoment this for local bug server
  // development:'http://host.docker.internal:3001/api/'// uncoment this for local bug server
  // development: 'http://77.38.218.82:3000/api/state', // uncoment this for run from another dev machine aka my laptop
}
export default API_URL

var vcap_services = JSON.parse(process.env.VCAP_SERVICES);
var uri = vcap_services.mlab[0].credentials.uri;

module.exports = {
    remoteUrl :  uri, 
    localUrl: 'mongodb://localhost/meanstacktutorials'
};

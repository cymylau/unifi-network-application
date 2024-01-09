// unifipwd should be replaced with password, and set inside docker-compose.yml . 

db.getSiblingDB("unifi").createUser({user: "unifi", pwd: "unifipwd", roles: [{role: "readWrite", db: "unifi"}]});
db.getSiblingDB("unifi_stat").createUser({user: "unifi", pwd: "unifipwd", roles: [{role: "readWrite", db: "unifi_stat"}]});

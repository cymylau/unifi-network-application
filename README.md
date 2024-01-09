https://docs.linuxserver.io/images/docker-unifi-network-application/

This is a working docker compose file, and init file however, both contain a compromised password. 

If you are thinking of using this, replace 'unifipwd' in both docker-compose and init-mongo.js files (they should align). 

You may also change the username, database name etc... but it's critical the password is far more sensible than this example. 

Enjoy. 

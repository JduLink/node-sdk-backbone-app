# node-sdk-backbone-app

![alt tag](screenshot.png)

## $ node index

ATTENTION: The default mode of this app returns code examples to the UI if no credentials are supplied.
If you run this app with credentials, do not deploy it to a public URL unless the app is password protected.



## To run localhost:

Either specify your clientId, clientSecret and stack in the code or in a config var/command line:

##Code:

/config/default.js

	auth: {
		clientId: '', //get this from App Center
		clientSecret: '', //get this from App Center
		stack: '' //whatever stack your account is linked to, like S1	
	},
	
	
##Config Var

Use this option as an easy way to avoid committing your clientid/secret to source control:

In Heroku dashboard, add the following config vars:

CID={{clientId}}
CSEC={{clientSecret}}
STK={{stack}}


##Command Line

$ NODE_ENV=dev CID={{clientId}} CSEC={{clientSecret}} STK={{stack}} node index	

(remove all curly braces)


##Building your app:

Use "grunt" from the command line to build the app, which creates the public-optimized folder.
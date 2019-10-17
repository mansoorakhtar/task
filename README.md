# Code Challenge
=====================================================

## Quick Start

### Server Configuration

* Clone Project to local,CD to backend directory and run ```composer update``` command
* Create database "task"
* Import Database which is located in database folder
* You can also import database through migration, CD to backend directory and run command
```php artisan migrate``` this command will import database.
* Add virtual host, the one i have used was *http://task.local/api*
* Add entry in httpd-vhosts.conf file
```
<VirtualHost task.local:80>
	DocumentRoot "path-to-htdocs\project-name\backend\public"
	ServerName task.local
	<Directory "path-to-htdocs\project-name\backend\public">
		Order allow,deny
		Allow from all
	</Directory>
</VirtualHost>

<VirtualHost task.local:443>
	DocumentRoot "path-to-htdocs\project-name\backend\public"
	ServerName task.local
	SSLEngine On
	SSLCertificateFile "path-to-apache\conf\ssl.crt\server.crt"
	SSLCertificateKeyFile "path-to-apache\conf\ssl.key\server.key"
	<Directory "path-to-htdocs\project-name\backend\public">
		Order allow,deny
		Allow from all
	</Directory>
</VirtualHost>
``` 
*  Add entry in hosts file located in

```C:\Windows\System32\drivers\etc```

* If you want different host than mentioned one then update axios-instance.js file ```baseURL``` value which is located
inside ```frontend/src/axios-instance.js```

* After completing all step your server will be up and running

### Frontend Configuration

* CD to frontend directory and run ```npm update```
* after dependency installation run command "npm start"
* open browser and enter url *http://localhost:3000*

   













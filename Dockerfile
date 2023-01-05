FROM docker.io/httpd:2.4
COPY /webclock /usr/local/apache2/htdocs/

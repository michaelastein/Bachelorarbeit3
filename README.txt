Um das Programm zu starten, muss zuerst die IP-Adresse in docker-compose.yml ersetzt werden. 
Die neue IP-Adresse ist die IP des Servers, auf dem das Programm laufen soll. 
In einer Docker-Umgebung reicht es vielleicht, die IP-Adresse bei 127.0.0.1 zu belassen.

Starten der Anwendung (in CMD):

docker-compose build backend-service
docker-compose build frontend-service
docker-compose up



Die Ansicht der Webseite sollte auf Port 8081 sichtbar sein.
Eventuell muss der Port zuvor in der Firewall freigeschaltet werden.

Der COde wurde von Michaela Stein erstellt auf Basis des Tutorials 
https://www.bezkoder.com/django-angular-11-crud-rest-framework/#Define_Routes_for_Angular_AppRoutingModule
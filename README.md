# ejemplo-iaac
iaac example. The main goal it's run two node express container on frontend y one spring boot container in backend, using HAProxy as a gateway.

Para que funcione ejecutar
: en $demo .... mvn clean install (para que genere el jar)

Luego en docker 

$ docker-compose -f infra.yml up --build -d

eso te arma todoa la infraestructura
Pueden chequear las url que les va a responder el proxy
- http://192.168.99.100/ui01
- http://192.168.99.100/ui02

O pueden ir directamente al os servidores de UI con 
- http://192.168.99.100:9001
- http://192.168.99.100:9002

El servidor de backend no debería poder accederse desde el proxy pero si desde la URL
- http://192.168.99.100:9000/api/hello

HA Proxy te genera una interface para verificar el funcionamiento de los servidores en 

http://192.168.99.100/haproxy?stats (user admin - pass admin) 

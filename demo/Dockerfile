FROM eclipse-temurin:21-jdk-alpine
LABEL maintainer="mdomingu@gmail.com" 
COPY target/demo-0.0.1-SNAPSHOT.jar /opt/demo-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java","-jar","/opt/demo-0.0.1-SNAPSHOT.jar"]

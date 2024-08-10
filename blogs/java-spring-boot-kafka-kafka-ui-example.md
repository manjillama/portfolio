---
title: 'Spring Boot with Kafka, Kafka UI and Docker example'
slug: java-spring-boot-kafka-kafka-ui-example
featured: true
published: true
date: 2023-10-02T00:00:00+00:00
featuredImage: ../src/images/spring-kafka.png
---

## Overview

This blog will guide you through setting up a complete Kafka environment using Spring Boot, Docker, and Kafka UI. By the end of this tutorial, you will have a fully functional Kafka-based application running in Docker containers, complete with a web interface to manage and visualize your Kafka topics and messages.

## What We Will Cover

1. **Setting Up Apache Kafka with Docker:**
   We'll start by creating a Docker Compose configuration to set up a Kafka cluster along with Zookeeper, which Kafka relies on for distributed coordination.
2. **Developing a Spring Boot Application with Kafka:**
   Next, we'll create a simple Spring Boot application that includes Kafka dependencies. We'll implement a producer to send messages to Kafka topics and a consumer to read those messages.
3. **Integrating Kafka UI for Monitoring:**
   To make our Kafka environment more manageable, we'll integrate Kafka UI, a powerful tool for monitoring and managing Kafka clusters. We'll configure Kafka UI to connect to our Kafka cluster running in Docker.

By combining these technologies, you'll gain insights into building robust, scalable, and maintainable event-driven applications. Let's dive into the setup process and get started with Apache Kafka, Spring Boot, Docker, and Kafka UI.

## Prerequisites

To follow along with this guide, you should have:

- Basic knowledge of Java and Spring Boot
- Java Development Kit (JDK) 8 or later installed
- A suitable IDE, such as IntelliJ IDEA or Eclipse
- Apache Kafka installed and running on your local machine

## Docker setup for Kafka and Kafka UI

```yaml
version: '3'

services:
  zookeeper:
    image: zookeeper
    container_name: zookeeper
    ports:
      - '2181:2181'

  kafka:
    image: confluentinc/cp-kafka
    container_name: kafka
    ports:
      - '9092:9092'
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: PLAINTEXT:PLAINTEXT,PLAINTEXT_HOST:PLAINTEXT
      KAFKA_INTER_BROKER_LISTENER_NAME: PLAINTEXT
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:29092,PLAINTEXT_HOST://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1

  kafka-ui:
    container_name: kafka-ui
    image: provectuslabs/kafka-ui:latest
    ports:
      - 8090:8080
    environment:
      DYNAMIC_CONFIG_ENABLED: 'true'
      KAFKA_CLUSTERS_0_NAME: wizard-test
      KAFKA_CLUSTERS_0_BOOTSTRAP_SERVERS: kafka:29092
```

## Setting up Spring Boot project

To connect your Spring Boot application to the Kafka cluster defined in your Docker Compose setup, you need to configure the necessary Kafka properties in your Spring Boot application.

### Step 1: Add Dependencies

To get started, we’ll create a new Spring Boot project with the following dependencies:

- Spring for Apache Kafka
- Spring Boot Starter Web

You can create the project using Spring Initializr, or you can manually add these dependencies in your Maven pom.xml or Gradle build.gradle file.

Maven:

```
<dependencies>
    <dependency>
        <groupId>org.springframework.kafka</groupId>
        <artifactId>spring-kafka</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

Gradle:

```
dependencies {
    implementation 'org.springframework.kafka:spring-kafka'
    implementation 'org.springframework.boot:spring-boot-starter-web'
}
```

### Step 2: Configure Kafka Properties

Create a configuration file application.properties (or application.yml) in your src/main/resources directory and configure the Kafka properties.

```properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=my-group
```

### Step 3: Create Kafka Configuration Class

Create a configuration class to define Kafka-related beans if needed.

```java
import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KafkaTopicConfig {

    @Bean
    public NewTopic topic() {
        return new NewTopic("my-topic", 1, (short) 1);
    }
}
```

### Step 4: Create Kafka Producer

Create a service class to produce messages to the Kafka topic.

```java
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class KafkaProducerService {

    private final KafkaTemplate<String, String> kafkaTemplate;

    public KafkaProducerService(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendMessage(String message) {
        kafkaTemplate.send("my-topic", message);
    }
}
```

### Step 5: Create Kafka Consumer

Create a service class to consume messages from the Kafka topic.

```java
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "my-topic", groupId = "my-group")
    public void listen(ConsumerRecord<String, String> record) {
        System.out.println("Received Message: " + record.value());
    }
}
```

### Step 6: Enable Kafka Listener

Enable Kafka listener in your Spring Boot application by adding the @EnableKafka annotation to your main application class.

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
@EnableKafka
public class KafkaApplication {

    public static void main(String[] args) {
        SpringApplication.run(KafkaApplication.class, args);
    }
}
```

### Step 7: Run Your Spring Boot Application

Run your Spring Boot application using your IDE or with the following command:

```bash
mvn spring-boot:run
```

## Running Your Application

After you ran your Spring Boot application, it should connect to the Kafka cluster as configured. Ensure your Docker Compose services are up and running.

```bash
docker-compose up
```

## Test the Application

You can test the application by sending a GET request to the /publish endpoint:

```bash
curl "http://localhost:8080/publish?message=HelloKafka"
```

## Access Kafka UI

Kafka UI is a lightweight dashboard makes it easy to track key metrics of your Kafka clusters - Brokers, Topics, Partitions, Production, and Consumption.

Access the web Kafka UI at [http://localhost:8090](http://localhost:8090/)

---

By following these steps, you configure your Spring Boot application to connect to a Kafka cluster running in Docker. The configuration includes setting up Kafka properties, defining producer and consumer services, and enabling Kafka listeners in your Spring Boot application.

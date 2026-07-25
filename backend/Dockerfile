# Stage 1: Build stage using JDK 17 Alpine
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Copy maven files first for layer caching
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Ensure maven wrapper executable permissions
RUN chmod +x mvnw

# Download dependencies
RUN ./mvnw dependency:go-offline -B

# Copy source code and build jar package
COPY src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Runtime stage using lightweight JRE 17 Alpine
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Security: Create non-root app user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy built Spring Boot jar from build stage
COPY --from=build /app/target/leaddesk-backend-0.0.1-SNAPSHOT.jar app.jar

# Expose port (Spring Boot default)
EXPOSE 8080

# Environment variable defaults
ENV PORT=8080

# Start application
ENTRYPOINT ["java", "-jar", "app.jar"]

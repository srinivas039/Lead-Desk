# Stage 1: Build stage
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app

# Copy backend maven files
COPY backend/.mvn/ backend/.mvn
COPY backend/mvnw backend/pom.xml ./backend/

WORKDIR /app/backend
RUN chmod +x mvnw
RUN ./mvnw dependency:go-offline -B

COPY backend/src ./src
RUN ./mvnw clean package -DskipTests

# Stage 2: Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --from=build /app/backend/target/leaddesk-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080
ENV PORT=8080

ENTRYPOINT ["java", "-jar", "app.jar"]

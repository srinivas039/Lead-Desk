package com.leaddesk.dto;

import com.leaddesk.entity.LeadStatus;
import java.time.LocalDateTime;

public class LeadResponse {

    private Long id;
    private String name;
    private String email;
    private String budget;
    private String message;
    private LeadStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public LeadResponse() {}

    public LeadResponse(Long id, String name, String email, String budget, String message, LeadStatus status, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.budget = budget;
        this.message = message;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getBudget() { return budget; }
    public void setBudget(String budget) { this.budget = budget; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public LeadStatus getStatus() { return status; }
    public void setStatus(LeadStatus status) { this.status = status; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }

    public static LeadResponseBuilder builder() {
        return new LeadResponseBuilder();
    }

    public static class LeadResponseBuilder {
        private Long id;
        private String name;
        private String email;
        private String budget;
        private String message;
        private LeadStatus status;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;

        public LeadResponseBuilder id(Long id) { this.id = id; return this; }
        public LeadResponseBuilder name(String name) { this.name = name; return this; }
        public LeadResponseBuilder email(String email) { this.email = email; return this; }
        public LeadResponseBuilder budget(String budget) { this.budget = budget; return this; }
        public LeadResponseBuilder message(String message) { this.message = message; return this; }
        public LeadResponseBuilder status(LeadStatus status) { this.status = status; return this; }
        public LeadResponseBuilder createdAt(LocalDateTime createdAt) { this.createdAt = createdAt; return this; }
        public LeadResponseBuilder updatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; return this; }

        public LeadResponse build() {
            return new LeadResponse(id, name, email, budget, message, status, createdAt, updatedAt);
        }
    }
}

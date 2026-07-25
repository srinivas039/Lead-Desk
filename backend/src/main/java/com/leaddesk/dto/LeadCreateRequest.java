package com.leaddesk.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class LeadCreateRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 100, message = "Name must be between 2 and 100 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    private String email;

    @NotBlank(message = "Budget range is required")
    private String budget;

    @NotBlank(message = "Message is required")
    @Size(min = 5, max = 2000, message = "Message must be between 5 and 2000 characters")
    private String message;

    public LeadCreateRequest() {}

    public LeadCreateRequest(String name, String email, String budget, String message) {
        this.name = name;
        this.email = email;
        this.budget = budget;
        this.message = message;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getBudget() { return budget; }
    public void setBudget(String budget) { this.budget = budget; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public static LeadCreateRequestBuilder builder() {
        return new LeadCreateRequestBuilder();
    }

    public static class LeadCreateRequestBuilder {
        private String name;
        private String email;
        private String budget;
        private String message;

        public LeadCreateRequestBuilder name(String name) { this.name = name; return this; }
        public LeadCreateRequestBuilder email(String email) { this.email = email; return this; }
        public LeadCreateRequestBuilder budget(String budget) { this.budget = budget; return this; }
        public LeadCreateRequestBuilder message(String message) { this.message = message; return this; }

        public LeadCreateRequest build() {
            return new LeadCreateRequest(name, email, budget, message);
        }
    }
}

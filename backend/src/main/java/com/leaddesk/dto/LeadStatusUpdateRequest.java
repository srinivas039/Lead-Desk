package com.leaddesk.dto;

import com.leaddesk.entity.LeadStatus;
import jakarta.validation.constraints.NotNull;

public class LeadStatusUpdateRequest {

    @NotNull(message = "Status cannot be null")
    private LeadStatus status;

    public LeadStatusUpdateRequest() {}

    public LeadStatusUpdateRequest(LeadStatus status) {
        this.status = status;
    }

    public LeadStatus getStatus() { return status; }
    public void setStatus(LeadStatus status) { this.status = status; }

    public static LeadStatusUpdateRequestBuilder builder() {
        return new LeadStatusUpdateRequestBuilder();
    }

    public static class LeadStatusUpdateRequestBuilder {
        private LeadStatus status;

        public LeadStatusUpdateRequestBuilder status(LeadStatus status) { this.status = status; return this; }

        public LeadStatusUpdateRequest build() {
            return new LeadStatusUpdateRequest(status);
        }
    }
}

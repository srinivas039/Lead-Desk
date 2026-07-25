package com.leaddesk.controller;

import com.leaddesk.dto.LeadResponse;
import com.leaddesk.dto.LeadStatusUpdateRequest;
import com.leaddesk.service.LeadService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/leads")
public class AdminLeadController {

    private final LeadService leadService;

    public AdminLeadController(LeadService leadService) {
        this.leadService = leadService;
    }

    @GetMapping
    public ResponseEntity<List<LeadResponse>> getAllLeads() {
        List<LeadResponse> leads = leadService.getAllLeads();
        return ResponseEntity.ok(leads);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<LeadResponse> updateStatus(
            @PathVariable Long id,
            @Valid @RequestBody LeadStatusUpdateRequest request
    ) {
        LeadResponse updatedLead = leadService.updateLeadStatus(id, request);
        return ResponseEntity.ok(updatedLead);
    }

    @GetMapping("/search")
    public ResponseEntity<List<LeadResponse>> searchLeads(
            @RequestParam(name = "query", required = false, defaultValue = "") String query
    ) {
        List<LeadResponse> leads = leadService.searchLeads(query);
        return ResponseEntity.ok(leads);
    }
}

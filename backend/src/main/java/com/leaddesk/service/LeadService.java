package com.leaddesk.service;

import com.leaddesk.dto.LeadCreateRequest;
import com.leaddesk.dto.LeadResponse;
import com.leaddesk.dto.LeadStatusUpdateRequest;

import java.util.List;

public interface LeadService {

    LeadResponse createLead(LeadCreateRequest request);

    List<LeadResponse> getAllLeads();

    LeadResponse updateLeadStatus(Long id, LeadStatusUpdateRequest request);

    List<LeadResponse> searchLeads(String query);
}

package com.leaddesk.service.impl;

import com.leaddesk.dto.LeadCreateRequest;
import com.leaddesk.dto.LeadResponse;
import com.leaddesk.dto.LeadStatusUpdateRequest;
import com.leaddesk.entity.Lead;
import com.leaddesk.entity.LeadStatus;
import com.leaddesk.exception.ResourceNotFoundException;
import com.leaddesk.repository.LeadRepository;
import com.leaddesk.service.LeadService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class LeadServiceImpl implements LeadService {

    private final LeadRepository leadRepository;

    public LeadServiceImpl(LeadRepository leadRepository) {
        this.leadRepository = leadRepository;
    }

    @Override
    public LeadResponse createLead(LeadCreateRequest request) {
        Lead lead = Lead.builder()
                .name(request.getName().trim())
                .email(request.getEmail().trim().toLowerCase())
                .budget(request.getBudget().trim())
                .message(request.getMessage().trim())
                .status(LeadStatus.NEW)
                .build();

        Lead savedLead = leadRepository.save(lead);
        return mapToResponse(savedLead);
    }

    @Override
    @Transactional(readOnly = true)
    public List<LeadResponse> getAllLeads() {
        return leadRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public LeadResponse updateLeadStatus(Long id, LeadStatusUpdateRequest request) {
        Lead lead = leadRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Lead not found with id: " + id));

        lead.setStatus(request.getStatus());
        Lead updatedLead = leadRepository.save(lead);
        return mapToResponse(updatedLead);
    }

    @Override
    @Transactional(readOnly = true)
    public List<LeadResponse> searchLeads(String query) {
        if (query == null || query.trim().isEmpty()) {
            return getAllLeads();
        }

        return leadRepository.searchLeads(query.trim())
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private LeadResponse mapToResponse(Lead lead) {
        return LeadResponse.builder()
                .id(lead.getId())
                .name(lead.getName())
                .email(lead.getEmail())
                .budget(lead.getBudget())
                .message(lead.getMessage())
                .status(lead.getStatus())
                .createdAt(lead.getCreatedAt())
                .updatedAt(lead.getUpdatedAt())
                .build();
    }
}

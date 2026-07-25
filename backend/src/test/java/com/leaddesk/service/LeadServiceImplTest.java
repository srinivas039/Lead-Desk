package com.leaddesk.service;

import com.leaddesk.dto.LeadCreateRequest;
import com.leaddesk.dto.LeadResponse;
import com.leaddesk.dto.LeadStatusUpdateRequest;
import com.leaddesk.entity.Lead;
import com.leaddesk.entity.LeadStatus;
import com.leaddesk.exception.ResourceNotFoundException;
import com.leaddesk.repository.LeadRepository;
import com.leaddesk.service.impl.LeadServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class LeadServiceImplTest {

    @Mock
    private LeadRepository leadRepository;

    @InjectMocks
    private LeadServiceImpl leadService;

    private Lead sampleLead;

    @BeforeEach
    void setUp() {
        sampleLead = Lead.builder()
                .id(1L)
                .name("John Doe")
                .email("john@example.com")
                .budget("$1000–5000")
                .message("We need a custom lead management system")
                .status(LeadStatus.NEW)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
    }

    @Test
    @DisplayName("Should create lead successfully")
    void createLead_Success() {
        LeadCreateRequest request = LeadCreateRequest.builder()
                .name("John Doe")
                .email("john@example.com")
                .budget("$1000–5000")
                .message("We need a custom lead management system")
                .build();

        when(leadRepository.save(any(Lead.class))).thenReturn(sampleLead);

        LeadResponse response = leadService.createLead(request);

        assertThat(response).isNotNull();
        assertThat(response.getId()).isEqualTo(1L);
        assertThat(response.getName()).isEqualTo("John Doe");
        assertThat(response.getEmail()).isEqualTo("john@example.com");
        assertThat(response.getStatus()).isEqualTo(LeadStatus.NEW);
        verify(leadRepository, times(1)).save(any(Lead.class));
    }

    @Test
    @DisplayName("Should retrieve all leads ordered by created date desc")
    void getAllLeads_Success() {
        when(leadRepository.findAllByOrderByCreatedAtDesc()).thenReturn(List.of(sampleLead));

        List<LeadResponse> leads = leadService.getAllLeads();

        assertThat(leads).hasSize(1);
        assertThat(leads.get(0).getName()).isEqualTo("John Doe");
        verify(leadRepository, times(1)).findAllByOrderByCreatedAtDesc();
    }

    @Test
    @DisplayName("Should update lead status successfully")
    void updateLeadStatus_Success() {
        LeadStatusUpdateRequest updateRequest = new LeadStatusUpdateRequest(LeadStatus.CONTACTED);

        when(leadRepository.findById(1L)).thenReturn(Optional.of(sampleLead));
        when(leadRepository.save(any(Lead.class))).thenAnswer(invocation -> invocation.getArgument(0));

        LeadResponse response = leadService.updateLeadStatus(1L, updateRequest);

        assertThat(response).isNotNull();
        assertThat(response.getStatus()).isEqualTo(LeadStatus.CONTACTED);
        verify(leadRepository, times(1)).findById(1L);
        verify(leadRepository, times(1)).save(any(Lead.class));
    }

    @Test
    @DisplayName("Should throw ResourceNotFoundException when lead ID not found")
    void updateLeadStatus_NotFound() {
        LeadStatusUpdateRequest updateRequest = new LeadStatusUpdateRequest(LeadStatus.CLOSED);
        when(leadRepository.findById(99L)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFoundException.class, () -> leadService.updateLeadStatus(99L, updateRequest));
    }

    @Test
    @DisplayName("Should search leads by query string")
    void searchLeads_WithQuery() {
        when(leadRepository.searchLeads("John")).thenReturn(List.of(sampleLead));

        List<LeadResponse> results = leadService.searchLeads("John");

        assertThat(results).hasSize(1);
        assertThat(results.get(0).getEmail()).isEqualTo("john@example.com");
        verify(leadRepository, times(1)).searchLeads("John");
    }
}

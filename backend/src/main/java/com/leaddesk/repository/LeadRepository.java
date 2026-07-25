package com.leaddesk.repository;

import com.leaddesk.entity.Lead;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeadRepository extends JpaRepository<Lead, Long> {

    List<Lead> findAllByOrderByCreatedAtDesc();

    @Query("SELECT l FROM Lead l WHERE " +
           "LOWER(l.name) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(l.email) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "UPPER(CAST(l.status AS string)) LIKE UPPER(CONCAT('%', :query, '%')) " +
           "ORDER BY l.createdAt DESC")
    List<Lead> searchLeads(@Param("query") String query);
}

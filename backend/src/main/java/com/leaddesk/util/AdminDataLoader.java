package com.leaddesk.util;

import com.leaddesk.entity.Lead;
import com.leaddesk.entity.LeadStatus;
import com.leaddesk.entity.User;
import com.leaddesk.repository.LeadRepository;
import com.leaddesk.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminDataLoader implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(AdminDataLoader.class);

    private final UserRepository userRepository;
    private final LeadRepository leadRepository;
    private final PasswordEncoder passwordEncoder;

    public AdminDataLoader(UserRepository userRepository, LeadRepository leadRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.leadRepository = leadRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        String adminUsername = "admin@digitalheroes.com";
        
        if (!userRepository.existsByUsername(adminUsername)) {
            User admin = User.builder()
                    .username(adminUsername)
                    .password(passwordEncoder.encode("Admin@123"))
                    .role("ROLE_ADMIN")
                    .build();

            userRepository.save(admin);
            log.info("Default Admin account created successfully: {}", adminUsername);
        }

        // Seed initial sample leads if repository is empty
        if (leadRepository.count() == 0) {
            leadRepository.save(Lead.builder()
                    .name("Sarah Connor")
                    .email("sarah.connor@cyberdyne.com")
                    .budget("$5000–10000")
                    .message("Interested in custom AI-driven SaaS dashboard development.")
                    .status(LeadStatus.NEW)
                    .build());

            leadRepository.save(Lead.builder()
                    .name("Alex Mercer")
                    .email("alex.mercer@gentek.org")
                    .budget("$1000–5000")
                    .message("Looking for full-stack React and Spring Boot integration.")
                    .status(LeadStatus.CONTACTED)
                    .build());

            leadRepository.save(Lead.builder()
                    .name("Elena Fisher")
                    .email("elena.fisher@nathan.io")
                    .budget("> $10000")
                    .message("Enterprise level lead management application overhaul needed.")
                    .status(LeadStatus.CLOSED)
                    .build());

            log.info("Sample leads seeded into database successfully.");
        }
    }
}

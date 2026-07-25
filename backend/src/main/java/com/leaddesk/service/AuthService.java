package com.leaddesk.service;

import com.leaddesk.dto.AuthResponse;
import com.leaddesk.dto.LoginRequest;

public interface AuthService {

    AuthResponse login(LoginRequest request);
}

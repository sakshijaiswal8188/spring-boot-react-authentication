package com.example.spring_boot_react_auth.services;

import com.example.spring_boot_react_auth.entity.User;
import com.example.spring_boot_react_auth.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;


    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user );
    }
}

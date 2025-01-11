package com.example.backend.config;

import com.example.backend.login.model.entity.SocialLoginType;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.converter.Converter;

@Configuration
public class SocialLoginTypeConverter implements Converter<String, SocialLoginType> { //대문자 값을 소문자로 mapping
    @Override
    public SocialLoginType convert(String s) {
        return SocialLoginType.valueOf(s.toUpperCase());
    }
}
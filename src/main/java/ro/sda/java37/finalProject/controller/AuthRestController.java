package ro.sda.java37.finalProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ro.sda.java37.finalProject.dto.LoginDto;
import ro.sda.java37.finalProject.dto.TokenDto;

@RestController
@RequestMapping(value = "/api/auth", produces = "application/json")
public class AuthRestController {

  @Autowired
  public InMemoryUserDetailsManager inMemoryUserDetailsManager;

  @PostMapping("/signin")
  public TokenDto login(@RequestBody LoginDto loginDto) {
    return TokenDto.builder()
      .token("my token")
      .build();
  }

}

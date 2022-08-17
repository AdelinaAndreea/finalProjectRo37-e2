package ro.sda.java37.finalProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ro.sda.java37.finalProject.dto.ClientDto;
import ro.sda.java37.finalProject.services.ClientService;

import java.util.List;

@RestController
@RequestMapping(value = "/api/client", produces = "application/json")
public class ClientRestController {
  @Autowired
  private ClientService clientService;

  @GetMapping()
  public List<ClientDto> getAllClients() {
    return clientService.getAllClients();
  }

  @GetMapping("/{id}")
  public ClientDto getClientById(@PathVariable Long id) {
    return clientService.getClientById(id);
  }

  @PostMapping
  public ClientDto createClient(@RequestBody ClientDto clientDto) {
    return clientService.createClient(clientDto);
  }

  @PutMapping
  public ClientDto updateClient(@RequestBody ClientDto clientDto) {
    return clientService.updateClient(clientDto);

  }

  @DeleteMapping("/{id}")
  public void deleteClient(@PathVariable Long id) {
    clientService.deleteClient(id);
  }

}

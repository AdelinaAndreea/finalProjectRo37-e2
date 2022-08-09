package ro.sda.java37.finalProject.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.sda.java37.finalProject.dto.ClientDto;
import ro.sda.java37.finalProject.entities.Client;
import ro.sda.java37.finalProject.exceptions.EntityNotFoundError;
import ro.sda.java37.finalProject.repository.ClientRepository;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private ClientMapper clientMapper;


    public ClientDto getClientById(Long id) {
        Optional<Client> clientOptional = clientRepository.findById(id);
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            return clientMapper.convertToDto(client);
        } else {
            throw new EntityNotFoundError("Client with id " + id + " not found");
        }
    }

    public ClientDto createClient(ClientDto clientDto) {
        Client client = clientMapper.convertToEntity(clientDto);
        client = clientRepository.save(client);
        ClientDto result = clientMapper.convertToDto(client);
        return result;
    }

    public ClientDto updateClient(ClientDto clientDto) {
        Optional<Client> clientOptional = clientRepository.findById(clientDto.getId());
        if (clientOptional.isPresent()) {
            Client client = clientOptional.get();
            client.setFirstName(clientDto.getFirstName());
            client.setLastName(clientDto.getLastName());
            client.setEmail(clientDto.getEmail());
            client.setPhoneNumber(clientDto.getPhoneNumber());
            clientRepository.save(client);
            return clientMapper.convertToDto(client);
        } else {
            throw new EntityNotFoundError("Client with id " + clientDto.getId() + " not found");
        }
    }

    public void deleteClient(Long id) {
        clientRepository.deleteById(id);
    }
}

package ro.sda.java37.finalProject.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.sda.java37.finalProject.dto.PetDto;
import ro.sda.java37.finalProject.entities.Pet;
import ro.sda.java37.finalProject.repository.PetRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PetService {
    @Autowired
    private PetRepository petRepository;
    @Autowired
    private PetMapper petMapper;

    public List<PetDto> getAllPets() {
        return petRepository.findAll().stream().map(e -> petMapper.convertToDto(e)).collect(Collectors.toList());

    }

    public PetDto createPet(PetDto petDto) {
        Pet pet = petMapper.convertToEntity(petDto);
        pet = petRepository.save(pet);
        PetDto result = petMapper.convertToDto(pet);
        return result;
    }
}

package ro.sda.java37.finalProject.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.sda.java37.finalProject.dto.VeterinarianDto;
import ro.sda.java37.finalProject.entities.Veterinarian;
import ro.sda.java37.finalProject.exceptions.EntityNotFoundError;
import ro.sda.java37.finalProject.repository.VeterinarianRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

//@Transactional
@Service
@AllArgsConstructor
public class VeterinarianService {
    @Autowired
    private VeterinarianRepository veterinarianRepository;
    @Autowired
    private VeterinarianMapper veterinarianMapper;

    public List<VeterinarianDto> getAll() {
        return veterinarianRepository.findAll().stream().map(e -> veterinarianMapper.convertToDto(e)).collect(Collectors.toList());
    }

    public VeterinarianDto createVeterirarian(VeterinarianDto veterinarianDto) {
        Veterinarian veterinarian = veterinarianMapper.convertToEntity(veterinarianDto);
        veterinarian = veterinarianRepository.save(veterinarian);
        VeterinarianDto result = veterinarianMapper.convertToDto(veterinarian);
        return result;
    }


    public void deleteVeterinarian(Long id) {
        veterinarianRepository.deleteById(id);
    }

    public VeterinarianDto updateVeterirarian(VeterinarianDto veterinarianDto) {
        Optional<Veterinarian> veterinarianOptional = veterinarianRepository.findById(veterinarianDto.getId());
        if (veterinarianOptional.isPresent()) {
            Veterinarian veterinarian = veterinarianOptional.get();
            veterinarian.setFirstName(veterinarianDto.getFirstName());
            veterinarian.setLastName(veterinarianDto.getLastName());
            veterinarian.setSpeciality(veterinarianDto.getSpeciality());
            veterinarianRepository.save(veterinarian);
            return veterinarianMapper.convertToDto(veterinarian);
        } else {
            throw new EntityNotFoundError("Vet with id " + veterinarianDto.getId() + " not found");
        }

    }
}

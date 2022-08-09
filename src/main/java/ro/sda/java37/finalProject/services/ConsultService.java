package ro.sda.java37.finalProject.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.sda.java37.finalProject.dto.ConsultDto;
import ro.sda.java37.finalProject.entities.Consult;
import ro.sda.java37.finalProject.repository.ConsultRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ConsultService {

    @Autowired
    private ConsultRepository consultRepository;
    @Autowired
    private ConsultMapper consultMapper;

    public List<ConsultDto> getAllConsults() {
        return consultRepository.findAll().stream().map(e -> consultMapper.convertToDto(e)).collect(Collectors.toList());
    }

    public ConsultDto createConsult(ConsultDto consultDto) {
        Consult consult = consultMapper.convertToEntity(consultDto);
        consult = consultRepository.save(consult);
        ConsultDto result = consultMapper.convertToDto(consult);
        return result;

    }

    public List<ConsultDto> getAllConsultsByPetId(Long petId) {
        List<Consult> consults = consultRepository.findAllByPetId(petId);
        return consults.stream().map(consult -> consultMapper.convertToDto(consult)).collect(Collectors.toList());
    }

    public List<ConsultDto> getAllConsultsByVeterinarianId(Long vetId) {
        List<Consult> consults = consultRepository.findAllByVeterinarianId(vetId);
        return consults.stream().map(consult -> consultMapper.convertToDto(consult)).collect(Collectors.toList());
    }
}

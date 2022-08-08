package ro.sda.java37.finalProject.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ro.sda.java37.finalProject.dto.ConsultDto;
import ro.sda.java37.finalProject.entities.Consult;
import ro.sda.java37.finalProject.repository.ConsultRepository;
import ro.sda.java37.finalProject.repository.PetRepository;

@Service

public class ConsultMapper implements Mapper<Consult, ConsultDto> {

    @Autowired
    private ConsultRepository consultRepository;

    @Autowired
    private ConsultMapper consultMapper;

    @Autowired
    private PetMapper petMapper;

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private VeterinarianMapper veterinarianMapper;

    @Override
    public ConsultDto convertToDto(Consult consult) {
        ConsultDto consultDto = new ConsultDto();
        consultDto.setId(consult.getId());
        consultDto.setDate(consult.getDate());
        consultDto.setDescription(consult.getDescription());
        consultDto.setPrice(consult.getPrice());
        if (consult.getPet() != null) {
            consultDto.setPet(petMapper.convertToDto(consult.getPet()));
            consultDto.setId(consult.getPet().getId());
        }
        if (consult.getVeterinarian() != null) {
            consultDto.setVeterinarian(veterinarianMapper.convertToDto(consult.getVeterinarian()));
            consultDto.setId(consult.getVeterinarian().getId());
        }


        return consultDto;

    }

    @Override
    public Consult convertToEntity(ConsultDto dto) {
        return null;
    }
}

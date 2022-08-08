package ro.sda.java37.finalProject.services;

import org.springframework.beans.factory.annotation.Autowired;
import ro.sda.java37.finalProject.dto.ConsultDto;
import ro.sda.java37.finalProject.entities.Consult;
import ro.sda.java37.finalProject.repository.ConsultRepository;
import ro.sda.java37.finalProject.repository.PetRepository;

public class ConsultMapper implements Mapper <Consult, ConsultDto>{

    @Autowired
    ConsultRepository consultRepository;

    @Autowired
    ConsultMapper consultMapper;

    @Autowired
    PetMapper petMapper;

    @Autowired
    PetRepository petRepository;

    @Autowired
    VeterinarianMapper veterinarianMapper;

    @Override
    public ConsultDto convertToDto(Consult consult) {
        ConsultDto consultDto= new ConsultDto();
        consultDto.setId(consult.getId());
        consultDto.setDate(consult.getDate());
        consultDto.setDescription(consult.getDescription());
        consultDto.setPrice(consult.getPrice());
        if(consult.getPet().getId() != null){
            consultDto.setPet(petMapper.convertToDto(consult.getPet()));
            consultDto.setId(consult.getPet().getId());
        }
return consultDto;

    }

    @Override
    public Consult convertToEntity(ConsultDto dto) {
        return null;
    }
}

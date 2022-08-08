package ro.sda.java37.finalProject.dto;

import lombok.Data;
import ro.sda.java37.finalProject.entities.Consult;

import java.time.LocalDate;
import java.util.List;

@Data
public class PetDto {
    private Long id;
    private String name;
    private String race;
    private LocalDate dateOfBirth;
    private Float kilos;
    private Boolean isVaccinated;
    private ClientDto owner;
    private Long ownerId;
    private List<Consult> consults;
}

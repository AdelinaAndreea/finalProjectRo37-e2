package ro.sda.java37.finalProject.dto;

import lombok.Data;
import ro.sda.java37.finalProject.entities.Pet;
import ro.sda.java37.finalProject.entities.Veterinarian;

import javax.validation.constraints.Email;
import java.time.LocalDate;
import java.util.Date;

@Data
public class ConsultDto {

        private Long id;
        private LocalDate date;
        private String description;
        private Veterinarian veterinarian;
        private Pet pet;
        private Float price;

}

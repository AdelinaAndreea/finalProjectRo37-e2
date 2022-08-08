package ro.sda.java37.finalProject.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Consult {

    @Id
    @GeneratedValue
    private Long id;
    private Date date;
    private String description;
    @ManyToOne
    @JoinColumn(name = "vet_id")
    private Veterinarian veterinarian;

    @ManyToOne
    @JoinColumn(name = "pet_id")
    private Pet pet;
    private Float price;

}

package ro.sda.java37.finalProject.entities;

import java.math.BigDecimal;
import java.util.Date;

public class Consult {

    private Long id;
    private Date date;
    private String description;
    private Veterinarian veterinarian;
    private Pet pet;
    private BigDecimal price;

}

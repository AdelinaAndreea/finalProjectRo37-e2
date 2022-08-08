package ro.sda.java37.finalProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.sda.java37.finalProject.entities.Book;
//import ro.sda.javaremote37.springseed.entities.Book;

public interface BookRepository extends JpaRepository<Book,Long> {

}

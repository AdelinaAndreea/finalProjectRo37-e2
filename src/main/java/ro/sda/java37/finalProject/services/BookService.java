package ro.sda.java37.finalProject.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ro.sda.java37.finalProject.dto.BookDto;
import ro.sda.java37.finalProject.entities.Book;
import ro.sda.java37.finalProject.repository.BookRepository;
//import ro.sda.javaremote37.springseed.dto.BookDto;
//import ro.sda.javaremote37.springseed.entities.Book;
//import ro.sda.javaremote37.springseed.repository.BookRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class BookService {

    private BookRepository bookRepository;
    private BookMapper bookMapper;

    public List<BookDto> getAll() {
       return bookRepository.findAll().stream().map(e->bookMapper.convertToDto(e)).collect(Collectors.toList());
    }

    public BookDto createBook(BookDto bookDto) {
        Book entity = bookMapper.convertToEntity(bookDto);
        entity= bookRepository.save(entity);
        BookDto result = bookMapper.convertToDto(entity);
        return result;
    }
}

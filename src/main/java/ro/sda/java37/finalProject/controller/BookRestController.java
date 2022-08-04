package ro.sda.java37.finalProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ro.sda.javaremote37.springseed.dto.BookDto;
import ro.sda.javaremote37.springseed.services.BookService;

import java.util.List;

@RestController
@RequestMapping("/api/book")
public class BookRestController {

    @Autowired
    private BookService bookService;
    @GetMapping
    public List<BookDto> getAllBooks(){
        return bookService.getAll();

    }

    @PostMapping
    public BookDto createBook(@RequestBody BookDto bookDto){
        return bookService.createBook(bookDto);
    }
}

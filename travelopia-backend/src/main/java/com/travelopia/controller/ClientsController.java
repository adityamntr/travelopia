package com.travelopia.controller;

import com.travelopia.model.Client;
import com.travelopia.config.ClientRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;


@RestController
@RequestMapping("/clients")
public class ClientsController {

    private final ClientRepository clientRepository;

    public ClientsController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @GetMapping()
    public List<Client> getClients() {
        return clientRepository.findAll();
    }

    @PostMapping("/clients/add")
    public ResponseEntity createClient(@RequestBody Client client) throws URISyntaxException {
        Client savedClient = clientRepository.save(client);
        return ResponseEntity.created(new URI("/clients/add/" + savedClient.getId())).body(savedClient);
    }
}

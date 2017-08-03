package br.com.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.demo.dao.DemoDAO;
import br.com.demo.model.Demo;
import br.com.demo.repository.DemoRepository;

@Service
public class DemoService {
	
	@Autowired
	DemoRepository repository;
	
	@Autowired
	DemoDAO dao;

	public String sayHello() {
		return "Hello darkness my old friend, I've come to talk with you again";
	}

	public Demo save(Demo demo) {
		return repository.save(demo);
	}

	public List<Demo> findDemos() {
		return dao.findAll();
	}

	
}

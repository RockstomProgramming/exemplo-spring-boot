package br.com.demo.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import br.com.demo.model.Demo;

public interface DemoRepository extends CrudRepository<Demo, Long> {
	
	List<Demo> findAll();
}

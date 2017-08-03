package br.com.demo.dao;

import org.springframework.stereotype.Component;

import br.com.demo.model.Demo;

@Component
public class DemoDAO extends DefaultDAO<Demo> {

	public DemoDAO() {
		super(Demo.class);
	}

}

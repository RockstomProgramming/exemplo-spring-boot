package br.com.demo.controller;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.demo.model.Demo;
import br.com.demo.service.DemoService;

@RestController()
@RequestMapping("/demo")
public class DemoController {
	
	@Autowired
	DemoService service;

	@RequestMapping(method = GET, produces = APPLICATION_JSON)
	public List<Demo> findDemos() {
		return service.findDemos(); 
	}
	
	@RequestMapping(method = POST, produces = APPLICATION_JSON)
	public Demo addDemo(@RequestBody Demo demo) {
		return service.save(demo);
	}
}

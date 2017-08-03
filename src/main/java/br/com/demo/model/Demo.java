package br.com.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Demo {

	@Id
	@GeneratedValue
	private Long id;
	private String description;
}

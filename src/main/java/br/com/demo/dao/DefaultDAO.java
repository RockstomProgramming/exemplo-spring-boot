package br.com.demo.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;

public class DefaultDAO<T> {

	@PersistenceContext
	private EntityManager manager;
	
	private Class<T> entity;
	
	public DefaultDAO(Class<T> entity) {
		this.entity = entity;
	}
	
	public List<T> findAll() {
		CriteriaBuilder builder = manager.getCriteriaBuilder();
		CriteriaQuery<T> query = (CriteriaQuery<T>) builder.createQuery(entity);
		query.from(entity);
		
		return manager.createQuery(query).getResultList();
	}
}

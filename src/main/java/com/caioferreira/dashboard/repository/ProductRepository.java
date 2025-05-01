package com.caioferreira.dashboard.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.caioferreira.dashboard.entities.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {

}

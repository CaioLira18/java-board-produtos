package com.caioferreira.dashboard.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.caioferreira.dashboard.entities.Product;
import com.caioferreira.dashboard.repository.ProductRepository;
import com.caioferreira.dashboard.services.exceptions.ResourceNotFoundException;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public List<Product> findAll() {
        return repository.findAll();
    }

    public Product findById(String id) {
        Optional<Product> obj = repository.findById(id);
        return obj.orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
    }

    public Product insert(Product obj) {
        return repository.save(obj);
    }

    public void delete(String id) {
        findById(id); // Check if exists
        repository.deleteById(id);
    }

    public Product update(Product obj) {
        Product existingProduct = findById(obj.getId());
        updateData(existingProduct, obj);
        return repository.save(existingProduct);
    }

    private void updateData(Product existingProduct, Product newProduct) {
        existingProduct.setName(newProduct.getName());
        existingProduct.setStock(newProduct.getStock());
        existingProduct.setPrice(newProduct.getPrice());
    }
}
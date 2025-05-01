import { useEffect, useState, ChangeEvent } from 'react';
import './App.css';
import Formulario from './components/Formulario';
import Tabela from './components/Tabela';

interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
}

function App() {
  // Initial product object
  const product: Product = {
    id: '',
    name: '',
    stock: 0,
    price: 0.0
  };

  // UseStates
  const [btnCadastrar, setBtnCadastrar] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [objProduct, setObjProduct] = useState<Product>(product);

  // Function to load products from backend
  const loadProducts = () => {
    fetch("http://localhost:8080/products")
      .then(response => response.json())
      .then((convertedResponse: Product[]) => setProducts(convertedResponse))
      .catch(error => {
        console.error("Error loading products:", error);
        alert("Erro ao carregar produtos: " + error);
      });
  };

  // UseEffect to load products on initialization
  useEffect(() => {
    loadProducts();
  }, []);

  // Getting data from the Form
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.name === 'stock' || e.target.name === 'price' 
      ? Number(e.target.value)
      : e.target.value;
    
    setObjProduct({ ...objProduct, [e.target.name]: value });
  };

  // Create Product
  const createProduct = () => {
    fetch("http://localhost:8080/products", {
      method: 'POST',
      body: JSON.stringify(objProduct),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((convertedResponse: Product) => {
        alert("Produto cadastrado com sucesso");
        clearForm();
        loadProducts();
      })
      .catch(error => {
        console.error("Error creating product:", error);
        alert("Erro ao cadastrar produto: " + error);
      });
  };

  // Update Product
  const updateProduct = () => {
    fetch(`http://localhost:8080/products/${objProduct.id}`, {
      method: 'PUT',
      body: JSON.stringify(objProduct),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((convertedResponse: Product) => {
        alert("Produto alterado com sucesso");
        clearForm();
        loadProducts();
      })
      .catch(error => {
        console.error("Error updating product:", error);
        alert("Erro ao alterar produto: " + error);
      });
  };

  // Delete Product
  const deleteProduct = () => {
    fetch(`http://localhost:8080/products/${objProduct.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert("Produto removido com sucesso");
        clearForm();
        loadProducts();
      })
      .catch(error => {
        console.error("Error deleting product:", error);
        alert("Erro ao remover produto: " + error);
      });
  };

  // Clear Form
  const clearForm = () => {
    setObjProduct(product);
    setBtnCadastrar(true);
  };

  // Select Product for editing
  const selectProduct = (index: number) => {
    setObjProduct(products[index]);
    setBtnCadastrar(false);
  };

  return (
    <div>
      <Formulario
        botao={btnCadastrar}
        eventoTeclado={handleInputChange}
        cadastrar={createProduct}
        obj={objProduct}
        cancelar={clearForm}
        remover={deleteProduct}
        alterar={updateProduct}
      />
      <Tabela vetor={products} selecionar={selectProduct} />
    </div>
  );
}

export default App;
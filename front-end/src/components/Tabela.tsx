import React from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface TabelaProps {
  vetor: Product[];
  selecionar: (indice: number) => void;
}

const Tabela: React.FC<TabelaProps> = ({ vetor, selecionar }) => {
  // Function to format the price as currency
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Lista de Produtos</h3>
      {vetor.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Estoque</th>
                <th scope="col">Preço</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {vetor.map((obj, indice) => (
                <tr key={obj.id || indice}>
                  <td>{indice + 1}</td>
                  <td>{obj.name}</td>
                  <td>{obj.stock}</td>
                  <td>{formatPrice(obj.price)}</td>
                  <td>
                    <button 
                      onClick={() => selecionar(indice)} 
                      className="btn btn-primary btn-sm"
                    >
                      Selecionar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          Nenhum produto cadastrado. Use o formulário acima para adicionar produtos.
        </div>
      )}
    </div>
  );
};

export default Tabela;
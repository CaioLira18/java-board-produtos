import React from "react";

interface FormularioProps {
  botao: boolean;
  eventoTeclado: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  cadastrar: () => void;
  obj: {
    name: string;
    price: number;
    stock: number;
  };
  cancelar: () => void;
  remover: () => void;
  alterar: () => void;
}

const Formulario: React.FC<FormularioProps> = ({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Gerenciamento de Produtos</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nome</label>
          <input 
            type="text" 
            id="name"
            value={obj.name} 
            onChange={eventoTeclado} 
            name="name" 
            placeholder="Nome do produto" 
            className="form-control" 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">Estoque</label>
          <input 
            type="number" 
            id="stock"
            value={obj.stock} 
            onChange={eventoTeclado} 
            name="stock" 
            placeholder="Quantidade em estoque" 
            className="form-control" 
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Preço</label>
          <input 
            type="number" 
            id="price"
            step="0.01"
            value={obj.price} 
            onChange={eventoTeclado} 
            name="price" 
            placeholder="Preço do produto" 
            className="form-control" 
          />
        </div>
        
        <div>
          {botao ? (
            <button type="button" onClick={cadastrar} className="btn btn-primary">
              Cadastrar
            </button>
          ) : (
            <>
              <button type="button" onClick={alterar} className="btn btn-warning me-md-2">
                Alterar
              </button>
              <button type="button" onClick={remover} className="btn btn-danger me-md-2">
                Remover
              </button>
              <button type="button" onClick={cancelar} className="btn btn-secondary">
                Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
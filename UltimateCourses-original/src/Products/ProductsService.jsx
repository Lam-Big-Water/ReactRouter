export const listProducts = async () => {
    const response = await fetch(`http://localhost:8000/products`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Something went wrong');
  };
  
  export const createProduct = async (payload) => {
    const response = await fetch(`http://localhost:8000/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Something went wrong');
  };
  
  export const retrieveProduct = async (id) => {
    const response = await fetch(`http://localhost:8000/products/${id}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Something went wrong');
  };
  
  export const updateProduct = async (payload) => {
    const response = await fetch(`http://localhost:8000/products/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Something went wrong');
  };
  
  export const deleteProduct = async (id) => {
    const response = fetch(`http://localhost:8000/products/${id}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      return await response.json();
    }
    throw new Error('Something went wrong');
  };
  
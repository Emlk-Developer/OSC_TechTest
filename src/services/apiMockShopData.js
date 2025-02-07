const API_URL = 'https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}';


export const getData = async () => {
    /* wrap api request in a try catch if url is incorect or cannot be reached 
    the catch will retun the error message*/
    try {
        const request = await fetch(API_URL);
        const response = await request.json();

        if (!request.ok) throw Error();
        return response.data.products.edges;
      } catch {
        throw Error('Your data could not be found');
      }  
}

export const getAProduct = async (productId) => {
  const productData = `https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/${productId}%22){id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%201){edges%20{node%20{price%20{amount%20currencyCode}}}}}}`
  try {
      const request = await fetch(productData);
      const response = await request.json();

      if (!request.ok) throw Error();
      return response.data.product;
    } catch {
      throw Error('Your data could not be found');
    }  
}

export const postToCart = async (quantity, id) => {
  const body = {
    query: `mutation CartCreate {
      cartCreate(
        input: {
          lines: [
            {
              quantity: ${quantity}
              merchandiseId: "gid://shopify/ProductVariant/${id}"
            }
          ]
        }
      ) {
        cart {
          id
          createdAt
          updatedAt
          cost {
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
          }
        }
      }
    }`
  };
  try {
    const request = await fetch('https://mock.shop/api', {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json"
      },
    });
    const response = await request.json();

      if (!request.ok) throw Error();
      return response.data;
    } catch {
      throw Error('Your data could not be found');
    }  
}
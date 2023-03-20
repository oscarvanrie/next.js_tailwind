export default async function fetchProducts() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 28|oB1j8DTMYwvf6dmEQpv94E3GxlLxfF1XEc14f4Q0");
      
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
      
    const response = await fetch("http://192.168.10.208/api/products", requestOptions);
    const data = await response.json();
    return data;
}
  
  

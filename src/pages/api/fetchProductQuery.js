export default async function fetchProductQuery(query) {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 28|oB1j8DTMYwvf6dmEQpv94E3GxlLxfF1XEc14f4Q0");
      
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    var url = "http://192.168.10.208/api/products?filter[name]=" + query;
      
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    
    return data;
}
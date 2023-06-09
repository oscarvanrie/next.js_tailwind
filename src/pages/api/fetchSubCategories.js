

export default async function fetchSubCategories() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 28|oB1j8DTMYwvf6dmEQpv94E3GxlLxfF1XEc14f4Q0");
      
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
      
    const response = await fetch("http://192.168.10.208/api/categories?include=subcategories", requestOptions);
    const data = await response.json();
    console.log(data.data);
    return data;
}
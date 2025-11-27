let id = window.location.search.slice(4)
let container = document.querySelector(".card-container")
console.log(container)
console.log(id) 
async function getData(){
  let res= await axios.get(`https://northwind.vercel.app/api/suppliers/${id}`)
  let e = res.data
  console.log(e)
  container.innerHTML = `<div class="card-col">
        <div class="card">
            <div>${e.companyName}</div>
            <div class="card-title">Contact title: ${e.contactTitle}</div>
            <div class="card-address">
                <div class="address-street">Street: ${e.address.street}</div>
                <div class="address-code">Postal code: ${e.address.postalCode}</div>
                <div class="address-country">Country: ${e.address.country}</div>
                <div class="address-phone">Phone: ${e.address.phone}</div>
            </div>
        </div>
    </div>`
}
getData()
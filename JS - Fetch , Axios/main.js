let container = document.querySelector(".card-container")
async function GetDatas() {
    let datas = await axios.get("https://northwind.vercel.app/api/suppliers")
    let suppliers = datas.data
    suppliers.forEach(e => {
        container.innerHTML += `<div class="card-col">
        <div class="card">
            <div class="card-id">${e.id}</div>
            <div class="card-name">${e.companyName}</div>
            <div class="card-contact">${e.contactName}</div>
            <div class="card-title">${e.contactTitle}</div>
            <div class="card-address">
                <div class="address-street">${e.address.street}</div>
                <div class="address-city">${e.address.city}</div>
                <div class="address-region">${e.address.region}</div>
                <div class="address-code">${e.address.postalCode}</div>
                <div class="address-country">${e.address.country}</div>
                <div class="address-phone">${e.address.phone}</div>
            </div>
            <a href="details.html?id=${e.id}" class="details">Details</a>
            <button class="btn" data-id=${e.id}>Delete</button>
        </div>
    </div>`
    });
    let dltbtn = document.querySelectorAll(".btn")
dltbtn.forEach(b => {
    b.addEventListener("click", async () => {
        let id = b.getAttribute("data-id")
        await axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`)
        b.closest(".card").remove()
    })
})
}
GetDatas()

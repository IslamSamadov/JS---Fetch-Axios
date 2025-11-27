let container = document.querySelector(".card-container")
let list = document.querySelector(".list")
let home = document.querySelector(".home")
let main = document.querySelector("main")
let mainText = document.querySelector(".main-text")
let inpp = document.querySelector(".inp")
let form = document.querySelector(".form")
let companyName = document.querySelector("#name")
let ititle = document.querySelector("#title")
let icountry = document.querySelector("#country")
let iphone = document.querySelector("#phone")
let icode = document.querySelector("#code")
home.addEventListener("click", () => {
    container.style.display = "none"
    mainText.style.display = "block"
    form.style.display = "none"
})
inpp.addEventListener("click", () => {
    container.style.display = "none"
    form.style.display = "flex"
    mainText.style.display = "none"
})
list.addEventListener("click", () => {
    mainText.style.display = "none"
    container.style.display = "flex"
    form.style.display = "none"
    GetDatas()
})
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
        </div>
    </div>`
    });
}
GetDatas()
// form.addEventListener("submit", async (e) => {
//     e.preventDefault()
//     let newSupplier = {
//         companyName:companyName.value,
//         contactTitle:ititle.value,
//         address:{country:icountry.value},
//         address:{phone:iphone.value},
//         address:{postalCode:icode.value}
//     }
//     await axios.post("https://northwind.vercel.app/api/suppliers", newSupplier)
//     companyName.value = ""
//     title.value = ""
//     country.value = ""
//     phone.value = ""
//     code.value = ""
//     GetDatas()
// })

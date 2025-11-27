let form = document.querySelector(".form")
let companyName = document.querySelector("#name")
let ititle = document.querySelector("#title")
let icountry = document.querySelector("#country")
let iphone = document.querySelector("#phone")
let icode = document.querySelector("#code")
form.addEventListener("submit", async (e) => {
    e.preventDefault()
    let newSupplier = {
        companyName:companyName.value,
        contactTitle:ititle.value,
        address:{country:icountry.value},
        address:{phone:iphone.value},
        address:{postalCode:icode.value}
    }
    await axios.post("https://northwind.vercel.app/api/suppliers", newSupplier)
    companyName.value = ""
    title.value = ""
    country.value = ""
    phone.value = ""
    code.value = ""
})

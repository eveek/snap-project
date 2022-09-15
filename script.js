const featuresArrowUp = document.querySelector(".features_arrow_up")
const featuresArrowDown = document.querySelector(".features_arrow_down")
const companyArrowUp = document.querySelector(".company_arrow_up")
const companyArrowDown = document.querySelector(".company_arrow_down")

const features = document.getElementById("f-drop")
const company = document.getElementById("c-drop")

const featuresDrop = document.querySelector(".sub1")
const companyDrop = document.querySelector(".sub2")

const sideBar = document.getElementById("reveal")
const cover = document.getElementById("cover")


features.addEventListener('change', () => {
    if(features.checked){
        featuresArrowUp.style.display = "inline-block"
        featuresArrowDown.style.display = "none"
        featuresDrop.style.display = "block"
    }else{
        featuresArrowUp.style.display = "none"
        featuresArrowDown.style.display = "inline-block"
        featuresDrop.style.display = "none"
    }
})

company.addEventListener('change', () => {
    if(company.checked){
        companyArrowUp.style.display = "inline-block"
        companyArrowDown.style.display = "none"
        companyDrop.style.display = "block"
    }else{
        companyArrowUp.style.display = "none"
        companyArrowDown.style.display = "inline-block"
        companyDrop.style.display = "none"
    }
})


sideBar.addEventListener('change', () => {
    if (sideBar.checked){
        cover.style.display = "block"
    }else {
        cover.style.display = "none"
    }
})




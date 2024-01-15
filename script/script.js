"use strict";
const customer = {
    "Customer name": [
        "Jane Cooper",
        "Floyd Miles",
        "Ronald Richards",
        "Marvin McKinney",
        "Jerome Bell",
        "Kathryn Murphy",
        "Jacob Jones",
        "Kristin Watson",
    ],
    Company: [
        "Microsoft",
        "Yahoo",
        "Adobe",
        "Tesla",
        "Google",
        "Microsoft",
        "Yahoo",
        "Facebook",
    ],
    "Phone Number": [
        "(225) 555-0118",
        "(205) 555-0100",
        "(302) 555-0107",
        "(252) 555-0126",
        "(629) 555-0129",
        "(406) 555-0120",
        "(208) 555-0112",
        "(704) 555-0127",
    ],
    Email: [
        "jane@microsoft.com",
        "floyd@yahoo.com",
        "ronald@adobe.com",
        "marvin@tesla.com",
        "jerome@google.com",
        "kathryn@microsoft.com",
        "jacob@yahoo.com",
        "kristin@facebook.com",
    ],
    Country: [
        "United States",
        "Kiribati",
        "Israel",
        "Iran",
        "Réunion",
        "Curaçao",
        "Brazil",
        "Åland Islands",
    ],
    Status: [
        "Active",
        "Inactive",
        "Inactive",
        "Active",
        "Active",
        "Active",
        "Active",
        "Inactive",
    ],
};
const table = document.querySelector("#table");
const tr = document.createElement("tr");
Object.keys(customer).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    tr.append(th);
});
table.append(tr);
const maxLength = Math.max(...Object.values(customer).map((arr) => arr.length));
for (let i = 0; i < maxLength; i++) {
    const tr = table.insertRow();
    Object.values(customer).forEach((values) => {
        const td = tr.insertCell();
        td.innerHTML = `<p>${values[i] || ""}</p>`;
        if (td.textContent === "Active") {
            td.classList.add("active");
        }
        if (td.textContent === "Inactive") {
            td.classList.add("inactive");
        }
    });
}
const paginationActive = (block) => {
    const li = document.querySelectorAll(block);
    const paginationText = document.querySelector(".pagination-show");
    li.forEach((item) => {
        item.addEventListener("click", (event) => {
            const target = event.target;
            if (target.classList.contains("pagination-count__number")) {
                paginationText.textContent = `Showing data ${target.textContent} to 8 of 256K entries`;
            }
            li.forEach((liItem) => {
                liItem.classList.remove("pagination-active");
            });
            if (item.classList) {
                item.classList.add("pagination-active");
            }
            document.querySelector(".nav").classList.remove("open");
            document.querySelector(".burger").classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        });
    });
};
paginationActive(".pagination-count__number");
paginationActive(".sidebar-list__item");
document
    .querySelector(".burger")
    .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector("body").style.overflow = "auto";
    const burgerOpen = document.querySelector(".nav");
    burgerOpen.classList.toggle("open");
    if (burgerOpen.classList.contains("open")) {
        document.querySelector("body").style.overflow = "hidden";
    }
});
//# sourceMappingURL=script.js.map
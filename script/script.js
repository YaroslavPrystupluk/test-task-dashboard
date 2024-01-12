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
//# sourceMappingURL=script.js.map
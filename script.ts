const customer: {
		"Customer name": string[];
		Company: string[];
		"Phone Number": string[];
		Email: string[];
		Country: string[];
		Status: string[];
} = {
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


const table = document.querySelector( "#table" ) as HTMLTableElement;
const tr = document.createElement( "tr" ) as HTMLElement;
Object.keys( customer ).forEach( ( key: string ) => {

		const th = document.createElement( "th" ) as HTMLElement;
		th.textContent = key;
		tr.append( th );
} );
table.append( tr );

const maxLength = Math.max( ...Object.values( customer ).map( ( arr: string[] ): number => arr.length ) );

for ( let i = 0; i < maxLength; i++ ) {
		const tr = table.insertRow() as HTMLTableRowElement;

		Object.values( customer ).forEach( ( values: string[] ) => {
				const td = tr.insertCell() as HTMLTableCellElement;
				td.innerHTML = `<p>${ values[i] || "" }</p>`;
				if ( td.textContent === "Active" ) {
						td.classList.add( "active" );
				}
				if ( td.textContent === "Inactive" ) {
						td.classList.add( "inactive" );
				}
		} );
}

const paginationActive = (): void => {
		const li = document.querySelectorAll( ".pagination-count__number" ) as NodeList;
		const paginationText = document.querySelector(".pagination-show") as HTMLElement
		li.forEach( ( item: Node ): void => {
				item.addEventListener( "click", ( event: Event ): void => {
						const target = event.target as HTMLElement;
						paginationText.textContent = `Showing data ${target.textContent} to 8 of 256K entries`

						li.forEach( ( liItem: Node ) => {
								( liItem as HTMLElement ).classList.remove( "pagination-active" );
						} );

						target.classList.add( "pagination-active" );
				} );

		} );
};

paginationActive();

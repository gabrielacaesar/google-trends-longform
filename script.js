/////// template content from google sheets

// ur api key created on google cloud: https://console.cloud.google.com/apis/credentials
const API_KEY = 'AIzaSyB2FlJwoNn1JKC8hTUkrUY2jGSGYHfNaVY'

// id of ur google spreadsheet: https://docs.google.com/spreadsheets/d/{GET THIS CODE HERE}
const sheets_id = '1fBAOt4iYZa5ocuMGWWurktphsGQW9HgFV997QGqQsms'

// name of ur worksheet
// quickstart; default content - https://developers.google.com/sheets/api/quickstart/js
const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4']

// template structure
let index = {
    spreadsheetId : sheets_id, // get ur sheets id added above
    range : 'index' // get the name of ur worksheet added above
}

// quickstart - https://developers.google.com/sheets/api/quickstart/js
function gapiLoaded() {
    gapi.load( 'client', intializeGapiClient ) // default content
}

// quickstart - https://developers.google.com/sheets/api/quickstart/js
async function intializeGapiClient() {
    await gapi.client.init( {
        apiKey: API_KEY, // get ur api key added above
        discoveryDocs: DISCOVERY_DOCS, // default content
    } );

    // post blog
    gapi.client.sheets.spreadsheets.values.get( index ) // get the variable created above
            .then( response => display_index( response.result.values )) // get the values of the worksheet
}

function display_index(template_index){
    const post = document.querySelector('.page-index')
	template_index.shift()
    let post_content = ""
    for ( let item of template_index ) { // get each row
        
        const month_color = item[0]
        const month_id = item[1]
        const month_string = item[2]
		const topic = item[3]
		console.log(topic)
        const permalink = item[4]
		const display = item[5]
        
		if (display == 'yes'){
			post_content +=
		`
		<!-- index -->
		<section class="container index">
			
			<div class="row-${month_id} flex column">
				<a href="/monthly/year-2024.html#${permalink}" class="permalink-link" target="_blank" data-anchor="${permalink}">
					<div class="row-a flex row light-gray">
						<div class="column-a row ${month_color}">#${month_id}</div>
						<div class="column-b row">${month_string}</div>
						<div class="column-c row">${topic}</div>
					</div>
				</a>
			</div>

		</section>
			`
		}
	}
    post.innerHTML = post_content // add this html to section .page-index
	
}

function openAnchorInNewWindow() {
    const isPermalink = this.classList.contains("permalink-link") || this.dataset.isPermalink === "true";
    if (isPermalink) {
        const anchor = this.dataset.anchor;
		console.log(anchor)
        const section = document.querySelector(`"[data-anchor='${anchor}']"`);
		console.log(section)
        section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    } else {
        // Handle regular link logic (e.g., navigate to anchor within the page)
		console.error("Element not found:", anchor);
    }
}

const links = document.querySelectorAll("a.permalink-link");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Get the parent anchor element
    const parentAnchor = event.target.closest("a.permalink-link");

    // Open a new window with the parent anchor's href
    window.open(parentAnchor.href, "_blank");
  });
});
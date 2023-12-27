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
	console.log(post)
	template_index.shift()
    let post_content = ""
    for ( let item of template_index ) { // get each row
        
        const month_color = item[0]
        const month_integer = item[1]
        const month_string = item[2]
		const topic = item[3]
		console.log(topic)
		console.log(post_content)
        const permalink = item[4]
		const display = item[5]
        
		if (display == 'yes'){
			post_content +=
			`
		<!-- index -->
		<section class="container index">
			
			<div class="row-${month_integer} flex column">
				<a href="year-2024.html#${permalink}">
					<div class="row-a flex row light-gray">
						<div class="column-a row ${month_color}">#${month_integer}</div>
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

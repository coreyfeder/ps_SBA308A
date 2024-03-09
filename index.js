// const fs = require("fs");

const api_protocol = "https"
const api_host = "api.pexels.com"
const api_endpoint = "v1/search"
const api_port = ""

const api_url = `${api_protocol}://${api_host}${(api_port) ? ":"+apiport : ""}/${api_endpoint}`

const url = (page=pagenum || 1, per_page=images_per_page || 3) => {

}

let page = 1
let per_page = 3

// -H "Authorization: $YOUR_API_KEY" 
// "https://api.pexels.com/v1/collections/clyoggb?page=1&per-page=3" 
// "https://api.pexels.com/v1/collections/clyoggb?page=1&per_page=3"

"https://api.pexels.com/v1/search?query=ferret&page=1&per_page=3"
/* 
{protocol=https}
://
{host=api.pexels.com}
/v1/collections/
{collection=clyoggb}
/?page=
{page}
&per_page=
{per_page}
 */


let apikey = 'OmSbPGDLr7S0nM4ym7slxHFdTKRWamIvxVVZiQoZnDeier1JOc9n4M9y'

<a href="https://www.pexels.com">Photos provided by Pexels</a>

<!-- or show our white logo -->

<a href="https://www.pexels.com">
  <img src="https://images.pexels.com/lib/api/pexels-white.png" />
</a>

<!-- or show our black logo -->

<a href="https://www.pexels.com">
  <img src="https://images.pexels.com/lib/api/pexels.png" />
</a>

// 
Weezils provided by <a href="https://www.pexels.com">Pexels</a>.


GET, POST, PUT, PATCH

response payload

payload.keys = [ 'page', 'per_page', 'media', 'total_results', 'next_page', 'id' ]

for (let k of Object.keys(payload)) { if (k != 'media') { console.log(`${k}: ${payload[k]}`) } }
> page: 1
> per_page: 3
> total_results: 33
> next_page: https://api.pexels.com/v1/collections/clyoggb/?page=2&per_page=3
> id: clyoggb
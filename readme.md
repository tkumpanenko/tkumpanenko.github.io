## career list scrapper
---

##### Installation 
Scrapper requires some list of dependencies. Don't forget to install it before usage. Run following command in terminal in current directory ```npm i```. 

##### Usage
```npm run jobs:fetch``` Done!
By default data will be saved into ```./data/career.yaml``` file, but you can easy modify 


Fill free to modify current script  `_extensions/fetch_carier_data.js`

```
var config = {
  // targetPage
  scrapUrl: "https://careerseurope.danielwellington.com/jobs?department_id=21328&location_id=",
  
  // prefix for jobs url
  baseUrlForJobs: "https://careerseurope.danielwellington.com/",

  //destination file
  dataFilePath: "./data/career.yaml",

  //sector to find proper data
  selector: ".jobs-section .jobs-section-inner .jobs li"
}
```

/**
 * Appends the provided HTML to the node with the id contentId
 */
export function renderHtml(template, contentId) {
  const content = document.getElementById(contentId)
  if (!content) {
    throw Error("No Element found for provided content id")
  }
  content.innerHTML = ""
  content.append(template)
}

/**
 * Loads an external file with an div with the class "template", adds it to the body of your page, and returns the div
 */
export async function loadHtml(page) {
  const resHtml = await fetch(page).then(r => {
   if (!r.ok) {
     throw new Error(`Failed to load the page: '${page}' `)
   }
   return r.text()
 });
 const parser = new DOMParser()
 const content = parser.parseFromString(resHtml, "text/html")
 const div = content.querySelector(".template")
 if (!div) {
   throw new Error(`No outer div with class 'template' found in file '${page}'`)
 }
 return div
}


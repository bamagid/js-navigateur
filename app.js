async function main() {
    const lis =document.querySelectorAll('li')
    lis.forEach(v=>console.log(v))
    const newdiv = document.createElement('div')
    newdiv.innerHTML="Une premiere div creer par du js sans directement toucher a du html"
    newdiv.style.marginTop="50px"
    document
    .querySelector('div')
    .append(newdiv)
    const div = document.querySelector('#first-phrase')
    console.log(div.style.marginBottom="50px");
    const wrapper = document.querySelector('#last-posts')
    const loader = document.createElement('p')
    loader.innerHTML = "En cours de chargement....."
    loader.style.padding ="10px"
    loader.style.backgroundColor ="blue"
    loader.style.color ="white"
    wrapper.append(loader)
    try {
       const response= await fetch('https://jsonplaceholder.typicode.com/posts?limit=5',{
         headers:{
             Accept : 'application/json'
         }
        })
        if (!response.ok) {
         throw new Error('Server Error')
        }
    const posts= await response.json()
    loader.remove()
    for (let post of posts){
        wrapper.append(createPosts(post))
    }
   } catch (error) {
    loader.innerHTML='Impossible de charger les données'
    loader.style.color='red'
    loader.style.backgroundColor='white'
   }
}
main()
/**
 * Cette fonction nous permet de creer un element avec les données de l'api en fournissant deux parametres 
 * @param {{tagName : string}} tagName 
 * @param {{content : string}} content 
 * @return {HTMLElement}
 */

function createElementWithText(tagName,content) {
    const element = document.createElement(tagName)
    element.innerHTML=content
    return element
}

/**
 * Creer un article qu'on va injecter dans la div last-posts
 * @param {{title: string ,body:string}} post
 * @return {HTMLElement}
 */
function createPosts(post) {
    const arcticle = document.createElement('article')
  arcticle.append(createElementWithText('h2',post.title))
  arcticle.append(createElementWithText('p',post.body))
    return arcticle
}
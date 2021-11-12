export function getPost(id:number) {
  return fetch(`https://dev.to/api/articles/${id}`)
}

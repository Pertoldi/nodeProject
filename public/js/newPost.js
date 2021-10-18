

const btn = window.document.getElementById('newPostBtn')

btn.addEventListener('clic', () => {
	const title = window.document.getElementsByTagName('input')[0]
	console.log('title is :', title)
	const body = window.document.getElementsByTagName('input')[1]
	
	console.log('title.value is :', title.value)

	fetch('localhost:3000/newPost', {method: 'POST', body: {title: title.value, body: body.value}})
})

// fetch('localhost:3000/post/new', {title: title.value, })
fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 'Textual content'})
  });
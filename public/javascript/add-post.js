const cloudinary = require('cloudinary').v2;

function addPostHandler(event) {
  event.preventDefault();

  const description = document.querySelector('input[id="post-description"]').value;
  const image = document.querySelector('input[id="post-filename"]').value;
  const blog_body = document.querySelector('input[id="post-blog-body"]').value;
  const title = document.querySelector('input[id="post-title"]').value;

  cloudinary.uploader.upload(image)
    .then(result => {
      const filename = (result.url)

      fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          description,
          filename,
          blog_body,
          title
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          document.location.reload('dashboard');
        } else {
          alert(response.statusText);
        }
      })
    })
    .catch(error => { console.log(error) });

}

document.querySelector('.blog-form').addEventListener('submit', addPostHandler);

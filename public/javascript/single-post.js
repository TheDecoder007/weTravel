
async function getPostHandler(event) {
    event.preventDefault();
  
    const description = document.querySelector('input[name="post-description"]').value();
    const filename = document.querySelector('input[name="post-filename"]').value();
    const blog_body = document.querySelector('input[name="post-blog_body"]').value();
    const title = document.querySelector('input[name="post-title"]').value();

    
    const response = await fetch('/api/posts/:id', {
          method: 'get',
          body: JSON.stringify({
            description,
            filename,
            blog_body,
            title
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload('single-post');
        } else {
          alert(response.statusText);
        }
      }








  document.querySelector('.cardBtn').addEventListener('click', getPostHandler);
async function addPostHandler(event) {
  event.preventDefault();

  const description = document.querySelector('input[id="post-description"]').value;
  const filename = document.querySelector('input[id="post-filename"]').value;
  const blog_body = document.querySelector('input[id="post-blog_body"]').value;
  const title = document.querySelector('input[id="post-title"]').value;


  const response = await fetch('/api/posts', {
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
  });

  if (response.ok) {
    document.location.reload('dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#create-post').addEventListener('click', addPostHandler);

document.querySelector('#test').addEventListener('click', function(){
  console.log("WORKED")
});

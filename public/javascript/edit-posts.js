async function editFormHandler(event) {
  event.preventDefault();


  const description = document.querySelector('input[id="post-description"]').value.trim();

  const blog_body = document.querySelector('input[id="post-blog-body"]').value.trim();
  const title = document.querySelector('input[id="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
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
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);

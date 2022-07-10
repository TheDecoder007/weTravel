function showUploadWidget() {
  cloudinary.openUploadWidget({
     cloudName: "dfe8l6xnx",
     uploadPreset: "wetravel",
     sources: [
         "local",
         "url",
         "instagram"
     ],
     cropping: true,
     multiple: false,
     defaultSource: "local",
     styles: {
         palette: {
             window: "#FFFFFF",
             windowBorder: "#90A0B3",
             tabIcon: "#0078FF",
             menuIcons: "#5A616A",
             textDark: "#000000",
             textLight: "#FFFFFF",
             link: "#0078FF",
             action: "#FF620C",
             inactiveTabIcon: "#0E2F5A",
             error: "#F44235",
             inProgress: "#0078FF",
             complete: "#20B832",
             sourceBg: "#E4EBF1"
         },
         fonts: {
             default: {
                 active: true
             }
         }
     }
 },

 (error, result) => {
  
  if (!error && result && result.event === "success") {
    console.log("Done! Here is the image info: ", result.info);
    var filename = (result.info.secure_url);
    console.log(filename);
    document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
  }
 });


  }


async function addPostHandler(event) {
  event.preventDefault();


  const description = document.querySelector('input[id="post-description"]').value;
  const filename = document.querySelector('input[id="post-filename"]').value;
  const blog_body = document.querySelector('input[id="post-blog-body"]').value;
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

document.querySelector('.blog-form').addEventListener('submit', addPostHandler);

require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const image = document.querySelector('input[name="image"]').value();

cloudinary.uploader.upload(image)
.then(result => {
    const filename = (result.url)
    console.log(filename)
})
.catch(error => {console.log(error)});

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
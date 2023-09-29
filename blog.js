//blog.js
const imageData = [
    { src: 'media/backgroundHero.jpeg', alt: 'img-1', topic: 'THINGS TO DO', title: 'The Best Waterfalls in NC' },
    { src: 'media/tubing.jpeg', alt: 'img-1', topic: 'THINGS TO DO', title: 'The Best Places for River Tubing in North Carolina' },
    { src: 'media/lookingglassfalls.jpeg', alt: 'img-1', topic: 'THINGS TO DO', title: 'Exploring Looking Glass Falls in NC: A Comprehensive Guide' },
    { src: 'media/quarry.jpeg', alt: 'img-1', topic: 'THINGS TO DO', title: 'Dive into Adventure: The Quarry at Carrigan Farms' },
    { src: 'media/slidingrock.jpeg', alt: 'img-1', topic: 'THINGS TO DO', title: 'Tips and Tricks for a Safe and Fun Trip to Sliding Rock NC' },

    // ... add more image objects as needed
];

const imageList = document.getElementById('image-list');

imageData.forEach(image => {
    const wrapper = document.createElement('div');
    wrapper.className = 'image-item-wrapper';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;
    img.className = 'image-item';

    const p = document.createElement('p');
    p.className = 'image-topic';
    p.textContent = image.topic;

    const h3 = document.createElement('h3');
    h3.className = 'image-title';
    h3.textContent = image.title;

    wrapper.appendChild(img);
    wrapper.appendChild(p);
    wrapper.appendChild(h3);

    imageList.appendChild(wrapper);
});
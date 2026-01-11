fetch("assets/data/gallery.json")
  .then(res => res.json())
  .then(images => {
    const gallery = document.getElementById("gallery-list");

    images.forEach(item => {
      gallery.innerHTML += `
        <div class="col-md-4 col-sm-6">
          <div class="gallery-card">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
              <p>${item.title}</p>
            </div>
          </div>
        </div>
      `;
    });
  });

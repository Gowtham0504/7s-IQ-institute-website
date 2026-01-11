fetch("assets/data/testimonials.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("testimonial-list");

    data.forEach(t => {
      const col = document.createElement("div");
      
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="testimonial-card">
          <div class="avatar">${t.name.charAt(0)}</div>

          <p class="feedback">"${t.feedback}"</p>

          <div class="stars">★★★★★</div>

          <h6 class="name">${t.name}</h6>
          <small class="role">${t.course || "Student"}</small>
        </div>
      `;
const cards = document.querySelectorAll(".testimonial-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

cards.forEach(card => observer.observe(card));

      list.appendChild(col);
    });
  });

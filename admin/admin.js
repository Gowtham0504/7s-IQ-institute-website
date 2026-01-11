/* ===============================
   ADMIN PANEL – FINAL FIXED JS
================================ */

const sections = document.querySelectorAll(".panel-section");
const menuItems = document.querySelectorAll(".sidebar li");
const title = document.getElementById("sectionTitle");
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");

/* ---------- SECTION SWITCH ---------- */
function showSection(id) {
  sections.forEach(sec => sec.classList.remove("active"));
  menuItems.forEach(item => item.classList.remove("active"));

  document.getElementById(id).classList.add("active");
  document.querySelector(`[data-section="${id}"]`).classList.add("active");
  title.textContent = id.charAt(0).toUpperCase() + id.slice(1);
}

/* Sidebar click */
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    showSection(item.dataset.section);
  });
});

/* Sidebar toggle */
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});

/* ---------- LOAD COURSES (WITH DETAILS) ---------- */
fetch("../assets/data/courses.json")
  .then(res => res.json())
  .then(courses => {
    const container = document.getElementById("admin-course-list");
    container.innerHTML = "";

    courses.forEach(course => {
      const card = document.createElement("div");
      card.className = "admin-card";

      card.innerHTML = `
        <strong>${course.name}</strong><br>
        Duration: ${course.duration}<br>
        Fees: ${course.fees}

        <div class="admin-actions">
          <button class="btn-view">View</button>
          <button class="btn-delete">Delete</button>
        </div>
      `;

      /* VIEW FULL COURSE DETAILS */
      card.querySelector(".btn-view").onclick = () => {
       openModal(
  course.name,
  `Duration: ${course.duration}
Fees: ${course.fees}

ADVANTAGES:
- ${course.advantages.join("\n- ")}

CURRICULUM:
- ${course.curriculum.join("\n- ")}`
);

      };

      /* DELETE (UI only) */
      card.querySelector(".btn-delete").onclick = () => {
        card.remove();
      };

      container.appendChild(card);
    });
  });

/* ---------- LOAD GALLERY (WITH IMAGES) ---------- */
fetch("../assets/data/gallery.json")
  .then(res => res.json())
  .then(images => {
    const container = document.getElementById("admin-gallery-list");
    container.innerHTML = "";

    images.forEach(img => {
      const card = document.createElement("div");
      card.className = "admin-card";

      card.innerHTML = `
        <img src="../${img.image}" 
             alt="${img.title}" 
             style="width:100%; height:150px; object-fit:cover; border-radius:6px; margin-bottom:8px;">

        <strong>${img.title}</strong>

        <div class="admin-actions">
          <button class="btn-view">View</button>
          <button class="btn-delete">Delete</button>
        </div>
      `;

      card.querySelector(".btn-view").onclick = () => {
        openModal("Gallery Item", img.title);

      };

      card.querySelector(".btn-delete").onclick = () => {
        card.remove();
      };

      container.appendChild(card);
    });
  });

/* ---------- LOAD TESTIMONIALS ---------- */
fetch("../assets/data/testimonials.json")
  .then(res => res.json())
  .then(testimonials => {
    const container = document.getElementById("admin-testimonial-list");
    container.innerHTML = "";

    testimonials.forEach(t => {
      const card = document.createElement("div");
      card.className = "admin-card";

      card.innerHTML = `
        <strong>${t.name}</strong><br>
        "${t.feedback}"

        <div class="admin-actions">
          <button class="btn-view">View</button>
          <button class="btn-delete">Delete</button>
        </div>
      `;

      card.querySelector(".btn-view").onclick = () => {
        openModal(
  "Testimonial",
  `${t.name} says:\n"${t.feedback}"`
);

      };

      card.querySelector(".btn-delete").onclick = () => {
        card.remove();
      };

      container.appendChild(card);
    });
  });
function openModal(title, content) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalContent").textContent = content;
  document.getElementById("adminModal").classList.add("show");
}

document.getElementById("closeModal").onclick = () => {
  document.getElementById("adminModal").classList.remove("show");
};

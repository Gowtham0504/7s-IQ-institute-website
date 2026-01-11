const id = new URLSearchParams(window.location.search).get("id");

fetch("assets/data/courses.json")
  .then(res => res.json())
  .then(courses => {
    const c = courses.find(course => course.id === id);

    document.getElementById("course-details").innerHTML = `
      <h2>${c.name}</h2>
      <p>${c.description}</p>

      <p><strong>Duration:</strong> ${c.duration}</p>
      <p><strong>Fees:</strong> ${c.fees}</p>

      <!-- ADVANTAGES -->
      <h4 class="mt-4">Advantages</h4>
      <ul>
        ${c.advantages.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <!-- CURRICULUM -->
      <h4 class="mt-4">Curriculum</h4>
      <ul>
        ${c.curriculum.map(item => `<li>${item}</li>`).join("")}
      </ul>

      <p class="mt-3">
        📍 Online & Offline Classes Available<br>
        🎓 School Students to Working Professionals<br>
        🧑‍💻 Course + Training + Internship + Project<br>
        📜 Certificate Provided
      </p>

      <p class="mt-3">
        📞 Contact: <strong>7397593704</strong>
      </p>
    `;
  });


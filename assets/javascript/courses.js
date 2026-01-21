document.addEventListener("DOMContentLoaded", async () => {

  const courseList = document.getElementById("course-list");
  const errorBox = document.getElementById("course-error");

  if (!courseList) return;

  try {
    const response = await fetch("assets/data/courses.json");

    if (!response.ok) {
      throw new Error("Failed to load course data");
    }

    const courses = await response.json();

    let html = "";

    courses.forEach(course => {
      html += `
        <div class="col-12 col-sm-6 col-lg-4">
          <div class="course-card h-100">

            <img src="${course.image}"
                 alt="${course.name}"
                 class="course-img"
                 loading="lazy"
                 onerror="this.src='assets/images/default-course.jpg'">

            <div class="course-body">
              <h5>${course.name}</h5>

              <p class="course-desc">
                ${course.description}
              </p>

              <div class="course-meta">
                <span class="badge bg-success">${course.duration}</span>
                <span class="badge bg-dark">${course.fees}</span>
              </div>

              <a href="course-details.html?id=${course.id}"
                 class="btn btn-success w-100 mt-3">
                 View Details
              </a>
            </div>

          </div>
        </div>
      `;
    });

    courseList.innerHTML = html;

  } catch (error) {
    console.error(error);
    if (errorBox) errorBox.classList.remove("d-none");
  }

});

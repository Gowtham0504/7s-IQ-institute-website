fetch("assets/data/courses.json")
  .then(res => res.json())
  .then(courses => {
    const list = document.getElementById("course-list");

    courses.forEach(course => {
      list.innerHTML += `
        <div class="col-md-4">
          <div class="course-card h-100">

            <img src="${course.image}" 
                 alt="${course.name}" 
                 class="course-img">

            <div class="course-body">
              <h5>${course.name}</h5>

              <p class="course-desc">
                ${course.description}
              </p>

              <div class="course-meta">
                <span class="badge bg-success">
                  ${course.duration}
                </span>
                <span class="badge bg-dark">
                  ${course.fees}
                </span>
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
  });

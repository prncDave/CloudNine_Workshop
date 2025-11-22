// Users projects

const projects = [
  {
    title: "Web-Based Reservation, Ordering, and Inventory Management System",
    description: "Web-based Resturant Management System for Boss Pares Kitchenette",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    link: "Not Available",
  },
  {
    title: "Flip-Flop Christmas Lights LCD",
    description: "An interactive web app with Tailwind CSS styling",
    tags: ["Logic Circuit and Design", "Electronics", "Circuit Design"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "A responsive portfolio website for a client",
    tags: ["HTML", "CSS", "Responsive"],
    link: "#",
    },


]

// Function to display projects
function displayProjects() {
    const container = document.getElementById("projectsContainer")
    projects.forEach((project) => {
        const projectCard = document.createElement("div")
        projectCard.className = "bg-stone-200 rounded-lg p-6 hover:bg-amber-100 transition"
        projectCard.innerHTML = `
            <h4 class="text-xl font-bold mb-2 text-stone-800">${project.title}</h4>
            <p class="text-stone-700 mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map((tag) => `<span class="bg-amber-600 text-white text-xs px-2 py-1 rounded">${tag}</span>`).join("")}
            </div>
            <a href="${project.link}" class="text-amber-700 hover:text-amber-800">View Project →</a>
        `
        container.appendChild(projectCard)
    })
}


document.addEventListener("DOMContentLoaded", displayProjects)

document
  .getElementById("achievements-button")
  .addEventListener("click", function () {
    const achievementsContainer = document.querySelector(
      ".achievements-container"
    )
    if (!achievementsContainer) {
      const newContainer = document.createElement("div")
      newContainer.className = "achievements-container"
      document.body.appendChild(newContainer)

      const achievementMenu = document.createElement("nav")
      achievementMenu.id = "achievement-menu"
      achievementMenu.innerHTML = `
            <button>Claim achievement!</button>
            <button>Claim achievement!</button>
            <button>Claim achievement!</button>
            <button>Claim achievement!</button>
            <button>Claim achievement!</button>
        `
      newContainer.appendChild(achievementMenu)
    } else {
      achievementsContainer.classList.toggle("content-hidden")

      const achievementMenu = document.getElementById("achievement-menu")
      if (achievementMenu) {
        achievementMenu.style.display =
          achievementsContainer.classList.contains("content-hidden")
            ? "none"
            : "flex"
      }
    }
  })

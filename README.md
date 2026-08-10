# Recipe Finder App 🍳

A dynamic, front-end web application that helps users discover and filter recipes. I built this project to practice advanced JavaScript concepts like array methods, event delegation, and local storage, while keeping the UI clean and appetizing. 

Unlike my previous projects that had a dark/professional theme, I went with a warm, light "food-app" aesthetic for this one (cream background, coral accents, and a custom glowing cursor).

## 🚀 Live Demo
[Recepi Finder](https://rohit73848.github.io/recipe-finder/)

## ✨ Features
* **Live Search:** Type a recipe name or keyword, and the grid updates instantly.
* **Category Filters:** Easily sort recipes by tags like Breakfast, Lunch, Dessert, etc.
* **Combined Filtering:** Search and category filters work together flawlessly.
* **Recipe Details Modal:** Click on any recipe card to open a pop-up containing the full ingredients list and step-by-step instructions.
* **Favorites System:** Click the heart icon to save your favorite recipes. This uses `localStorage`, so your favorites stay saved even if you refresh or close the page.
* **Empty States:** A friendly "No results found" message appears if a search doesn't match anything.
* **Custom UI:** Features a custom glowing cursor and smooth hover animations.

## 🛠️ Built With
* **HTML5 & CSS3:** Semantic structure, CSS Variables, Flexbox, and Grid.
* **Vanilla JavaScript (ES6+):** 
  * DOM Manipulation
  * Array Methods (`map`, `filter`, `find`)
  * Event Delegation (for handling clicks on dynamically generated elements)
  * `localStorage` for data persistence

## 💡 What I Learned
Building this app was a great exercise in logic building. The biggest challenge was making the search bar and category buttons work *together* rather than overriding each other. I also learned how to use "Event Delegation" to handle clicks on the favorite buttons efficiently without attaching a separate event listener to every single card.

---
*Created by [Rahit Biswas](https://github.com/rohit73848) - 2026*

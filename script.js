const recipes = [
    {
        id: 1,
        title: 'Paneer Butter Masala',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=500&q=60',
        time: '40 mins',
        ingredients: ['250g Paneer', '2 Onions', '3 Tomatoes', '2 tbsp Butter', 'Garam Masala', 'Fresh Cream'],
        instructions: 'প্রথমে পনির হালকা করে ভেজে তুলে রাখুন। পেঁয়াজ ও টমেটোর পেস্ট বানিয়ে মাখনের সাথে মশলা দিয়ে কষিয়ে নিন। এরপর ভাজা পনির ও ক্রিম দিয়ে কিছুক্ষণ ফুটিয়ে নিলেই তৈরি!'
    },
    {
        id: 2,
        title: 'Avocado Toast',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=60',
        time: '10 mins',
        ingredients: ['2 slices Whole Wheat Bread', '1 ripe Avocado', 'Salt', 'Black Pepper', 'Lemon juice', 'Chilli flakes'],
        instructions: 'পাউরুটি টোস্ট করে নিন। অ্যাভোকাডো ম্যাশ করে তাতে নুন, গোলমরিচ এবং লেবুর রস মেশান। টোস্টের ওপর মিশ্রণটি লাগিয়ে চিলি ফ্লেক্স ছড়িয়ে পরিবেশন করুন।'
    },
    {
        id: 3,
        title: 'Chocolate Chip Cookies',
        category: 'Dessert',
        image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=60',
        time: '25 mins',
        ingredients: ['1 cup Flour', '1/2 cup Sugar', '1/2 cup Choco Chips', '1 Egg', 'Butter'],
        instructions: 'ময়দা এবং বেকিং পাউডার মিশিয়ে নিন। মাখন ও চিনি ভালো করে ফেটিয়ে তাতে ডিম দিন। এবার শুকনো উপকরণ এবং চোকো চিপস মিশিয়ে ছোট ছোট বল তৈরি করে ১৮০°C তাপমাত্রায় ১২-১৫ মিনিট বেক করুন।'
    },
    {
        id: 4,
        title: 'Chicken Biryani',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=60',
        time: '60 mins',
        ingredients: ['500g Chicken', '2 cups Basmati Rice', '2 Onions', 'Yogurt', 'Biryani Masala', 'Mint & Coriander leaves'],
        instructions: 'চিকেন ম্যারিনেট করে রাখুন দই ও মশলা দিয়ে। চাল আধা সেদ্ধ করে নিন। পেঁয়াজ বেরেস্তা করে মাংসের সাথে দমে বসিয়ে চাল দিয়ে লেয়ার করে ঢাকনা দিয়ে অল্প আঁচে দম দিন ২৫-৩০ মিনিট।'
    },
    {
        id: 5,
        title: 'Masala Dosa',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '30 mins',
        ingredients: ['Dosa Batter', '3 Potatoes', '1 Onion', 'Mustard Seeds', 'Curry Leaves', 'Turmeric'],
        instructions: 'আলু সেদ্ধ করে মাখুন। কড়াইয়ে সরষে ও কারিপাতা ফোড়ন দিয়ে পেঁয়াজ ভেজে আলু মিশিয়ে মশলা দিন। তাওয়ায় দোসার ব্যাটার পাতলা করে ছড়িয়ে ভেতরে আলুর পুর দিয়ে মুড়ে পরিবেশন করুন।'
    },
    {
        id: 6,
        title: 'Veg Fried Rice',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=500&q=60',
        time: '20 mins',
        ingredients: ['2 cups cooked Rice', 'Mixed Vegetables', 'Spring Onion', 'Soy Sauce', 'Garlic', 'Vinegar'],
        instructions: 'কড়াইয়ে রসুন কুচি দিয়ে সবজি ভেজে নিন। এরপর ভাত দিয়ে সয়া সস, ভিনিগার মিশিয়ে ভালো করে নাড়াচাড়া করুন। স্প্রিং অনিয়ন ছড়িয়ে গরম গরম পরিবেশন করুন।'
    },
    {
        id: 7,
        title: 'Gulab Jamun',
        category: 'Dessert',
        image: 'https://images.pexels.com/photos/6896577/pexels-photo-6896577.jpeg',
        time: '35 mins',
        ingredients: ['1 cup Khoya', '2 tbsp Flour', '2 cups Sugar', 'Cardamom', 'Ghee for frying'],
        instructions: 'খোয়া ও ময়দা মেখে ছোট ছোট বল বানান। চিনি ও এলাচ দিয়ে সিরা তৈরি করুন। ঘিয়ে বলগুলো সোনালি করে ভেজে গরম সিরায় ডুবিয়ে রাখুন কিছুক্ষণ।'
    },
    {
        id: 8,
        title: 'Egg Curry',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=500&q=60',
        time: '30 mins',
        ingredients: ['4 Eggs', '2 Onions', '2 Tomatoes', 'Ginger-Garlic Paste', 'Turmeric', 'Red Chilli Powder'],
        instructions: 'ডিম সেদ্ধ করে হালকা ভেজে নিন। পেঁয়াজ-টমেটোর গ্রেভি বানিয়ে তাতে মশলা কষিয়ে নিন। ভাজা ডিম দিয়ে ঝোল ফুটিয়ে নামিয়ে নিন।'
    },
    {
        id: 9,
        title: 'Pasta Arrabbiata',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?auto=format&fit=crop&w=500&q=60',
        time: '25 mins',
        ingredients: ['250g Penne Pasta', 'Tomato Puree', 'Garlic', 'Red Chilli Flakes', 'Olive Oil', 'Basil'],
        instructions: 'পাস্তা সেদ্ধ করে নিন। অলিভ অয়েলে রসুন ও চিলি ফ্লেক্স ভেজে টমেটো পিউরি দিয়ে সস তৈরি করুন। সেদ্ধ পাস্তা মিশিয়ে বেসিল পাতা দিয়ে পরিবেশন করুন।'
    },
    {
        id: 10,
        title: 'Fruit Salad',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=500&q=60',
        time: '15 mins',
        ingredients: ['1 Apple', '1 Banana', '1 cup Grapes', '1 Pomegranate', 'Honey', 'Lemon juice'],
        instructions: 'সব ফল ধুয়ে টুকরো করে নিন। একটি বাটিতে সব ফল মিশিয়ে মধু ও লেবুর রস ছড়িয়ে ভালো করে টস করে পরিবেশন করুন।'
    },
    {
        id: 11,
        title: 'Fish Fry',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1656389863341-1dfd38ee6edc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        time: '20 mins',
        ingredients: ['4 pcs Fish', 'Turmeric', 'Red Chilli Powder', 'Lemon juice', 'Mustard Oil', 'Semolina'],
        instructions: 'মাছ ধুয়ে হলুদ, লঙ্কা গুঁড়ো ও লেবুর রস দিয়ে ম্যারিনেট করুন। সুজি মাখিয়ে সরষের তেলে দুই পিঠ মুচমুচে করে ভেজে নিন।'
    },
    {
        id: 12,
        title: 'Vegetable Soup',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=60',
        time: '25 mins',
        ingredients: ['Carrot', 'Beans', 'Cabbage', 'Sweet Corn', 'Black Pepper', 'Vegetable Stock'],
        instructions: 'সব সবজি ছোট ছোট করে কেটে নিন। ভেজিটেবল স্টকে সবজি দিয়ে সেদ্ধ করুন। নুন ও গোলমরিচ দিয়ে স্বাদমতো ফুটিয়ে গরম গরম পরিবেশন করুন।'
    },
    {
        id: 13,
        title: 'Pancakes',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=60',
        time: '20 mins',
        ingredients: ['1 cup Flour', '1 Egg', '1 cup Milk', 'Sugar', 'Baking Powder', 'Butter'],
        instructions: 'ময়দা, ডিম, দুধ ও চিনি একসাথে ফেটিয়ে মসৃণ ব্যাটার বানান। তাওয়ায় মাখন দিয়ে অল্প ব্যাটার ঢেলে দুই পিঠ সেঁকে নিন। মধু বা সিরাপ দিয়ে পরিবেশন করুন।'
    },
    {
        id: 14,
        title: 'Mango Lassi',
        category: 'Dessert',
        image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=500&q=60',
        time: '10 mins',
        ingredients: ['1 ripe Mango', '1 cup Yogurt', 'Sugar', 'Milk', 'Cardamom powder'],
        instructions: 'আমের খোসা ছাড়িয়ে টুকরো করে নিন। দই, দুধ, চিনি ও এলাচ গুঁড়ো দিয়ে ব্লেন্ড করুন। বরফ দিয়ে ঠান্ডা ঠান্ডা পরিবেশন করুন।'
    },
    {
        id: 15,
        title: 'Chana Masala',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=60',
        time: '35 mins',
        ingredients: ['2 cups boiled Chickpeas', '2 Onions', '2 Tomatoes', 'Ginger-Garlic Paste', 'Chana Masala Powder'],
        instructions: 'পেঁয়াজ-টমেটো বাটা কষিয়ে তাতে চানা মশলা দিন। সেদ্ধ ছোলা দিয়ে ভালো করে মিশিয়ে অল্প জল দিয়ে ফুটিয়ে নিন যতক্ষণ না মশলা ছোলায় মিশে যায়।'
    },
    {
        id: 16,
        title: 'Grilled Sandwich',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=60',
        time: '15 mins',
        ingredients: ['4 slices Bread', 'Cheese Slices', 'Capsicum', 'Onion', 'Tomato', 'Butter'],
        instructions: 'পাউরুটিতে মাখন লাগিয়ে তার মাঝে চিজ ও কাটা সবজি সাজিয়ে দিন। স্যান্ডউইচ মেকারে সোনালি ও মুচমুচে করে গ্রিল করে গরম গরম পরিবেশন করুন।'
    },
    {
        id: 17,
        title: 'Mutton Curry',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=500&q=60',
        time: '75 mins',
        ingredients: ['500g Mutton', '3 Onions', 'Yogurt', 'Ginger-Garlic Paste', 'Whole Garam Masala', 'Mustard Oil'],
        instructions: 'মাটন দই ও মশলা দিয়ে ম্যারিনেট করে রাখুন কিছুক্ষণ। পেঁয়াজ ভেজে মাটন দিয়ে কষিয়ে নিন। জল দিয়ে ঢাকা দিয়ে নরম না হওয়া পর্যন্ত অল্প আঁচে রান্না করুন।'
    },
    {
        id: 18,
        title: 'Ice Cream Sundae',
        category: 'Dessert',
        image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=500&q=60',
        time: '10 mins',
        ingredients: ['2 scoops Vanilla Ice Cream', 'Chocolate Sauce', 'Nuts', 'Whipped Cream', 'Cherry'],
        instructions: 'একটি গ্লাসে আইসক্রিম স্কুপ দিয়ে তার ওপর চকোলেট সস ঢালুন। হুইপড ক্রিম, বাদাম কুচি ও একটি চেরি দিয়ে সাজিয়ে সাথে সাথে পরিবেশন করুন।'
    },
    {
        id: 19,
        title: 'Vegetable Pulao',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&q=60',
        time: '30 mins',
        ingredients: ['1.5 cups Basmati Rice', 'Mixed Vegetables', 'Whole Spices', 'Ghee', 'Cashews'],
        instructions: 'ঘিয়ে গোটা গরম মশলা ফোড়ন দিয়ে সবজি ও কাজু হালকা ভেজে নিন। চাল দিয়ে মিশিয়ে পরিমাণমতো জল দিয়ে ঢাকা দিয়ে সেদ্ধ করুন।'
    },
    {
        id: 20,
        title: 'Momos',
        category: 'Snacks',
        image: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=500&q=60',
        time: '45 mins',
        ingredients: ['2 cups Flour', '250g Chicken/Veg Mince', 'Garlic', 'Ginger', 'Spring Onion', 'Soy Sauce'],
        instructions: 'ময়দা মেখে পাতলা লেচি বেলে নিন। পুরের উপকরণ মিশিয়ে লেচির মাঝে ভরে মোমোর আকারে গড়ে নিন। ভাপে ১০-১২ মিনিট সেদ্ধ করে চাটনির সাথে গরম গরম পরিবেশন করুন।'
    }
];

let cursor = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

let currentCategory = 'All';
let currentSearchTerm = '';

let recipeGridContainer = document.getElementById("recipe-grid")


const modalOverlay = document.getElementById('recipe-modal');
const closeBtn = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalTime = document.getElementById('modal-time');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');

function displayRecipes(recipesData){
recipeGridContainer.innerHTML =  recipesData.map((recipe)=>{
    return `<div class="recipe-card" onclick="openModal(${recipe.id})">
    <div class="recipe-img-wrap">
        <img src="${recipe.image}" alt="${recipe.title}">
        <button class="favorite-btn"><i class="ri-heart-3-line"></i></button>
    </div>
    <div class="recipe-info">
        <h3 class="recipe-name">${recipe.title}</h3>
        <div class="recipe-meta">
            <span class="recipe-category-tag">${recipe.category}</span>
            <span class="recipe-time"><i class="ri-time-line"></i> ${recipe.time}</span>
        </div>
    </div>
</div>`
  }).join("")
}

function openModal(id) {
    const clickedRecipe = recipes.find((recipe) => recipe.id === id);

    modalTitle.innerText = clickedRecipe.title;
    modalImg.src = clickedRecipe.image;
    modalCategory.innerText = clickedRecipe.category;
    modalTime.innerText = clickedRecipe.time;
    modalInstructions.innerText = clickedRecipe.instructions;

    modalIngredients.innerHTML = clickedRecipe.ingredients.map((item) => {
        return `<li>${item}</li>`;
    }).join("");

    modalOverlay.style.display = 'flex';
}
closeBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});

// Search functionality
 let searchInput = document.getElementById('search-input');
 searchInput.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value.toLowerCase();
    filterRecipes();

    displayRecipes(filteredRecipes);
});

// Category filter Buttons add

let categoryFilters = document.getElementById('category-filters');
const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snacks'];

function renderCategoryButtons(){
    categoryFilters.innerHTML = categories.map((category)=>{
       return `<button class="category-btn" onclick="filterByCategory('${category}')">${category}</button>`
    }).join("");
}

function filterByCategory(category){
     currentCategory = category;
    filterRecipes();

}
function filterRecipes(){
    let filtered = recipes;

    if(currentCategory !== 'All'){
        filtered = filtered.filter((recipe) => recipe.category === currentCategory);
    }
    if(currentSearchTerm !== ''){
        filtered = filtered.filter((recipe) => recipe.title.toLowerCase().includes(currentSearchTerm));
    }
    displayRecipes(filtered);
}

displayRecipes(recipes);
renderCategoryButtons();
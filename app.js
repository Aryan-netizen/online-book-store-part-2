const carouselContent = document.getElementById("carouselContent");
const slides = document.querySelectorAll(".carousel div");
let currentIndex = 0;

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Reset to the first slide
    }
    const offset = -currentIndex * 100; // Slide width is 100% of the container
    carouselContent.style.transform = `translateX(${offset}%)`;
}

// Auto-scroll every 3 seconds
setInterval(showNextSlide, 3000);

const nav = document.getElementById('nav-dialog');
function toggle() {
    nav.classList.toggle("hidden");

}    

const products = [
            { 
                name: "Apple iMac 27\"", 
                description: "1TB HDD, Retina 5K Display, M3 Max", 
                price: 1699, 
                rating: 4.3, 
                reviews: 345 
            },
            { 
                name: "Apple iPhone 15 Pro Max", 
                description: "256GB, Blue Titanium", 
                price: 1199, 
                rating: 4.9, 
                reviews: 2123 
            },
            { 
                name: "iPad Pro 13-Inch (M4)", 
                description: "XDR Display, 512GB", 
                price: 799, 
                rating: 4.8, 
                reviews: 879 
            },
            { 
                name: "PlayStation5 Console", 
                description: "1TB, PRO Controller", 
                price: 499, 
                rating: 4.7, 
                reviews: 1500 
            },
            { 
                name: "PlayStation5 Console", 
                description: "1TB, PRO Controller", 
                price: 499, 
                rating: 4.7, 
                reviews: 1500 
            },
            { 
                name: "PlayStation5 Console", 
                description: "1TB, PRO Controller", 
                price: 499, 
                rating: 4.7, 
                reviews: 1500 
            },
            { 
                name: "PlayStation5 Console", 
                description: "1TB, PRO Controller", 
                price: 499, 
                rating: 4.7, 
                reviews: 1500 
            },
            { 
                name: "Microsoft Surface Pro", 
                description: "Copilot PC, 13 Inch", 
                price: 899, 
                rating: 4.4, 
                reviews: 872 
            }
        ];

        const productGrid = document.getElementById("product-grid");

        // Function to display products
        function displayProducts(productArray) {
            productGrid.innerHTML = ""; // Clear existing products
            productArray.forEach(product => {
                productGrid.innerHTML += `
                    <div class="bg-white p-4 rounded shadow hover:shadow-lg">
                        <div class="h-48 bg-gray-200 rounded mb-4"></div>
                        <h2 class="text-lg font-bold mb-2">${product.name}</h2>
                        <p class="text-sm text-gray-500">${product.description}</p>
                        <div class="flex items-center mt-2">
                            <span class="text-yellow-500">${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}</span>
                            <span class="text-sm text-gray-500 ml-2">(${product.reviews})</span>
                        </div>
                        <p class="text-xl font-bold mt-4">$${product.price}</p>
                        <button class="w-full bg-blue-500 text-white mt-4 py-2 rounded">Add to Cart</button>
                    </div>
                `;
            });
        }

        // Display all products initially
        displayProducts(products);

        // Filter by price
        document.getElementById("filter-price").addEventListener("click", () => {
            const filteredProducts = products.filter(product => product.price < 1000);
            displayProducts(filteredProducts);
        });

        // Sort by price
        document.getElementById("sort-price").addEventListener("click", () => {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            displayProducts(sortedProducts);
        });

        // Sort by rating
        document.getElementById("sort-rating").addEventListener("click", () => {
            const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
            displayProducts(sortedProducts);
        });

const navLinks = document.getElementById("nav-links");
const posts = document.getElementById("posts");
const viewMoreBtn = document.getElementById("view-more");

document.querySelector("#sidebar").addEventListener("click", () => {
  navLinks.classList.toggle("displayNav");
});
viewMoreBtn.addEventListener("click", () => {
  posts.innerHTML += `<article>
                <img class="article-img" src="images/hero.png" alt="Post thumbnail">
                <span class="article-info">Sept 1, 2022</span>
                <h2 class="article-title">Blog 4</h2>
                <p class="article-preview">I'm excited to start a new learning journey</strong> as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>                
            </article>
            <article>
                <img class="article-img" src="images/hero.png" alt="Post thumbnail">
                <span class="article-info">Sept 1, 2022</span>
                <h2 class="article-title">Blog 5</h2>
                <p class="article-preview">I'm excited to start a new learning journey</strong> as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>                
            </article>
            <article>
                <img  class="article-img" src="images/hero.png" alt="Post thumbnail">
                <span class="article-info">Sept 1, 2022</span>
                <h2 class="article-title">Blog 6</h2>
                <p class="article-preview">I'm excited to start a new learning journey</strong> as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>                
            </article>`;
  viewMoreBtn.style.display = "none";
});

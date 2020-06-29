const routes = [
  {
    path: "/",
    template: `<section class="home">
      <div class="home__header">
        <h2 class="home__header--title">
          <span class="span1">creative design</span>
          <span class="span2">
            <span class="artwork">artwork</span>

            <span class="and">&amp;</span>
          </span>
          <span class="span3">photography</span>
        </h2>
        <h2 class="home__header--subtitle">
          inspired by the mystery of unicorns
        </h2>
      </div>
    </section>`,
  },
  {
    path: "/about",
    template: `<section class="about">
      <h1 class="about__header">
        our team
      </h1>
      <div class="about-cards">
        <div class="about-cards__card one">
          <div class="about-cards__card--info">
              <div class="arrow">
                  <i class="fas  fa-chevron-up arrow-icon"></i>
              </div>
            <h2 class="name">
              Sofia Blackwood
            </h2>
            <h3 class="titles">Photographer| Web developer</h3>
            <p class="bio">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam sint saepe commodi at explicabo!
              Debitis, laboriosam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore, earum?
            </p>
            <span class="social_icons">
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div class="about-cards__card two">
          
          <div class="about-cards__card--info">
              <div class="arrow">
                  <i class="fas  fa-chevron-up arrow-icon"></i>
              </div>
            <h2 class="name">
              Maria Carrera
            </h2>
            <h3 class="titles">Graphic designer| Digital artist</h3>
            <p class="bio">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Debitis, laboriosam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore, earum?
            </p>
            <span class="social_icons">
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div class="about-cards__card three">
          
          <div class="about-cards__card--info">
              <div class="arrow">
                  <i class="fas  fa-chevron-up arrow-icon"></i>
              </div>
            <h2 class="name">
              Angelina Janssen
            </h2>
            <h3 class="titles">Graphic designer| Photographer</h3>
            <p class="bio">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Debitis, laboriosam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Dolore, earum?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <span class="social_icons">
              <i class="fab fa-instagram-square"></i>
              <i class="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
    </section>`,
  },
  {
    path: "/contact",
    template: `<section class="contact">
    <div class="no-map">
    <h1 class="contact__header">
      contact us
    </h1>
    <div class="contact__info">
      <div class="contact__info--detail">
        <p class="address">
          <i class="fas fa-address-card"></i> 91 Overton Circle, Liverpool
          L3 2UX
        </p>
      </div>
      <div class="contact__info--detail">
        <p class="phone">
          <i class="fas fa-phone-square-alt"></i> 078 4943 9759
        </p>
      </div>
      <div class="contact__info--detail">
        <p class="email">
          <i class="fas fa-envelope-square"></i> contact@creativeunicorn.com
        </p>
      </div>
    </div>
    </div>
    <div class="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152201.77188059303!2d-3.0561408714013165!3d53.41209544328504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487adf8a647060b7%3A0x42dc046f3f176e01!2sLiverpool%2C%20Wielka%20Brytania!5e0!3m2!1spl!2spl!4v1592824100528!5m2!1spl!2spl"
        width="300"
        height="300"
        frameborder="0"
        style="border: 0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </section>`,
  },
  {
    path: "/projects",
    template: `<section class="projects">
    <h1 class="projects__header">our projects</h1>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_1.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_2.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_3.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_4.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_5.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_6.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_7.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
    <div class="projects__project">
      <div class="projects__project--img">
        <img src="/dist/photos/project_8.jpg" alt="project1" srcset="" />
      </div>
      <div class="projects__project--overlay">
        <div class="overlay-icon"><i class="far fa-eye"></i></div>
      </div>
    </div>
  </section>`,
  },
];

export default routes;

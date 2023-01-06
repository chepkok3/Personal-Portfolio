const hamburger = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav-menu');
const navItem = document.querySelectorAll('.nav-item');
const cancelMenu = document.querySelector('.menu-cancel');

hamburger.addEventListener('click', () => {
  navMenu.style.left = '0%';
});

cancelMenu.addEventListener('click', () => {
  navMenu.style.left = '-100%';
});

navItem.forEach((list) => {
  list.addEventListener('click', () => {
    navMenu.style.left = '-100%';
  });
});

const projectContainer = document.querySelector('.work-section');
const modalContainer = document.querySelector('.overlay');
const mainModalContainer = document.querySelector('.modal-window');
const wholeCont = document.querySelector('.background-blur');

const projects = [
  {
    featuredImage: 'images/Snapshoot-Portfolio.png',
    name: 'Tonic',
    information: ['Canopy', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['Html', 'css', 'JavaScript'],
    modalName: 'Tonic',
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
  {
    featuredImage: 'images/Snapshoot-Availability.png',
    name: 'Tonic',
    information: ['Canopy', 'Back End Dev', '2015'],
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    modalName: 'Tonic',
    technologies: ['Html', 'css', 'JavaScript'],
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
  {
    featuredImage: 'images/Snapshoot-Gymfit.png',
    name: 'Tonic',
    information: ['Canopy', 'Back End Dev', '2015'],
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['Html', 'css', 'JavaScript'],
    modalName: 'Tonic',
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
  {
    featuredImage: 'images/Snapshoot-Printing.png',
    name: 'Tonic',
    information: ['Canopy', 'Back End Dev', '2015'],
    description:
    'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['Html', 'css', 'JavaScript'],
    modalName: 'Tonic',
    demo: 'https://chepkok3.github.io/Personal-Portfolio/#',
    source: 'https://github.com/chepkok3/Personal-Portfolio',
  },
];

// Render mobile portfolio
projects.forEach((project, index) => {
  let tech = '';
  project.technologies.forEach((techno) => {
    tech += `
    <li class="btn">
     ${techno}
    </li>`;
  });

  let info = '';
  project.information.forEach((infoItem) => {
    info += `<li class="canopy">
     ${infoItem}
    </li>`;
  });

  const eachProject = `
  <div class="mobile-cards">
  <div class="project-card">
  <img
    class="snapshot-portfolio-img"
    src=${project.featuredImage}
    alt="snapshot-portfolio"
  />

  <div class="project-text">
    <h2 class="project-title">
    ${project.name}</h2>
    <div class="counter">
    ${info}
    </div>

    <div class="primary-text">
    ${project.description}
    </div>
    <div class="languages">
      <ul class="programming-languages">
      ${tech}
      </ul>
    </div>
    <div class="text-see-project">
      <a class="see-project-button" id=${index} href="#">See Project</a>
    </div>
  </div>
  </div>
  </div>
  <div>
  `;
  projectContainer.innerHTML += eachProject;
});

// Render Desktop
const desktopProjects = [
  {
    name: 'Multi Post Stories',
    technologies: ['Facebook', 'Fullstack Dev', '2015'],
    information:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    desktopImages: 'desktop/1-Snapshoot-Portfolio.png',
  },
  {
    name: 'Multi Post Stories',
    technologies: ['Facebook', 'Fullstack Dev', '2015'],
    information:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    desktopImages: 'desktop/Avail-Snapshoot-Portfolio.png',
  },
  {
    name: 'Multi Post Stories',
    technologies: ['Facebook', 'Fullstack Dev', '2015'],
    information:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    desktopImages: 'desktop/Snapshoot-Portfolio.png',
  },
  {
    name: 'Multi Post Stories',
    technologies: ['Facebook', 'Fullstack Dev', '2015'],
    information:
    'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages: ['html', 'Ruby on rails', 'css', 'javascript'],
    desktopImages: 'desktop/Print-Snapshoot-Portfolio.png',
  },
];

desktopProjects.forEach((desktopProject, desktopIndex) => {
  let technology = '';
  desktopProject.technologies.forEach((techItem) => {
    technology += ` <li class="canopy">${techItem}</li>`;
  });
  let language = '';
  desktopProject.languages.forEach((lang) => {
    language += `<li class="programming-languages"><span>${lang}</span></li>`;
  });

  const eachDesktopProject = `
  <div class = "desktop-cards">
  <div class="project-card">
  <img
  class="snapshot-portfolio-img"
    src=${desktopProject.desktopImages}
    alt="snapshot-portfolio"
  />
  <div class="project-text">
    <h2 class="project-title">${desktopProject.name}</h2>
    <div class="counter">
    ${technology}
    </div>
    
    <div class="primary-text">
    ${desktopProject.information}
    </div>
    <div class="languages">
      <ul class="programming-languages">
      ${language}
      </ul>
    </div>
    <div class="text-see-project">
      <a class="see-project-button" id=${desktopIndex} href="#">See Project</a>
    </div>
    </div>
  </div>
</div>
`;
  projectContainer.innerHTML += eachDesktopProject;
});

const projectButtons = document.querySelectorAll('.text-see-project');

const modalContent = (project) => {
  const popup = `
  <div class="modal-content">
    <div class="modal-header">
      <h2 class="modal-name">${project.modalName} 
    </h2>
    </div>
    <div class="modal-canopy">
      <h3 class="modal-text">CANOPY</h3>
      <ul class="modal-canopy-text">
        <li><img src="images/Counter.png" alt="circle" /></li>
        <li>Back End Dev</li>
        <li><img src="images/Counter.png" alt="circle" /></li>
        <li>2015</li>
      </ul>
    </div>

    <img
    class="mobile-snapshot-portfolio-img"
    src="images/Snapshoot-Portfolio.png"
    alt="snapshot-portfolio"
    />

    <img
      class="desktop-snapshot-portfolio-img"
      src="desktop/Snapshoot-M-Portfolio.png"
      alt="snapshot-portfolio"
    />

    <div class="modal-supporting-text">
      <p class="modal-paragraph">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essent
      </p>
      <div class="paragraph">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the releorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum han printer took a galley of
          type and scrambled it 1960s with the releawn printer took a galley
          of type and scrambled it 1960s with the releaLorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it
          1960s with the relea
        </p>
      </div>
  
      <div class="tech-buttons">
        <ul class="modal-technologies">
          <div class="modal-front">
            <li>
              <a href="#" class="tech"
                >html</a
              >
            </li>
            <li>
              <a
                href="#"
                class="tech"
                >css</a
              >
            </li>
            <li>
              <a href="#" class="tech">JavScript</a>
            </li>
          </div>

          <div class="modal-back">
            <li>
              <a
                href="#"
                class="tech"
                >Github</a
              >
            </li>
            <li>
              <a href="#" class="tech">Ruby</a>
            </li>
            <li>
              <a href="#" class="tech">Bootstrap</a>
            </li>
          </div>
        </ul>
      
      <div class="modal-button">
        <a href="${project.demo}" class="modal-btn"
          ><span>See Demo</span>
          <img src="desktop/Icon.png" alt="live" width="10" height="10"
        /></a>
        <a href="${project.source}" class="modal-btn"
          ><span>See Source</span>
          <img
            src="desktop/github-vector.png"
            alt="github link"
            width="10"
            height="10"
          />
        </a>
      </div>
      </div>
    </div>
  </div> 
  `;
  modalContainer.innerHTML = popup;
  mainModalContainer.style.visibility = 'visible';
  mainModalContainer.classList.add('active');
  wholeCont.style.display = 'none';
};

projectButtons.forEach((projectBtn) => {
  projectBtn.addEventListener('click', (e) => {
    const getBtnId = e.target.getAttribute('id');
    const projectObj = projects[getBtnId];
    modalContent(projectObj);
  });
});
const closeModalButton = document.querySelector('.close-modal');
closeModalButton.addEventListener('click', () => {
  mainModalContainer.classList.remove('active');
  wholeCont.style.display = 'block';
});

/* Email form validation */

/* Access form field */

const form = document.querySelector('.contact-form');

/* validate email function */

function containUppercase(str) {
  return /[^a-z]/.test(str);
}

/* event listener for email submission */

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailEntered = document.forms.contactMe.Email.value;
  if (containUppercase(emailEntered)) {
    document.querySelector('.error-information').innerText = 'There should be no capital letters in your email, please remove it!';
    return false;
  }
  return form.submit();
});

// preserve data in the browser

// initialize data ids

const formId = document.getElementById('contact-me-form');
const userNameId = document.getElementById('name');
const userEmailId = document.getElementById('email');
const userMessageId = document.getElementById('message');
const accessLocalStorage = localStorage.getItem('userProvidedDetails');

// Load to every contact form field in case already saved local storage data exists.

if (accessLocalStorage) {
  const dataSave = JSON.parse(accessLocalStorage);
  userNameId.value = dataSave.name;
  userEmailId.value = dataSave.email;
  userMessageId.value = dataSave.message;
}

document.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();
    // call input values
    const userNameData = document.getElementById('name').value;
    const userEmailData = document.getElementById('email').value;
    const userMessageData = document.getElementById('message').value;

    // JavaScript object for the form values
    const providedDetails = {
      name: userNameData,
      email: userEmailData,
      message: userMessageData,
    };

    localStorage.setItem('userProvidedDetails', JSON.stringify(providedDetails));
  });
});

// Ensure that the form remains in current load
formId.addEventListener('submit', (e) => {
  e.preventDefault();
});
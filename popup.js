const projects = [
  {
    title: "Utop Web",
    frame: {
      canopy: "Utop",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "front-end dev",
      year: 2022,
    },
    Image: "./images/utop.png",
    description:
      "Utop-web is an online web development learning platform that aimed to teach Ethiopian students how to develop a website with their native language. it is built with Html5, CSS and JavaScript.",
    technoloies: {
      html: "html",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/utop-web",
    demoLink: "https://degisew.github.io/utop-web/",
  },
  {
    title: "Multipost Stories",
    frame: {
      canopy: "Canopy",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "backend dev",
      year: 2015,
    },
    Image: "./images/card-2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technoloies: {
      html: "html",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/degisew.github.io",
    demoLink: "https://degisew.github.io",
  },
  {
    title: "Tonic",
    frame: {
      canopy: "Canopy",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "backend dev",
      year: 2015,
    },
    Image: "./images/card-3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technoloies: {
      html: "html",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/degisew.github.io",
    demoLink: "https://degisew.github.io",
  },
  {
    title: "Multipost stories",
    frame: {
      canopy: "Canopy",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "backend dev",
      year: 2015,
    },
    Image: "./images/card-4.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technoloies: {
      html: "html",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/degisew.github.io",
    demoLink: "https://degisew.github.io",
  },
  {
    title: "Utop Web",
    frame: {
      canopy: "Utop",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "front-end dev",
      year: 2022,
    },
    Image: "./images/utop.png",
    description:
      "Utop-web is an online web development learning platform that aimed to teach Ethiopian students how to develop a website with their native language. it is built with Html5, CSS and JavaScript.",
    technoloies: {
      html: "html",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/utop-web",
    demoLink: "https://degisew.github.io/utop-web/",
  },
  {
    title: "Multi post Stories",
    frame: {
      canopy: "Facebook",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "full-stack dev",
      year: 2015,
    },
    Image: "./images/desktop-card2.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technoloies: {
      html: "html",
      ruby: "Ruby on Rils",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/degisew.github.io",
    demoLink: "https://degisew.github.io",
  },
  {
    title: "Facebook 360",
    frame: {
      canopy: "Facebook",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "full-stack dev",
      year: 2015,
    },
    Image: "./images/desktop-card3.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technoloies: {
      html: "html",
      ruby: "Ruby on Rils",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/degisew.github.io",
    demoLink: "https://degisew.github.io",
  },
  {
    title: "Uber Navigation",
    frame: {
      canopy: "Uber",
      disc: '<img src="./images/Counter.png" alt="counter year" />',
      backDev: "Lead developer",
      year: 2018,
    },
    Image: "./images/desktop-card4.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent.",
    technoloies: {
      html: "html",
      ruby: "Ruby on Rils",
      css: "css",
      javascript: "javaScript",
    },
    githubLink: "https://github.com/degisew/degisew.github.io",
    demoLink: "https://degisew.github.io",
  },
];

const submitBtn = document.querySelectorAll('.btn-submit');
const popupWindow = document.getElementById('popup-detail-window');
const popupContainer = document.getElementById('popup-element-container');
const closePopupBtn = document.createElement('button');
closePopupBtn.type = 'button';
closePopupBtn.id = 'popup-menu-close-btn';
closePopupBtn.innerHTML = '<span>X</span>';

submitBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    const targetId = e.target.id;
    const project = projects[targetId];

    popupWindow.classList.add('visible');
    popupContainer.innerHTML = ` 
      <h2 class="tonic">
      ${project.title}
      </h2>
        <div class="tonic-frame">
         <p class="canopy">
        ${project.frame.canopy}
        </p>
        ${project.frame.disc}
        <p class="back-end-dev">
        ${project.frame.backDev}
        </p>
        ${project.frame.disc}
        <p class="year">
        ${project.frame.year}
        </p>
        </div>
       <div class="popup-image-and-descrpt-btn-div ">
        <div class="popup-image">
        <img src="${project.Image}"></img>
        </div>
       <div class="popup-all-below-image-div">
        <div class="popup-descrptn">
        </p class="popup-descrptn">
        ${project.description}
        <p>
        </div>
        <div class="popup-tech-and-see-btns-div">
        <div class="ul-div">
          <ul>
            <li class="html">${project.technoloies.html}</li>
            <li class="css">${project.technoloies.css}</li>
            <li class="javascript">${project.technoloies.javascript}</li>
          </ul>
        </div>
        <div class="popup-link-btn-div">
        <button type="submit" value="See live" class= "popup-see-btn">
        <div class="popup-see-link-txt-and-icon-div">

        <a href="${project.demoLink}" class="see-anchor"><h3>See live</h3></a>
        <img src="./images/seelive.png"/></div>
        </button>
        <button type="submit" class= "popup-see-btn">
        <div class="popup-see-link-txt-and-icon-div">
        <a href="${project.githubLink}" class="see-anchor"><h3>See Source</h3></a>
        <img src="./images/popupgihubicon.png"/></div>
        </button>
        </div>
      </div>
       </div>
       </div>
       `;
    popupContainer.prepend(closePopupBtn);
    document.body.style.overflow = 'hidden';
  });
});
closePopupBtn.addEventListener('click', () => {
  popupWindow.classList.remove('visible');
  document.body.style.overflow = 'scroll';
});

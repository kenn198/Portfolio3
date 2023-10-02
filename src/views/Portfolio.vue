<template>
  <div class="cv-container">
    <div class="cv-sidebar">
      <div class="cv-profile">
        <img src="../assets/images/self.jpg" alt="Avatar">
        <h2>Ken Tay</h2>
        <p>Game Designer and Web Developer</p>
        <p>Melbourne, VIC</p>
        <p>taykenneth198@gmail.com</p>
        <p>+ 61 123456789</p>
      </div>
      <div class="cv-skills">
        <h2>Skills</h2>
        <div class="skill">
          <p>Unreal Engine</p>
          <div class="skill-bar">
            <div class="skill-level" style="width: 90%"></div>
          </div>
        </div>
        <div class="skill">
          <p>Video editing</p>
          <div class="skill-bar">
            <div class="skill-level" style="width: 80%"></div>
          </div>
        </div>
        <div class="skill">
          <p>HTML</p>
          <div class="skill-bar">
            <div class="skill-level" style="width: 75%"></div>
          </div>
        </div>
        <div class="skill">
          <p>Vue</p>
          <div class="skill-bar">
            <div class="skill-level" style="width: 70%"></div>
          </div>
        </div>
        <div class="skill">
          <p>C++</p>
          <div class="skill-bar">
            <div class="skill-level" style="width: 90%"></div>
          </div>
        </div>
      </div>
      <div class="cv-languages">
        <h2>Languages</h2>
        <div class="language">
          <p>English</p>
          <div class="language-bar">
            <div class="language-level" style="width: 95%"></div>
          </div>
        </div>
        <div class="language">
          <p>Chinese</p>
          <div class="language-bar">
            <div class="language-level" style="width: 55%"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="cv-main">
      <div class="cv-work">
        <h2>Work Experience</h2>
        <div class="experience">
          <h3>Front End Developer / Onwards Media Group</h3>
          <p>Jul 2018 - Oct 2018</p>
          <p>Developed a website using Javascript, ReactJS and HTML</p>
        </div>
        <div class="experience">
          <h3>Boba Barista / Liho Tea</h3>
          <p>Mar 2019 - Jul 2019</p>
          <p>Managed a team and cordinate to run daily operations </p>
        </div>
        <div class="experience">
          <h3>Admin Logistics / Singapore Armed Forces (SAF)</h3>
          <p>Jul 2019 - Jan 2021</p>
          <p>Managed the stock supply and stock count</p>
        </div>
      </div>
      <div class="cv-education">
        <h2>Education</h2>
        <div class="education">
          <h3>Temasek Polytechnic</h3>
          <p>2016-2019</p>
          <p>Balchelors of Information Technology</p>
        </div>
        <div class="education">
          <h3>St Patrick Secondary School</h3>
          <p>2011 - 2015</p>
          <p>O levels </p>
        </div>
        <div class="education">
          <h3>Udemy</h3>
          <p>2021-2022</p>
          <p>Unreal Engine 5 C++ Developer: Learn C++ & Make Video Game Certificate</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cv-container {
  display: grid;
  grid-template-columns: 1fr 2fr; 
  grid-template-areas: "sidebar main"; 
}

.cv-sidebar {
  flex: 1;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.cv-profile img {
  width: 80%;
  border-radius: 50%;
  margin-bottom: 20px;
}

.cv-profile h2 {
  font-size: 24px;
  margin: 0;
}

.cv-profile p {
  font-size: 16px;
  margin: 4px 0;
}

.cv-skills,
.cv-languages {
  margin-top: 20px;
}

.skill,
.language-bar {
  margin-bottom: 10px;
}

.language-bar {
  background-color: #ccc;
  height: 10px;
  border-radius: 5px;
}

.language-level {
  background-color: #4caf50;
  height: 100%;
  border-radius: 5px;
}
.skill p {
  margin: 0;
}

.skill-bar {
  background-color: #ccc;
  height: 10px;
  border-radius: 5px;
}

.skill-level {
  background-color: #4caf50;
  height: 100%;
  border-radius: 5px;
}

.cv-main {
  flex: 2;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.cv-work h2,
.cv-education h2 {
  font-size: 24px;
  margin: 0;
}

.experience,
.education {
  margin-top: 20px;
}

.experience h3,
.education h3 {
  font-size: 20px;
  margin: 0;
}

.experience p,
.education p {
  font-size: 16px;
  margin: 4px 0;
}
.cv-work,
.cv-education {
  margin-top: 20%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  margin: 0 10px;
}

</style>
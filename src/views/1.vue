<template>
  <div class="center-top-container">
    <iframe
      width="60%"
      height="50%"
      src="https://www.youtube.com/embed/PQdVIN7Orqc"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <div class="box">
      <p>Created this video in accordance to an assignment<br />
        1. Template Syntax<br />
        a. Text Interpolation<br />
        b. Raw HTML [v-html]<br />
        c. Attribute Bindings [v-bind:id]<br />
        d. JavaScript expressions inside syntax<br />
        2. Methods<br />
        3. Reactivity Fundamentals<br />
        4. Computed Properties<br />
        5. Class and Style Bindings<br />
        a. Binding HTML class [v-bind:class]<br />
        b. Binding Inline Styles [v-bind:style]<br />
        6. List Rendering<br />
        a. v-for with an Object<br />
        b. v-for with a Range<br />
        c. v-for on<br />
        d. v-for with v-if<br />
        e. v-for with a Component<br />
        7. Event Handling: Listening to Events [v-on:click]<br />
        a. Inline Handlers<br />
        b. Method Handlers<br />
        8. Form Input Bindings<br />
        a. v-models<br />
        b. v-model modifiers [.lazy , .number, .trim]<br />
        9. Watchers<br />
        10. Components<br />
        a. Props<br />
        b. Events [$emit]<br />
        c. Slots<br />
        11. Router</p>
    </div>
  </div>
</template>

<style scoped>
.center-top-container {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center; /* Center horizontally */
  justify-content: flex-start; /* Align to the top */
  height: 100vh; /* 100% of the viewport height */
}

.video-container {
  margin-bottom: 20rem; /* Add some spacing between video and text */
}

.box {
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 100%;
  overflow: auto;
  background-color: #f1f1f1;
  white-space: pre-line; /* Preserve line breaks and spaces */
}
</style>




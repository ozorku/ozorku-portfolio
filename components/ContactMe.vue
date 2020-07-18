<template>
  <div class="contact">
    <div class="container">
      <h1 style="color: #0A1D2B">Lets Work <br />Together</h1>
      <form>
        <div class="row">
          <label for="name">Name</label>
          <input type="text" />
        </div>
        <div class="row">
          <label for="email">Email Address</label>
          <input type="text" />
        </div>
        <div class="row">
          <label for="message">Message</label>
          <textarea></textarea>
        </div>
        <button>Send Message</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  background-image: url("../assets/images/contact-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 400px;
  width: 100%;
  padding: 5rem 0;

  form {
    background: white;
    max-width: 700px;
    margin: 20px auto 0 auto;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 7% 10%;
  }
  label {
    font-weight: 600;
  }
  input,
  textarea {
    background: #f9f9f9;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 5px;
    width: 100%;
    display: block;
    padding: 15px 10px;
  }

  textarea {
    height: 130px;
  }

  .row {
    margin-bottom: 5%;
  }

  button {
    display: flex;
    margin: 10% auto 0 auto;
  }
}
</style>

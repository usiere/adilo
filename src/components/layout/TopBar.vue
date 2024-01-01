<template>
      <!-- topbar to be diaplayed as a component on the main page -->
    <div class="main-top">
        <span>
            <img src="../../assets/logo.png" width="100px" alt="">
        </span>

        <nav>
            <span class="text1">Projects</span>
            <span class="text1">Tools & Apps</span>
            <span class="text1"> Channels</span>
            <span class="text1">Contacts</span>
            <span class="text1">Analytics</span>
            <span class="text1">Settings</span>

        </nav>
        <div class="user-flex">
            <span class="text1">
                Help
               </span>
            <span>|</span>
            <div class="profile-row">
                <img src="../../assets/user.png" width="40px" height="40px" alt="">
                <div class="user-col">
                    <span class="user-col-text1">Cody Fisher</span>
                <span class="user-col-text2">code@1998.gmail.com</span>
                </div>
            </div>
         
       
        </div>
    </div>
</template>


<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

@font-family-poppins: 'Poppins', sans-serif;
@border-color: #E2E5ED;
@text-color: #707070;
@grey-color: grey;

* {
  font-family: @font-family-poppins;
}

.main-top {
  /* height: 8vh; */
  display: grid;
  grid-template-columns: 20% 45% 35%;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid @border-color;

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .text1 {
    text-align: left;
    font: normal normal medium 18px/27px @font-family-poppins;
    letter-spacing: 0px;
    color: @text-color;
    opacity: 1;
  }

  .user-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20vw;
    align-items: center;
    margin-left: 10vw;

    .text1{
      color: black;
      font-weight: 700;
    }

    .profile-row {
      display: flex;
      flex-direction: row;
    }

    .user-col {
      display: flex;
      flex-direction: column;
      margin-left: 0.5vw;

      .user-col-text1 {
        font-weight: 900;
        font-size: 18px;
      }

      .user-col-text2 {
        font-weight: 200;
        font-size: 12px;
        color: @grey-color;
      }
    }
  }
}

</style>
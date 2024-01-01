<template>
    <!-- sidebar to be diaplayed as a component on the main page -->
    <div class="main-side">
        <nav class="nav-con">
            <span class="nav-item-1">
                <b-icon icon="film" aria-hidden="true"></b-icon>
                &nbsp; &nbsp; &nbsp;
                My Recordings</span>
        
                <span class="nav-item-2">
                <b-icon  icon="share" aria-hidden="true"></b-icon>
                &nbsp; &nbsp; &nbsp;
                Requested</span>
        </nav>
    </div>
</template>


<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');

@font-family-poppins: 'Poppins', sans-serif;
@primary-bg-color: #f9fbfc;
@secondary-bg-color: #E2E5ED;
@border-color: #0DABD838;
@text-color: #000000;
@font-size: 14px;
@font-weight: 200;
@item-margin: 10px;
@item-padding: 15px;
@item-width: 17vw;

* {
    font-family: @font-family-poppins;
}

.main-side {
    min-height: 90vh;
    background: @primary-bg-color;
    /* opacity: 0.3; */
}

.nav-con {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .nav-item-1,
    .nav-item-2 {
        top: 127px;
        left: 18px;
        opacity: 1;
        padding: @item-padding;
        width: @item-width;
        margin: @item-margin;
        font-size: @font-size;
        font-weight: @font-weight;
    }

    .nav-item-1 {
        background: @secondary-bg-color no-repeat padding-box;
        border: 1px solid @border-color;
        border-radius: 10px;
        margin-top: 50px;
    }
}


</style>
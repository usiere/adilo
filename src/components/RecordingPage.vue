<template>
    <div class="main">
        <!-- record section div -->
        <div>
            <span class="preview-text">
                <span class="record-icon"> <b-icon icon="record-circle" aria-hidden="true"></b-icon></span>
                Live Preview</span>
            <div class="record-section">

            </div>
        </div>


        <!-- recording button -->

        <button class="record-button">Start recording</button>
    </div>
</template>


<script>

export default {
    name: 'RecordingPage',

}
</script>

<style lang="less">
// Variables
@main-text-color: #21455E;
@button-background-color: #0DABD8;
@border-radius: 8px;
@button-border-radius: 32px;
@button-text-color: white;
@margin-size: 15px;
@top-margin: 10vh;

.main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .record-section {
        top: 169px;
        left: 318px;
        width: 965px;
        height: 518px;
        background: @main-text-color 0% 0% no-repeat padding-box;
        border-radius: @border-radius;
        opacity: 1;
        margin-top: @top-margin;
    }

    .record-button {
        top: 755px;
        left: 683px;
        width: 234px;
        height: 63px;
        background: @button-background-color 0% 0% no-repeat padding-box;
        border-radius: @button-border-radius;
        opacity: 1;
        color: @button-text-color;
        margin: @margin-size;
        border: none;
    }
}

.preview-text {
    position: relative;
    top: 8vh;
}

.record-icon {
    color: red;
}
</style>
<template>
    <!-- recording modal to appear when the 'Start Recording' button is clicked -->
    <div class="main-modal">
        <span class="text1">save the recording in</span>
        <div>
            <select id="selectField" class="custom-select">
                <option value="option1">Select a Project</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>

        <div class="toggle-row">
            <span class="text2">Record screen</span>
            <label class="switch">
                <input type="checkbox" v-model="toggle1" />
                <span class="slider"></span>
            </label>
        </div>

        <div class="toggle-row">
            <span class="text2">Record camera</span>
            <label class="switch">
                <input type="checkbox" v-model="toggle2" />
                <span class="slider"></span>
            </label>
        </div>

        <div class="toggle-row">
            <span class="text3">Record mic</span>
            <label class="switch">
                <input type="checkbox" v-model="toggle3" />
                <span class="slider"></span>
            </label>
        </div>

        <div class="record-btn-con">
            <router-link to="recording">
            <button class="btn">
                Start Recording
            </button>
        </router-link>
        </div>
    
    </div>
</template>


<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');

@font-family-poppins: 'Poppins', sans-serif;
@primary-color: #0DABD8;
@secondary-color: #21455E;
@border-color: #ccc;
@background-color: #f2f2f2;
@text-color: #333;
@slider-background: #ccc;
@slider-checked-background: #21f34f;
@slider-thumb-background: white;

* {
    font-family: @font-family-poppins;
}

/* Toggle Switch Styles */
.main-modal {
    display: flex;
    flex-direction: column;

    .toggle-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 15px;
    }

    .text1 {
        text-align: left;
        font: normal normal 300 16px/25px @font-family-poppins;
        letter-spacing: 0px;
        color: #000000;
        opacity: 1;
        font-size: 13px;
    }

    .text2 {
        text-align: left;
        font: normal normal medium 18px/27px @font-family-poppins;
        letter-spacing: 0px;
        color: @secondary-color;
        opacity: 1;
        font-size: 15px;
        font-weight: 700;
    }

    .custom-select {
        width: 30vw;
        padding: 10px;
        border: 1px solid @border-color;
        border-radius: 5px;
        background-color: @background-color;
        color: @text-color;
        font-size: 13px;
        outline: none;
        margin-top: 5px;
        margin-bottom: 20px;
    }

    .btn {
        top: 138px;
        left: 1106px;
        width: 250px;
        height: 42px;
        background: @primary-color;
        border-radius: 28px;
        opacity: 1;
        border: none;
        color: white;
        font: normal normal normal 14px/21px @font-family-poppins;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        margin-top: 50px;
        margin-bottom: 20px;
    }

    .btn:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        color: black;
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;

        input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: @slider-background;
            transition: 0.4s;
            border-radius: 34px;

            &:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: @slider-thumb-background;
                transition: 0.4s;
                border-radius: 50%;
            }
        }

        input:checked+.slider {
            background-color: @slider-checked-background;
        }

        input:focus+.slider {
            box-shadow: 0 0 1px @slider-checked-background;
        }

        input:checked+.slider:before {
            transform: translateX(26px);
        }
    }

    .record-btn-con{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>

<script>


export default {
    data() {
        return {
            toggle1: false,
            toggle2: false,
            toggle3: false,
        }

    },
}
</script>
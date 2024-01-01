<template>
  <div>

    <!-- grid1 -->
    <div class="grid1">
      <div class="grid1-left">
        <SideBar />
      </div>
      <div class="grid1-right">


        <!-- first top section -->
        <div class="txt3">
          <span>Snapbyte</span>
          &nbsp;&nbsp;&nbsp;
          <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
          &nbsp;&nbsp;&nbsp;
          <span>My Recordings</span>
        </div>

        <br>


        <div class="control-sec">
          <span class="txt1"> My Recordings
            <span class="txt1-no">25</span>
          </span>

          <div class="btn-sec">
            <button class="btn1">
              <b-icon icon="arrow-down-up" aria-hidden="true"></b-icon>
    
              By Date
            </button>


            <button class="btn1">
              <b-icon icon="funnel" aria-hidden="true"></b-icon>
              Add Filter
            </button>


            <button class="btn2">
              <b-icon icon="camera-video" aria-hidden="true"></b-icon>
              New Request
            </button>

            <button class="btn3" v-b-modal.modal-1>
              <b-icon icon="record-circle" aria-hidden="true"></b-icon>
              Start Recording
            </button>
          </div>


        </div>
        <div class="spinner-con" v-if="!showTable">
          <b-spinner large></b-spinner>
          &nbsp; &nbsp;
          <span>fecthing recordings ....</span>
        </div>



        <!-- table section -->

        <table v-if="showTable">
          <thead>
            <tr>
              <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
            </tr>
          </thead>
          <br>
          <tbody>
            <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
              <td><img :src="require(`@/assets/${row[0]}`)" width="110px" height="60px" alt=""></td>
              <td>
                <div class="text-col1">
                  <span class="text-col1-txt1">{{ row[1] }}</span>
                  <span class="text-col1-txt2">{{ row[2] }}</span>
                </div>
              </td>
              <td><span class="txt2">{{ row[3] }}</span></td>
              <td><span class="txt2">{{ row[4] }}</span></td>
              <td><span class="txt2">{{ row[5] }}</span></td>
              <td><span> <b-icon icon="three-dots-vertical" aria-hidden="true"></b-icon></span></td>
            </tr>
            <tr>
              <td colspan="6" style="height: 20px;"></td>
            </tr>
            <br> &nbsp; &nbsp;
          </tbody>
          <br><br>
        </table>

        <!-- modal section -->

        <b-modal id="modal-1" title="New Recording" hide-footer centered>
          <RecordModal />
        </b-modal>
      </div>
    </div>




  </div>
</template>


<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');

/* Variables */
@primary-font: 'Poppins', sans-serif;
@primary-color: #21455E;
@secondary-color: #637C8E;
@accent-color1: #0DABD8;
@accent-color2: #EF5350;

* {
  font-family: @primary-font;
}

.txt1 {
  text-align: left;
  font: normal normal 300 24px/35px @primary-font;
  letter-spacing: 0px;
  color: #000000;
  font-weight: 200;
}

.txt1-no {
  text-align: left;
  font: normal normal 600 24px/35px @primary-font;
  letter-spacing: 0px;
  color: @secondary-color;
  margin-left: 10px;
}

.txt2 {
  /* UI Properties */
  text-align: left;
  font: normal normal normal 14px/26px @primary-font;
  letter-spacing: 0px;
  color: @primary-color;
  opacity: 1;
}

.txt3 {
  font: normal normal normal 14px/26px @primary-font;
  letter-spacing: 0px;
  color: @secondary-color;
  opacity: 1;
}

/* Buttons */
.btn {
  top: 138px;
  border-radius: 28px;
  opacity: 1;
}

.btn1 {
  .btn;
  left: 823px;
  width: 118px;
  height: 42px;
  border: 1px solid #E2E5ED;
  background-color: white;
  color: @secondary-color;
  font-size: 13px;
}

.btn2 {
  .btn;
  left: 1106px;
  width: 164px;
  background: @accent-color1;
  border: none;
  color: white;
  font-size: 13px;
}

.btn3 {
  .btn;
  left: 1282px;
  width: 179px;
  background: @accent-color2;
  border: none;
  color: white;
  font-size: 13px;
}

.btn:hover, .btn1:hover, .btn2:hover, .btn3:hover {
  opacity: 0.7;
}

/* Grid */
.grid1 {
  display: grid;
  grid-template-columns: 20% 80%;
}

.spinner-con {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

/* Table */
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;
}

th:nth-child(2),
td:nth-child(2) {
  width: 45%;
}

tbody tr {
  // display: block;
  margin-bottom: 20px; 
}

tbody td {
  padding: 10px; 
}

tbody tr:last-child {
  margin-bottom: 0;
}

/* Text Column */
.text-col1 {
  display: flex;
  flex-direction: column;
}

.text-col1-txt1 {
  text-align: left;
  font: normal normal normal 14px/21px @primary-font;
  letter-spacing: 0px;
  color: @primary-color;
  opacity: 1;
}

.text-col1-txt2 {
  text-align: left;
  font: normal normal normal 12px/18px @primary-font;
  letter-spacing: 0px;
  color: #A3BAC6;
  opacity: 1;
}

/* Grid1 Right Section */
.grid1-right {
  align-items: center;
  flex-direction: column;
  padding: 30px;
}

/* Control Section */
.control-sec {
  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: space-between;
  margin-bottom: 5vh;
}

.btn-sec {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>



<script>
import SideBar from './layout/SideBar.vue'
import RecordModal from './modals/NewRecording.vue'

export default {
  name: 'comp-1',
  components: {
    SideBar,
    RecordModal
  },
  data() {
    return {
      headers: ['Recordings', 'Title', 'Views', 'Size', 'Last Modified'],
      rows: [
        ['thumbnail1.png', 'Getting it right the first time', 'The video description is shown here if the user has added it', '324', '923 KB', '3 months ago'],
        ['thumbnail2.png', 'Getting it right the first time', 'The video description is shown here if the user has added it', '324', '923 KB', '3 months ago'],
        ['thumbnail3.png', 'Getting it right the first time', 'The video description is shown here if the user has added it', '324', '923 KB', '3 months ago'],
        ['thumbnail4.png', 'Getting it right the first time', 'The video description is shown here if the user has added it', '324', '923 KB', '3 months ago'],
        ['thumbnail5.png', 'Getting it right the first time', 'The video description is shown here if the user has added it', '324', '923 KB', '3 months ago']
      ],
      toggle: false,
      showTable: false
    }



  },
  mounted() {
    // mocking the fetching of the recordings from api
    setTimeout(() => {
      this.showTable = true;
    }, 4000); 
  }
}
</script>
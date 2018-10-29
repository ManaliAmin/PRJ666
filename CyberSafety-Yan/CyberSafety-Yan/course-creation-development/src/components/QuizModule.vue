
<template>
  <div class="hello">
    <h1>Quiz Module</h1>
    <div v-for="(row, index2) in questionRows" :key="index2">
        <p>You can create a new question and select a type:</p>
        <input type="text" id="newQuestion" v-model="row.question" placeholder="Question" /><br>
        <input type="radio" name="questionType" v-model="row.multipleChoice" value="multipleChoice" checked>Multiple Choice<br>
        <input type="radio" name="questionType" v-model="row.trueFalse" value="trueFalse">True or False<br>
        <br>
        <div v-for="(row, index) in rows" :key="index">
            <input type="text" id="newAnswer"  placeholder="Answer" />
            Correct Answer?<input type="checkbox"  name="correct" value="Correct"><br>
        </div>
        <button v-on:click="addAnswer()" id="addVideo">Add New Answer</button>
        <br>
        </div>
        <button v-on:click="addQuestion()" id="addVideo">Add New Question</button>
        <br>
    
   

    
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'QuizModule',
    mounted() {
        //this.getFromMiddleMan();
    },
    prop: {
    },
    data() {
        return {
            rows: [],
            questionRows: [],
            answer: '',
            true: '',
            info: '',
            title: "",
            contentType: 'video',
            content: "",
            showModal: true
        }
    },
  
    methods: {
        addAnswer: function() {
            var elem = document.createElement('div');
            this.rows.push({
                answer: "",
                true: ""
                
            });
            //this.sendToMiddleMan();
            
        },
        addQuestion: function() {
            var elem = document.createElement('div');
            this.questionRows.push({
                question: "",
               
                
            });
            //this.sendToMiddleMan();
            
        },
        showVideo: function(url) {
            alert(url);
        },
        show(url) {
            this.$modal.show('test');
            this.name = url;
        },
        hide () {
            this.$modal.hide('test');
        }
        
       
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    background: #fff;
    margin: 10px;
    padding: 10px;
    padding-top: 0px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  background: #818CC0;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 3px #46484A;
  border-radius: 2px; 
  border-left: 5px solid #5F678D;
}
li h3 {
    margin: 0;
    padding: 0;
    color: #DEE4E8;

}
li p {
    margin: 0;
    padding: 0;
    color: #F1F8FD;
    font-size: 12px;

}
button {
    float: right;
    border: 2px solid #A0AFEF;
    border-radius: 2px; 
    margin: -32px 0px;
    background: #5F678D;
    color: #d8d8d8;
    text-transform: uppercase;
    font-weight: bold;
    padding: 6px 12px;
}
button#addVideo {
    float: none;
    margin: 10px 0;
}
li button:hover {
    background: #6A75A0;
    cursor: pointer;
}
li::after {
    clear: both;
}
a {
  color: #42b983;
}
input[type=text] {
  border-radius: 8px 8px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  width: 200px; 
}
input#newQuestion {
    width: 500px; 
    padding: 10px;
    font-size: 20px;
}
span {
    font-size: 12px;
}
input:focus{
  outline: none;
}
</style>

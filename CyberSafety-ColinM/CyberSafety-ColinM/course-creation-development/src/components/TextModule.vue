<template>
    <main>
        <h1>Text Module Creation</h1>
        <form id="textStuff" @submit.prevent= "addText">
            <label for="ttl">Enter a title for your module: </label>
            <input type="text" id= "ttl"  v-model= "moduleTitle" />
            <br/>
            <br/>
            <br/>
            <label for="editor1"><strong>Enter free form text to fill the module:</strong></label>
            <br/>
            <br/>
            <input id="editor1" type="hidden" name="content" >
            <VueTrix inputId="editor1" v-model= "editorContent"/>
            <br/>
            <br/>
            <input type="submit" value= "Submit">
        </form>
        <TextModal ref="modal" v-on:hidden= "clear" v-bind:moduleTitle= "moduleTitle" v-bind:editorContent= "editorContent" v-bind:courseID= "courseID" v-bind:moduleID= "moduleID" v-bind:contentType= "contentType" ></TextModal>
    </main>
</template>

<script>
    import router from '../router'
    import TextModal from './TextModal.vue';
    export default {
        components: {
            TextModal
        },
        data() {
            return {
                moduleTitle: '',
                courseID: 0,
                moduleID: 0,
                contentType: '',
                editorContent: null,
                submitted: false
            }
        },
        methods: {
           
            addText: function(){
                this.courseID = 5;
                this.moduleID = 9;
                this.contentType = 'text';
                this.submitted = true;
                console.log(this);
                this.$refs.modal.show()
            },

            showDemo: function(){
                this.moduleTitle = this.$route.query.moduleTitle;
                this.moduleID = this.$route.query.moduleID;
                this.courseID = this.$route.query.courseID;
                this.contentType = this.$route.query.contentType;
                this.module.editorContent = this.$route.query.editorContent;
                this.submitted = true;
                this.$refs.modal.show()
            },

            clear: function(){
                this.submitted = false;
                this.$refs.modal.hide()
            }
        },
        mounted: function () {
            if(this.$route.query.moduleTitle && this.$route.query.moduleID && this.$route.query.moduleTitle 
                 && this.$route.query.moduleTitle && this.$route.query.moduleTitle){
                     showDemo();
            }
        }
    }   
</script>
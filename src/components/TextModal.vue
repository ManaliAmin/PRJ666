<template>
     <modal v-show="submitted" name= "textM" height="auto" :scrollable="true" :adaptive="true">
        <header>
            <h2>{{moduleTitle}}</h2>
        </header>
        <body>
            <div v-html="editorContent"></div>       
        </body>
        <footer>
            <router-link :to="{ name: 'CreateCourse', query: { courseID: courseID, moduleID: moduleID, contentType: contentType, moduleTitle: moduleTitle, editorContent: editorContent }}" tag="button">Finished Module</router-link>
        </footer>
    </modal>
</template>

<script>
    export default {
        props: {
            courseID: Number,
            moduleID: Number,
            contentType: String,
            moduleTitle: String,
            editorContent: String
        },
        data() {
            return {
                submitted: false
            }
        },
        methods: {
            show () {
                this.submitted = true;
                console.log('Modal');
            },
            hide () {
                this.$modal.hide('textM');
                this.submitted = false;
                this.$emit("hidden")
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.$modal.show('textM');
            })
        }
    }   
</script>

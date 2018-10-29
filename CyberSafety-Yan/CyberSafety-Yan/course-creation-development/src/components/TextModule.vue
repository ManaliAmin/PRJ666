<template>
    <main>
        <button v-on:click= "show()">Show Modal</button>
        <modal name="textM">
            <header>
                <h2>Text Module Set-Up Wizard</h2>
            </header>
            <body>
                <form id="textstuff" @submit= "validText">
                    <input type="text" @input="addEvent" @change="addEvent" />
                    <VueTrix inputId="editor1" v-model="editorContent"/>
                    <input type="submit" value="Submit">
                </form>
            </body>
        </modal>
    </main>
</template>

<script>
    export default {
        methods: {
            show () {
                this.$modal.show('textM');
            },
            hide () {
                this.$modal.hide('textM');
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.$modal.show('textM');
            })
        }
    }   
</script>

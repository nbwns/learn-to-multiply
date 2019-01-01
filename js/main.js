new Vue({
    el: "#multiply",
    data() {
        return {
            tables: [2,3,4,5,10],
            selectedTable: 2,
            answer: null,
            random: 0,
            randomMax: 10,
            success: null
        }
    },
    methods:{
        newQuestion(){
            this.success = null;
            this.answer = null;
            this.random = chance.integer({ min: 0, max: this.randomMax });
            this.$refs.answerF.$el.focus()
        },
        select(table){
            this.selectedTable = table;
            console.log(this.selectedTable);
            this.newQuestion();
        },
        check(){
            let verify = this.random * this.selectedTable;
            console.log(verify, this.answer);
            if(verify == this.answer){
                this.success = true;
            }
            else{
                this.success = false;
            }
        }
    },
    created(){
        this.newQuestion();
    }
})
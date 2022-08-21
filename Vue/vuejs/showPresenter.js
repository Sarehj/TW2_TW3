const Show = {
    props:["hash"],
    data(){
        return {
            flag: this.$props.hash==window.location.hash
        }
    },
 
    created(){
        window.addEventListener('hashchange', ()=> {
            this.flag = this.$props.hash==window.location.hash
            
        })
    
    },

    render(h) {
        return this.flag?this.$slots.default():'';
    }
}
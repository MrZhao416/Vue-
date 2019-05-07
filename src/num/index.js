export const moduelB={
    state:{
        shoplist:[],
    },
    getters:{
        sumprice(state){
            if(!state.shoplist) return 0;
            var sum=0;
            state.shoplist.forEach(element => {
                sum+=element.n*element.price
            });
            return sum;
        },
        goodsLength(state){
            if(!state.shoplist.length===0) return 0;
            var sum=0;
            state.shoplist.forEach(element => {
                sum+=element.n
            });
            return sum;
        }
            
    },
    mutations:{
        addShoplist(state,payload){
            var bool=state.shoplist.some((item)=>{
                return item.id===payload.id;
            })

            if(bool){
                state.shoplist.forEach(element => {
                    ++element.n
                });
            }else{
                state.shoplist.push(payload);
            }
        },
        jian(state,payload){
            if(state.shoplist[payload]["n"]>0){
                --state.shoplist[payload]["n"];
            }
        },
        add(state,payload){
            ++state.shoplist[payload]["n"];
        },
        remove(state,id){
            state.shoplist=state.shoplist.filter((item)=>item.id!==id)
        }
    },
    actions:{
        numAdd(content,payload){
            content.commit('add',payload)
        },
        numJian(content,payload){
            content.commit('jian',payload)
        }   
    }   
}
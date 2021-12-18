import { createStore } from "vuex";
import router from "../router"

export const store = createStore({
  state:{
    userEmail:"",
    userPassword:"",
    userName:"",
    Transactions:[],
    Budgets:[],
    Subscriptions:[],
    Loans:[],
    Savings:[],
    Quotes:[]
  },
  
  mutations:{
setUser(state,payload ){
state.userEmail = payload.email;
state.userPassword = payload.password;
state.userName = payload.name;
window.localStorage.setItem("email", payload.email );
window.localStorage.setItem("userName", payload.name)
},
addTransaction(state,payload){
  state.Transactions.push(payload)
}
,
addBudget(state,payload){
  state.Budgets.push(payload)
},
addSubscription(state,payload){
  state.Subscriptions.push(payload)
},
addLoan(state,payload){
  state.Loans.push(payload)
},
addSaving(state,payload){
  state.Savings.push(payload)
},
addQuote(state,payload){
  state.Quotes.push(payload)
}
  },
  actions:{
    loginUser({commit},payload){
      commit("setUser",payload)
      router.push("/dash")
    },
    addTransaction({commit}, payload){
      commit("addTransaction", payload)
    },
    addSubscription({commit}, payload){
      commit("addSubscription", payload)
    },
    addBudget({commit}, payload){
      commit("addBudget", payload)
    },
    addLoan({commit}, payload){
      commit("addLoan", payload)
    }
  }
});

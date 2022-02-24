import { createStore } from "vuex";
import router from "../router"

export const store = createStore({
  state:{
    userEmail:"",
    userPassword:"",
    userName:"",
    Cards:[],
    Chart:null,
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
window.sessionStorage.setItem("email", payload.email );
window.sessionStorage.setItem("userName", payload.name)
},
deleteUser(state){
  state.userEmail = "";
  state.userPassword = "";
  state.userName = "";
  window.sessionStorage.removeItem("email");
  window.sessionStorage.removeItem("userName");
  },
addCard(state,payload){
  state.Cards.push(payload)
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
    logOutUser({commit}){
      commit("deleteUser")
      router.push("/login")
    },
    addCard({commit}, payload){
      commit("addCard", payload)
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
    },
    addQuote({commit}, payload){
      commit("addQuote", payload)
    }
  }
});

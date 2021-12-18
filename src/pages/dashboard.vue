<template>
  <NavBar />
  <div class="dashboard-border-flex-container">
    <div class="dashboard-special">
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Cards</h4>
            <a  href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
      <Card />
      </div>
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4>All Trasactions</h4>
        <a @click="modalAction = 'Transaction'" href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
        <div v-for="transaction in Transactions" :key="transaction.id">
        <Transaction 
          :userName="transaction.name"
          :userTransactAmount="transaction.amount"
          :userTransactDate="transaction.date"
          button-style="color: #f03c3c"
        /></div>
  </div>
   <div class="dashboard-border hide-on-med-and-down">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Report</h4>
            <a  href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
      <Chart />
      </div>
      </div>

    
         <div class="dashboard-special">
      <div class="dashboard-border hide-on-large-only">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Report</h4>
  <a href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
        <img
          v-lazyload
          data-img-url="/img/graph.png"
          class="dashboard-graph-img"
          alt="graph"
        />
      </div>
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Budget</h4>
           <a @click="()=>{
             modalAction = 'Budget';
             }" href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
        <div v-for="budget in Budgets" :key="budget.id">
        <Budgets 
        :totalCash="budget.totalCash"
        :budgetName="budget.name"
        :budgetType="budget.type"
        :budgetAmount="budget.amount"
        /></div>
      </div>
      <div class="dashboard-special-2">
        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4>Suscriptions</h4>
             <a @click="modalAction = 'Subscription'"  href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
          </div>
            <div v-for="subscription in Subscriptions" :key="subscription.id">
          <Suscriptions
            :suscriptionName="subscription.name"
            :suscriptionDate="'Due ' + subscription.date"
            :suscriptionPrice="subscription.amount"
          /></div>
        </div>
        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4 class="disp-flex">Loans</h4>
              <a @click="modalAction = 'Loan'" href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
          </div>
          <div v-for="loan in Loans" :key="loan.id">
      <Loans 
      :loanName="loan.name"
      :dateTaken="loan.date"
      :loanAmount="loan.amount"
      /></div>
        </div>
      </div>
      <div class="dashboard-special-2">
        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4>Savings</h4>
          <a  href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
          </div>
         <Savings />
        </div>

        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4 class="disp-flex">Financial Advice</h4>
              <a  href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
          </div>
          <Quotes />
        </div>
      </div>
    </div>
    </div>
 
   <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div v-if="modalAction === 'Transaction'" style="color:#252525" class="modal-content">
      <h4>Create New Transaction</h4>
      <form style="color:#252525" @submit.prevent="submitModalContent">
          <div class="input-field">
            <input id="name" type="text"  v-model="modalContentName" />
            <label  for="name">Transaction Name</label>
          </div>
          <div class="input-field">
            <input id="transAmount" type="text"  v-model="modalContentAmount" />
            <label  for="amount">Amount</label>
          </div>
             <div class="input-field">
            <input id="transDate" type="date"  v-model="modalContentDate" />
            <label  for="transDate">Date</label>
          </div>
           <div class="center-align" ><button type="submit" class="waves-effect waves-light btn login-button">Create</button></div>
      </form>
    </div>
      <div v-else-if="modalAction === 'Subscription'" style="color:#252525" class="modal-content">
      <h4>Create New Subscription</h4>
 <form style="color:#252525" @submit.prevent="submitModalContent">
          <div class="input-field">
            <input id="name" type="text"  v-model="modalContentName" />
            <label  for="name">Subscription Name</label>
          </div>
          <div class="input-field">
            <input id="subAmount" type="text"  v-model="modalContentAmount" />
            <label  for="subAmount">Amount</label>
          </div>
             <div class="input-field">
            <input id="subDate" type="date" v-model="modalContentDate" />
            <label  for="subDate">Due Date</label>
          </div>
           <div class="center-align" ><button type="submit" class="waves-effect waves-light btn login-button">Create</button></div>
      </form>
      </div>
       <div v-else-if="modalAction === 'Budget'" style="color:#252525" class="modal-content">
      <h4>Create New Budget Plan</h4>
 <form style="color:#252525" @submit.prevent="submitModalContent">
          <div class="input-field">
            <input id="budgetName" type="text"  v-model="modalContentName" />
            <label  for="budgetName">Budget Name</label>
          </div>
          <div class="input-field">
            <input id="budgetAmount" type="text"  v-model="modalContentAmount" />
            <label  for="budgetAmount">Amount</label>
          </div>
             <div class="input-field">
            <input id="budgetTotalCash" type="text"  v-model="budgetTotalAmount" />
            <label  for="budgetTotalCash">Total Amount</label>
          </div>
             <div class="input-field">
            <select v-model="budgetType">
              <option value="" disabled selected>Choose budget type</option>
              <option  value="Automated">Automated</option>
              <option value="Manual">Manual</option>
            </select>
            <label>Budget Type</label>
          </div>
           <div class="center-align" ><button type="submit" class="waves-effect waves-light btn login-button">Create</button></div>
      </form>
      </div>
      <div v-else-if="modalAction === 'Loan'" style="color:#252525" class="modal-content">
      <h4>Add new loan</h4>
 <form style="color:#252525" @submit.prevent="submitModalContent">
          <div class="input-field">
            <input id="loanName" type="text"  v-model="modalContentName" />
            <label  for="loanName">Loan Name</label>
          </div>
          <div class="input-field">
            <input id="loanAmount" type="text"  v-model="modalContentAmount" />
            <label  for="loanAmount">Amount</label>
          </div>
             <div class="input-field">
            <input id="loanDate" type="date" v-model="modalContentDate" />
            <label  for="loanDate">Due Date</label>
          </div>
           <div class="center-align" ><button type="submit" class="waves-effect waves-light btn login-button">Create</button></div>
      </form>
      </div>
  </div>
 <!-- Modal Structure -->
  <Footer />
</template>

<script>
import Transaction  from "../components/transaction.vue";
import Footer from "../components/footer.vue";
import NavBar from "../components/navBar.vue";
import Budgets from "../components/budgets.vue";
import Suscriptions from "../components/suscriptions.vue";
import Quotes from "../components/quotes.vue";
import Savings from "../components/savings.vue";
import Card from "../components/card.vue";
import Chart from "../components/chart.vue";
import Loans from "../components/loans.vue";
import {mapState, mapActions} from "vuex"
import M from "materialize-css";

export default {
  name: "DashBoard",
  components: {
    Transaction,
    Footer,
    NavBar,
   Budgets,
    Suscriptions,
    Quotes,
    Savings,
    Card,
    Chart,
    Loans
  },
  data(){
    return{
     modalAction:"",
     modalContentName:"",
     modalContentAmount:null,
     modalContentDate:"",
       budgetTotalAmount:null,
     budgetType:"",
    
    }
  },
  computed: {...mapState([
"userEmail","Transactions","Subscriptions", "Budgets","Loans"
  ]),

  },
  methods:{
    ...mapActions([
      "addTransaction", "addSubscription","addLoan","addBudget"
    ]),
    initSelect(){
    const elemS=  document.querySelector('select');
    const instancesSelect =  M.FormSelect.init(elemS);
     console.log(elemS);

    return  instancesSelect;

  },
  submitModalContent(){
    const modalContent = {
        id: 0,
        name: this.modalContentName,
        amount: this.modalContentAmount,
        date: this.modalContentDate
    }
    if(this.modalAction == "Transaction"){
      this.addTransaction(modalContent)
 this.closeModal()
    }
    else if(this.modalAction == "Subscription"){
       this.addSubscription(modalContent)
    this.closeModal()
    }
    else if(this.modalAction == "Loan"){
 this.addLoan(modalContent)
    this.closeModal()
    }
    else if(this.modalAction == "Budget"){
      let budgetModalContent = {
         id: 0,
        name: this.modalContentName,
        amount: this.modalContentAmount,
        totalCash:this.budgetTotalAmount,
        type:this.budgetType
      }
        this.addBudget(budgetModalContent)
    this.closeModal()
    }
  },
    closeModal(){
      this.modalAction = ""
      this.modalContentName = ""
      this.modalContentAmount = null
      this.modalContentDate = ""
      this.budgetTotalAmount = null
      this.budgetType = ""
    const elem = document.querySelector('.modal');
        let instance = M.Modal.getInstance(elem);
       return instance.close();

    }
  },
  mounted(){
     document.addEventListener('DOMContentLoaded', function() {
 const elemM= document.querySelector('.modal');
 const instancesModal = M.Modal.init(elemM);

    return  instancesModal;
  });
 

  },
  updated(){
    if(this.modalAction == "Budget"){
      this.initSelect()
    }
  }

};
</script>


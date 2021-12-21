<template>
  <NavBar />
  <div class="dashboard-border-flex-container">
    <div class="dashboard-special">
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Cards</h4>
            <a @click="modalAction = 'Card'"  href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
        <div v-for="card in Cards" :key="card.id">
     <Card 
      :cardType="card.type"
      :cardName="card.name"
      />
        </div>
 
      </div>
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4>All Trasactions</h4>
        <a @click="modalAction = 'Transaction'" href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
        <div v-if="Transactions == 0">
            <p>Add new Transaction </p>
          </div>
        <div v-else v-for="transaction in Transactions" :key="transaction.id">
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

        </div>
   <div v-if="!Chart">
            <p>Start your financial journey </p>
          </div>
      <Chart 
      :chartData="Chart"
      />
      </div>
      </div>

             <div class="dashboard-special">
      <div class="dashboard-border hide-on-large-only">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Report</h4>
        </div>
   <div v-if="!Chart">
            <p>Start your financial journey </p>
          </div>     
  <Chart
  :chartData="Chart"
   />
      </div>
      <div class="dashboard-border">
        <div class="dashboard-title-flex-container">
          <h4 class="disp-flex">Budget</h4>
           <a @click="()=>{
             modalAction = 'Budget';
             }" href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
        </div>
        <div v-if="Budgets.length == 0">
            <p>Add new Budget plan </p>
          </div>
        <div v-else v-for="budget in Budgets" :key="budget.id">
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
          <div v-if="Subscriptions.length == 0">
            <p>Add new Subscription </p>
          </div>
            <div v-else v-for="subscription in Subscriptions" :key="subscription.id">
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
          <div v-if="Loans.length == 0">
            <p>Add new Loan</p>
          </div>
          <div v-else v-for="loan in Loans" :key="loan.id">
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
          <div v-if="Savings.length == 0">
            <p>
            Start saving</p>
            </div>
          <div v-else v-for="saving in Savings" :key="saving.id">
 <Savings />
          </div>
        
        </div>

        <div class="dashboard-border">
          <div class="dashboard-title-flex-container">
            <h4 class="disp-flex">Financial Advice</h4>
              <a @click="()=>{modalAction = 'Quote';
                initSelect()}"  href="#modal1" class="addButton btn-floating btn-large waves-effect waves-light modal-trigger"><i class="material-icons">add</i></a>
          </div>
          <div v-if="Quotes.length == 0">
            <p>Add new quote</p>
          </div>
          <div v-else v-for="quote in Quotes" :key="quote.id"> 
          <Quotes /></div>
        </div>
      </div>
    </div>
    </div>
 
   <!-- Modal Structure -->
  <div id="modal1" class="modal">
     <div v-if="modalAction === 'Card'" style="color:#252525" class="modal-content">
      <h4>Add New Card</h4>
      <form style="color:#252525" @submit.prevent="submitModalContent">
          <div class="input-field">
            <input id="cname" type="text"  v-model="modalContentName" />
            <label  for="cname">Card Name</label>
          </div>
          <div class="input-field">
            <input id="cnum" type="text"  v-model="cardAccountNumber" />
            <label  for="cnum">Card Number</label>
          </div>
           <div class="input-field">
            <select v-model="modalContentType">
              <option value="" disabled selected>Choose card type</option>
              <option  value="MasterCard">MasterCard</option>
              <option value="Visa">Visa</option>
            </select>
            <label>Card Type</label>
          </div>
             <div class="input-field">
            <input id="cardDate" type="date"  v-model="modalContentDate" />
            <label  for="cardDate">Exp. Date</label>
          </div>
           <div class="center-align" ><button type="submit" class="waves-effect waves-light btn login-button">Create</button></div>
      </form>
    </div>
    <div v-else-if="modalAction === 'Transaction'" style="color:#252525" class="modal-content">
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
            <select v-model="modalContentType">
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
        <div v-else-if="modalAction === 'Quote'" style="color:#252525" class="modal-content">
      <h4>Add new quote</h4>
 <form style="color:#252525" @submit.prevent="submitModalContent">
          <p>
      <label>
        <input name="group1" type="radio" class="hgi" value="Try dey rest small, na who dey alive dey enjoy money" />
        <span>Try dey rest small, na who dey alive dey enjoy money</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Money stops nonsense !</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" name="group1" type="radio"  />
        <span>Work hard so you can play hard tomorrow !</span>
      </label>
    </p>
    <p class="center-align">OR</p>
  <p class="center-align">Create custom quote</p>
  <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
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
     modalContentType:"",
     cardAccountNumber:null
    
    }
  },
  computed: {...mapState([
"userEmail","Transactions","Subscriptions", "Budgets","Loans","Cards","Chart","Quotes","Savings"
  ]),

  },
  methods:{
    ...mapActions([
      "addCard","addTransaction", "addSubscription","addLoan","addBudget"
    ]),
    initSelect(){
    const elemS=  document.querySelector('select');
    const instancesSelect =  M.FormSelect.init(elemS);
   
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
        type:this.modalContentType
      }
        this.addBudget(budgetModalContent)
    this.closeModal()
    }
      else if(this.modalAction == "Card"){
      let cardModalContent = {
         id: 0,
        name: this.modalContentName,
        amount: this.modalContentAmount,
        totalCash:this.cardAccountNumber,
        type:this.modalContentType
      }
        this.addCard(cardModalContent)
    this.closeModal()
    }
       else if(this.modalAction == "Quotes"){
      let cardModalContent = {
         id: 0,
        name: this.modalContentName,
        amount: this.modalContentAmount,
        totalCash:this.cardAccountNumber,
        type:this.modalContentType
      }
        this.addCard(cardModalContent)
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
   
 const elemM= document.querySelector('.modal');
 const instancesModal = M.Modal.init(elemM);

    return  instancesModal;
  },
  updated(){
   // if(this.modalAction == "Budget"){
  //    this.initSelect()
    //}
     const el=  document.querySelector('.hgi');
console.log(el.value)
  }

};
</script>


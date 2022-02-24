<template>
    <blockquote class="dashboard-blockquote mb-4" cite="Nigerians">
            {{quote}}
          </blockquote>
</template>
<script>
export default {
    name:"Quotes",
      props:[
     "quote"
    ]
}
</script>
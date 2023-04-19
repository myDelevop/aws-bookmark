<template>
    <h1>DEV Environment: {{ msg }} </h1>
    <amplify-authenticator>
      <div>
        My App
        <amplify-sign-out></amplify-sign-out>
      </div>
    </amplify-authenticator>
</template>
  
  
<script>
  export default {
    name: 'LoginComponent',
    props: {
      msg: String
    }
  }
</script>
  
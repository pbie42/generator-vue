<template>
  <form>
    <fieldset>
      <legend><%= name %></legend>
      <!--Text -->
      <!-- <div>
        <label for="text">Text</label>
        <input type="text" id="text">
      </div> -->
      <!-- Email --><% emails.forEach(email => { %>
      <div>
        <label for="email">email</label>
        <input type="email" id="email" name="<%= email.name %>"<% if (email.placeholder){ %> placeholder="<%= email.placeholder %>" <% } %><% if (email.min){ %>min="<%= email.min %>" <% } %><% if (email.max){ %>max="<%= email.max %>" <% } %><% if (email.multiple){ %>multiple <% } %><% if (email.required){ %>required <% } %>>
      </div>
    <% }) %>
      <!-- Number -->
      <!-- <div>
        <label for="number">number</label>
        <input type="number" id="number">
      </div> -->
      <!-- Password -->
      <!-- <div>
        <label for="password">password</label>
        <input type="password" id="password">
      </div> -->
      <!-- Time -->
      <!-- <div>
        <label for="time">time</label>
        <input type="time" id="time">
      </div> -->
      <!-- Checkbox --><% checkboxes.forEach(checkbox => { %>
      <div>
        <label for="checkbox">checkbox</label>
        <input type="checkbox" id="checkbox" name="<%= checkbox.name %>" value="<%= checkbox.value %>" <% if (checkbox.checked){ %>checked <% } %>>
      </div>
    <% }) %>
      <!-- Date --><% dates.forEach(date => { %>
      <div>
        <label for="date">date</label>
        <input type="date" id="date" name="<%= date.name %>" <% if (date.default){ %>value="<%= date.default %>"<% } %><% if (date.min){ %> min="<%= date.min %>"<% } %><% if (date.max){ %> max="<%= date.max %>"<% } %><% if(date.required){ %> required<% } %> >
      </div>
    <% }) %>
      <!-- Url -->
      <!-- <div>
        <label for="url">url</label>
        <input type="url" id="url">
      </div> -->
      <!-- Radio -->
      <!-- <div>
        <label for="radio">radio</label>
        <input type="radio" id="radio">
      </div> -->
      <!-- TextArea -->
      <!-- <div>
        <label for="textarea">textarea</label>
        <textarea type="textarea" id="textarea"></textarea>
      </div> -->
      <!-- Select -->
      <!-- <div>
        <label for="select">select</label>
        <select id="select">
          <option value="opt1">opt1</option>
          <option value="opt2">opt2</option>
          <option value="opt3">opt3</option>
        </select>
      </div> -->
      
      <!-- NEW types - not supported by older web browsers -->
      
      <!-- Color -->
    <% colors.forEach(color => { %>
      <div>
        <label for="color">color</label>
        <input type="color" id="color" name="<%= color.name %>" value="<%= color.value %>"></input>
      </div>
    <% }) %>
      <!-- Datetime-local -->
    <% dateTimes.forEach(datetime => { %>
      <div>
        <label for="datetime-local">datetime-local</label>
        <input type="datetime-local" id="datetime-local" name="<%= datetime.name %>" value="<%= datetime.default %>" <%= datetime.min ? 'min="datetime.min"' : "" %> <%= datetime.max ? 'min="datetime.max"' : "" %> <%= datetime.required ? "required" : ""%>></input>
      </div>
    <% }) %>
      <!-- Month -->
    <% months.forEach(month => { %>
      <div>
        <label for="month">month</label>
        <input type="month" id="month" name="<%= month.name %>" value="<%= month.default %>" <%= month.min ? 'min="month.min"' : "" %> <%= month.max ? 'min="month.max"' : "" %> <%= month.required ? "required" : ""%>></input>
      </div>
    <% }) %>
      <!-- Range -->
      <!-- <div>
        <label for="range">range</label>
        <input type="range" id="range"></input>
      </div> -->
      <!-- Search -->
      <!-- <div>
        <label for="search">search</label>
        <input type="search" id="search"></input>
      </div> -->
      <!-- Tel -->
      <!-- <div>
        <label for="tel">tel</label>
        <input type="tel" id="tel"></input>
      </div> -->
      <!-- Week -->
      <!-- <div>
        <label for="week">week</label>
        <input type="week" id="week"></input>
      </div> -->
      
      <!-- Button -->
    <% buttons.forEach(button => { %>
      <button name="<%= button.name %>" type="<%= button.type %>" value="<%= button.value %>">Submit</button>
    <% }) %>
    </fieldset>
  </form>
</template>

<script>

export default {
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  },
  filters: {

  },
  directives: {

  },
  mixins: {

  }
}

</script>

<style scoped>



</style>
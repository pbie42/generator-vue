<template>
  <form>
    <fieldset>
      <legend><%= name %></legend>
      <% if (texts.length > 0){ %><!-- Text --><% } %><% texts.forEach(text => { %>
      <div>
        <label for="text">Text</label>
        <input type="text" id="text"<% if (text.value){ %> value="<%= text.value %>"<% } %><% if (text.placeholder){ %> placeholder="<%= text.placeholder %>" <% } %><% if (text.min){ %>minlength="<%= text.min %>" <% } %><% if (text.max){ %>maxlength="<%= text.max %>" <% } %><% if (text.required){ %>required <% } %>>
      </div>
      <% }) %>
      <% if (emails.length > 0){ %><!-- Email --><% } %><% emails.forEach(email => { %>
      <div>
        <label for="email">email</label>
        <input type="email" id="email" name="<%= email.name %>"<% if (email.placeholder){ %> placeholder="<%= email.placeholder %>" <% } %><% if (email.min){ %>min="<%= email.min %>" <% } %><% if (email.max){ %>max="<%= email.max %>" <% } %><% if (email.multiple){ %>multiple <% } %><% if (email.required){ %>required <% } %>>
      </div>
      <% }) %>
      <% if (numbers.length > 0){ %><!-- Number --><% } %><% numbers.forEach(number => { %>
      <div>
        <label for="number">number</label>
        <input type="number" id="number" <% if (number.value){ %>value="<%= number.value %>" <% } %><% if (number.placeholder){ %>placeholder="<%= number.placeholder %>" <% } %><% if (number.step){ %>step="<%= number.step %>" <% } %><% if (number.min){ %>min="<%= number.min %>" <% } %><% if (number.max){ %>max="<%= number.max %>" <% } %><% if (number.required){ %>required <% } %>>
      </div>
      <% }) %>
      <% if (passwords.length > 0){ %><!-- Password --><% } %><% passwords.forEach(password => { %>
      <div>
        <label for="password">password</label>
        <input type="password" id="password"<% if (password.placeholder){ %> placeholder="<%= password.placeholder %>" <% } %><% if (password.autocomplete){ %>autocomplete="<%= password.autocomplete %>" <% } %><% if (password.min){ %>minlength="<%= password.min %>" <% } %><% if (password.max){ %>maxlength="<%= password.max %>" <% } %><% if (password.inputmode){ %>inputmode="numeric" <% } %><% if (password.required){ %>required <% } %>>
      </div>
      <% }) %>
      <% if (times.length > 0){ %><!-- Time --><% } %><% times.forEach(time => { %>
      <div>
        <label for="time">time</label>
        <input type="time" id="time" name="<%= time.name %>" <% if(time.value) { %>value="<%= time.value %>"<% } %><% if (time.step){ %> step="<%= time.step %>" <% } %><% if(time.min) { %>min="<%= time.min %>" <% } %><% if(time.max) { %>max="<%= time.max %>" <% } %><% if(time.required) { %>required<% } %>>
      </div>
      <% }) %>
      <% if (checkboxes.length > 0){ %><!-- Checkbox --><% } %><% checkboxes.forEach(checkbox => { %>
      <div>
        <label for="checkbox">checkbox</label>
        <input type="checkbox" id="checkbox" name="<%= checkbox.name %>" value="<%= checkbox.value %>" <% if (checkbox.checked){ %>checked <% } %>>
      </div>
      <% }) %>
      <% if (dates.length > 0){ %><!-- Date --><% } %><% dates.forEach(date => { %>
      <div>
        <label for="date">date</label>
        <input type="date" id="date" name="<%= date.name %>" <% if (date.value){ %>value="<%= date.value %>"<% } %><% if (date.min){ %> min="<%= date.min %>"<% } %><% if (date.max){ %> max="<%= date.max %>"<% } %><% if(date.required){ %> required<% } %> >
      </div>
      <% }) %>
      <% if (urls.length > 0){ %><!-- Url --><% } %><% urls.forEach(url => { %>
      <div>
        <label for="url">url</label>
        <input type="url" id="url"<% if (url.value){ %> value="<%= url.value %>"<% } %><% if (url.placeholder){ %> placeholder="<%= url.placeholder %>" <% } %><% if (url.min){ %>minlength="<%= url.min %>" <% } %><% if (url.max){ %>maxlength="<%= url.max %>" <% } %><% if (url.required){ %>required <% } %>>
      </div>
      <% }) %>
      <% if (radios.length > 0){ %><!-- Radio --><% } %><% radios.forEach(radio => { %>
      <div>
        <label for="radio">radio</label>
        <input type="radio" id="radio" name="<%= radio.name %>" value="<%= radio.value %>" <% if (radio.checked){ %>checked <% } %>>
      </div>
      <% }) %>
      <% if (textAreas.length > 0){ %><!-- Textarea --><% } %><% textAreas.forEach(textarea => { %>
      <div>
        <label for="textarea">textarea</label>
        <textarea type="textarea" id="textarea"<% if (textarea.value){ %> value="<%= textarea.value %>"<% } %><% if (textarea.placeholder){ %> placeholder="<%= textarea.placeholder %>" <% } %><% if (textarea.min){ %>minlength="<%= textarea.min %>" <% } %><% if (textarea.max){ %>maxlength="<%= textarea.max %>" <% } %><% if (textarea.rows){ %>rows="<%= textarea.rows %>" <% } %><% if (textarea.cols){ %>cols="<%= textarea.cols %>" <% } %><% if (textarea.required){ %>required <% } %>></textarea>
      </div>
      <% }) %>
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
      
      <% if (colors.length > 0){ %><!-- Color --><% } %><% colors.forEach(color => { %>
      <div>
        <label for="color">color</label>
        <input type="color" id="color" name="<%= color.name %>" value="<%= color.value %>"></input>
      </div>
      <% }) %>
      <% if (dateTimes.length > 0){ %><!-- Datetime-Local --><% } %><% dateTimes.forEach(datetime => { %>
      <div>
        <label for="datetime-local">datetime-local</label>
        <input type="datetime-local" id="datetime-local" name="<%= datetime.name %>" <% if(datetime.value) { %>value="<%= datetime.value %>"<% } %> <% if(datetime.min) { %>min="<%= datetime.min %>" <% } %><% if(datetime.max) { %>max="<%= datetime.max %>" <% } %><% if(datetime.required) { %>required<% } %> >
      </div>
      <% }) %>
      <% if (months.length > 0){ %><!-- Month --><% } %><% months.forEach(month => { %>
      <div>
        <label for="month">month</label>
        <input type="month" id="month" name="<%= month.name %>" <% if(month.value) { %>value="<%= month.value %>"<% } %> <% if(month.min) { %>min="<%= month.min %>" <% } %><% if(month.max) { %>max="<%= month.max %>" <% } %><% if(month.required) { %>required<% } %>>
      </div>
      <% }) %>
      <% if (ranges.length > 0){ %><!-- Range --><% } %><% ranges.forEach(range => { %>
      <div>
        <label for="range">range</label>
        <input type="range" id="range" name="<%= range.name %>" min="<%= range.min %>" max="<%= range.max %>"<% if (range.required){ %> required <% } %>></input>
      </div>
      <% }) %>
      <% if (searches.length > 0){ %><!-- Search --><% } %><% searches.forEach(search => { %>
      <div>
        <label for="search">search</label>
        <input type="search" id="search"<% if (search.placeholder){ %> placeholder="<%= search.placeholder %>" <% } %><% if (search.min){ %>minlength="<%= search.min %>" <% } %><% if (search.max){ %>maxlength="<%= search.max %>" <% } %><% if (search.required){ %>required <% } %>>
      </div>
      <% }) %>
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
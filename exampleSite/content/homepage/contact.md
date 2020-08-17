---
weight: 2
---

Have we caught your attention? We appreciate your feedback at this early stage of our product. Do not hesitate to contact us. In fact, if your interested, we'd love to give you a tour of the prototype we built.

<!-- TODO: Put form code in shortcode https://gohugo.io/templates/shortcode-templates/#shortcode-template-lookup-order

Obwohl ist ja egal, solange man die Klasse überschreiben kann....

Ach so wegen WYSIWIG - naja... #futureWork

-->

<form class="pb-10" name="contact" netlify netlify-honeypot="you-like-this-field">
  <div class="hidden">
    <input name="you-like-this-field"/>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-10">
    <div class="border-t border-teal-500 py-2">
      <input id="name" name="name" class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Name" aria-label="Name">
    </div>
    <div class="border-t border-teal-500 py-2">
      <input required id="email" name="email" type="email" class="appearance-none bg-transparent border-none text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email" aria-label="Email">
    </div>
  </div>
  <div class="grid grid-cols-1">
    <div class="border-t border-teal-500 py-2">
      <textarea required id="message" name="message" rows="6" placeholder="Message" class="appearance-none w-full bg-transparent text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"></textarea>
    </div>
  </div>
  <div class="md:text-center mx-auto">
  <button class="mx-auto w-full rounded-lg px-4 md:px-5 py-3 md:py-4 bg-teal-500 hover:bg-teal-600 md:text-lg text-white font-semibold leading-tight shadow-md md:text-center"
">Send ✉️</button>
  </div>
</form>

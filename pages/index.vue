<template>
  <div class="w-full h-full" :style="'background: #e1d5e3 url(' + require('~/static/background.png') + ') fixed repeat;'">
    <div class="relative flex justify-center w-full h-full py-12 mx-auto">
      <div class="grid w-full grid-cols-1 lg:grid-cols-3">
        <div class="lg:col-span-1">
          <div class="relative px-2 py-2 mx-auto mb-12 bg-white border border-gray-800 lg:mb-0 h-72 w-36 lg:fixed lg:flex lg:flex-col lg:left-64 lg:top-24">
            <img src="~/static/profile.jpg" class="w-32 h-32 mx-auto rounded-md">
            <div class="flex justify-between w-full mt-2">
              <a
                v-scroll-to="{
                  el: '#home', offset: -150 }"
                href="#"
              >
                <svg class="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
              </a>
              <a
                v-scroll-to="{
                  el: '#references', offset: -150 }"
                href="#"
              >
                <svg class="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              </a>
              <a
                v-scroll-to="{
                  el: '#interests', offset: -150 }"
                href="#"
              >
                <svg class="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </a>
              <a
                v-scroll-to="{
                  el: '#contact', offset: -150 }"
                href="#"
              >
                <svg class="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" /></svg>
              </a>
            </div>
            <div class="w-full h-auto pt-2">
              <p class="w-full text-base text-center text-gray-600">
                dani/21
              </p>
            </div>
            <div class="w-full h-auto pt-2">
              <p class="w-full text-base text-center text-gray-600">
                cute
              </p>
            </div>
            <div class="flex flex-col w-full h-auto mt-2">
              <svg class="w-5 h-5 mx-auto text-pink-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" /></svg>
              <a href="#" class="font-medium text-center text-pink-500">next</a>
            </div>
          </div>
        </div>
        <div class="col-span-1 mx-8 space-y-8 lg:mx-12">
          <div id="home" class="relative w-full px-4 py-3 mx-auto prose-sm prose bg-white rounded shadow h-96 max-w-none sm:prose">
            <h3 class="font-semibold title">
              what i do
            </h3>
            <ul>
              <li>
                seo
                <a href="#" title="link">copywriting</a>
              </li>
              <li>
                photography
              </li>
              <li>
                music production
              </li>
              <li>
                twitter content (on the <a href="https://twitter.com/danibucaro" target="_blank" title="twitter profile">daily</a>)
              </li>
              <li>
                hyperpop curation
              </li>
            </ul>
            <svg class="absolute w-12 h-12 text-pink-400 opacity-50 bottom-4 right-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
          </div>
          <div id="references" class="relative w-full px-4 py-3 mx-auto prose-sm prose bg-white rounded shadow h-96 max-w-none sm:prose">
            <h3 class="font-semibold title">
              my friends &amp; colleagues
            </h3>
            <ul>
              <li>
                helen edmunds
              </li>
              <li>
                kendall jackson (the best <a href="https://github.com/kendalled" title="developer" target="_blank">developer</a>)
              </li>
              <li>
                jessica velasco
              </li>
              <li>
                bela tweets 2 you
              </li>
              <li>
                tia (the famous <a href="https://twitter.com/califortia" target="_blank" title="tia's twitter">video editor</a>)
              </li>
            </ul>
            <svg class="absolute w-12 h-12 text-pink-400 opacity-50 bottom-4 right-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
          </div>
          <div id="interests" class="relative w-full mx-auto prose bg-white rounded shadow h-96">
            <h3 class="px-4 py-3">
              what i like
            </h3>
            <svg class="absolute w-12 h-12 text-pink-400 opacity-50 bottom-4 right-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          </div>
          <div id="contact" class="relative w-full mx-auto prose bg-white rounded shadow h-96">
            <h3 class="px-4 py-3">
              where to find me
            </h3>
            <svg class="absolute w-12 h-12 text-pink-400 opacity-50 bottom-4 right-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" /></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  background: #e1d5e3;
}
.prose a {
    color: #f472b5;
    font-weight: 500;
    box-shadow: rgb(255, 255, 255) 0px -0.125em 0px 0px inset, rgba(243, 143, 195, 0.4) 0px -0.375em 0px 0px inset;
    text-decoration: none;
}
.prose a:hover {
  color: #ec4899;
}
.title {
  font-family:
    'Helvetica',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
}
</style>

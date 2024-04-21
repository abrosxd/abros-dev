(function () {
    'use strict';
	
function storeStart() {
	    
/* Иконки разделов плагина */
var as= '<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256px" height="256px" viewBox="0 0 512 512" xml:space="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  .st0{fill:#ffffff;}  </style> <g> <path class="st0" d="M432.531,229.906c-9.906,0-19.125,2.594-27.313,6.375v-51.656c0-42.938-34.922-77.875-77.859-77.875h-51.641 c3.781-8.156,6.375-17.375,6.375-27.281C282.094,35.656,246.438,0,202.625,0c-43.828,0-79.484,35.656-79.484,79.469 c0,9.906,2.594,19.125,6.359,27.281H77.875C34.938,106.75,0,141.688,0,184.625l0.047,23.828H0l0.078,33.781 c0,23.031,8.578,36.828,12.641,42.063c12.219,15.797,27.094,18.172,34.891,18.172c11.953,0,23.141-4.953,33.203-14.703l0.906-0.422 l1.516-2.141c1.391-1.359,6.328-5.484,14.016-5.5c16.344,0,29.656,13.297,29.656,29.672c0,16.344-13.313,29.656-29.672,29.656 c-7.672,0-12.609-4.125-14-5.5l-1.516-2.141l-0.906-0.422c-10.063-9.75-21.25-14.703-33.203-14.703 c-7.797,0.016-22.672,2.375-34.891,18.172c-4.063,5.25-12.641,19.031-12.641,42.063L0,410.281h0.047L0,434.063 C0,477.063,34.938,512,77.875,512h54.563v-0.063l3.047-0.016c23.016,0,36.828-8.563,42.063-12.641 c15.797-12.219,18.172-27.094,18.172-34.891c0-11.953-4.953-23.141-14.688-33.203l-0.438-0.906l-2.125-1.516 c-1.375-1.391-5.516-6.328-5.516-14.016c0-16.344,13.313-29.656,29.672-29.656c16.344,0,29.656,13.313,29.656,29.656 c0,7.688-4.141,12.625-5.5,14.016l-2.125,1.516l-0.438,0.906c-9.75,10.063-14.703,21.25-14.703,33.203 c0,7.797,2.359,22.672,18.172,34.891c5.25,4.078,19.031,12.641,42.063,12.641l17,0.047V512h40.609 c42.938,0,77.859-34.938,77.859-77.875v-51.641c8.188,3.766,17.406,6.375,27.313,6.375c43.813,0,79.469-35.656,79.469-79.484 C512,265.563,476.344,229.906,432.531,229.906z M432.531,356.375c-19.031,0-37.469-22.063-37.469-22.063 c-3.344-3.203-6.391-4.813-9.25-4.813c-2.844,0-5.469,1.609-7.938,4.813c0,0-5.125,5.891-5.125,19.313v80.5 c0,25.063-20.313,45.391-45.391,45.391h-23.813l-33.797-0.078c-15.438,0-22.188-5.875-22.188-5.875 c-3.703-2.859-5.563-5.875-5.563-9.172c0-3.266,1.859-6.797,5.563-10.594c0,0,17.219-13.891,17.219-39.047 c0-34.313-27.844-62.156-62.156-62.156c-34.344,0-62.156,27.844-62.156,62.156c0,25.156,17.219,39.047,17.219,39.047 c3.688,3.797,5.531,7.328,5.531,10.594c0,3.297-1.844,6.313-5.531,9.172c0,0-6.766,5.875-22.203,5.875l-33.797,0.078H77.875 c-25.063,0-45.375-20.328-45.375-45.391l0.094-48.203h-0.047l0.016-9.422c0-15.422,5.875-22.203,5.875-22.203 c2.859-3.703,5.875-5.531,9.156-5.531s6.813,1.828,10.609,5.531c0,0,13.891,17.234,39.047,17.234 c34.313-0.016,62.156-27.844,62.156-62.156c-0.016-34.344-27.844-62.156-62.156-62.156c-25.156,0-39.047,17.219-39.047,17.219 c-3.797,3.688-7.328,5.531-10.609,5.531s-6.297-1.828-9.156-5.531c0,0-5.875-6.781-5.875-22.203v-1.156h0.031L32.5,184.625 c0-25.063,20.313-45.375,45.375-45.375h80.5c13.422,0,19.313-5.125,19.313-5.125c6.422-4.938,6.422-10.531,0-17.188 c0,0-22.063-18.438-22.063-37.469c0-25.953,21.047-46.984,47-46.984c25.938,0,46.984,21.031,46.984,46.984 c0,19.031-22.047,37.469-22.047,37.469c-6.438,6.656-6.438,12.25,0,17.188c0,0,5.875,5.125,19.281,5.125h80.516 c25.078,0,45.391,20.313,45.391,45.375v80.516c0,13.422,5.125,19.297,5.125,19.297c2.469,3.219,5.094,4.813,7.938,4.813 c2.859,0,5.906-1.594,9.25-4.813c0,0,18.438-22.047,37.469-22.047c25.938,0,46.969,21.047,46.969,46.984 C479.5,335.344,458.469,356.375,432.531,356.375z"></path> </g> </g></svg>'
var as_vip = ''
var as_news = ''
var as_interface = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.27209 20.7279L10.8686 14.1314C11.2646 13.7354 11.4627 13.5373 11.691 13.4632C11.8918 13.3979 12.1082 13.3979 12.309 13.4632C12.5373 13.5373 12.7354 13.7354 13.1314 14.1314L19.6839 20.6839M14 15L16.8686 12.1314C17.2646 11.7354 17.4627 11.5373 17.691 11.4632C17.8918 11.3979 18.1082 11.3979 18.309 11.4632C18.5373 11.5373 18.7354 11.7354 19.1314 12.1314L22 15M10 9C10 10.1046 9.10457 11 8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9ZM6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V7.8C22 6.11984 22 5.27976 21.673 4.63803C21.3854 4.07354 20.9265 3.6146 20.362 3.32698C19.7202 3 18.8802 3 17.2 3H6.8C5.11984 3 4.27976 3 3.63803 3.32698C3.07354 3.6146 2.6146 4.07354 2.32698 4.63803C2 5.27976 2 6.11984 2 7.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div><div style="font-size:1.3em">Интерфейс</div></div>'
var as_control = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg fill="#ffffff" width="256px" height="256px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.015 12.97l-2.567-0.569c-0.2-0.64-0.462-1.252-0.762-1.841l1.389-2.313c0.518-0.829 0.78-2.047 0-2.829l-1.415-1.414c-0.78-0.781-2.098-0.64-2.894-0.088l-2.251 1.434c-0.584-0.303-1.195-0.563-1.829-0.768l-0.576-2.598c-0.172-0.953-1.005-1.984-2.11-1.984h-2c-1.104 0-1.781 1.047-2 2l-0.642 2.567c-0.678 0.216-1.328 0.492-1.948 0.819l-2.308-1.47c-0.795-0.552-2.114-0.692-2.894 0.088l-1.415 1.414c-0.781 0.782-0.519 2 0 2.828l1.461 2.435c-0.274 0.552-0.517 1.123-0.705 1.72l-2.566 0.569c-0.953 0.171-1.984 1.005-1.984 2.109v2c0 1.105 1.047 1.782 2 2l2.598 0.649c0.179 0.551 0.404 1.080 0.658 1.593l-1.462 2.438c-0.518 0.828-0.78 2.047 0 2.828l1.415 1.414c0.78 0.782 2.098 0.64 2.894 0.089l2.313-1.474c0.623 0.329 1.277 0.608 1.96 0.823l0.64 2.559c0.219 0.953 0.896 2 2 2h2c1.105 0 1.938-1.032 2.11-1.985l0.577-2.604c0.628-0.203 1.23-0.459 1.808-0.758l2.256 1.438c0.796 0.552 2.114 0.692 2.895-0.089l1.415-1.414c0.78-0.782 0.518-2 0-2.828l-1.39-2.317c0.279-0.549 0.521-1.12 0.716-1.714l2.599-0.649c0.953-0.219 2-0.895 2-2v-2c0-1.104-1.031-1.938-1.985-2.11zM30.001 16.939c-0.085 0.061-0.245 0.145-0.448 0.192l-3.708 0.926-0.344 1.051c-0.155 0.474-0.356 0.954-0.597 1.428l-0.502 0.986 1.959 3.267c0.125 0.2 0.183 0.379 0.201 0.485l-1.316 1.314c-0.127-0.040-0.271-0.092-0.341-0.14l-3.292-2.099-1.023 0.529c-0.493 0.256-0.999 0.468-1.503 0.631l-1.090 0.352-0.824 3.723c-0.038 0.199-0.145 0.36-0.218 0.417h-1.8c-0.061-0.085-0.145-0.245-0.191-0.448l-0.921-3.681-1.066-0.338c-0.549-0.173-1.097-0.404-1.63-0.684l-1.028-0.543-3.293 2.099c-0.135 0.091-0.279 0.143-0.409 0.143l-1.311-1.276c0.018-0.104 0.072-0.274 0.181-0.449l2.045-3.408-0.487-0.98c-0.227-0.462-0.407-0.895-0.547-1.325l-0.343-1.052-3.671-0.918c-0.231-0.052-0.398-0.139-0.485-0.2v-1.86c0.001 0.001 0.002 0.001 0.005 0.001 0.034 0 0.198-0.117 0.335-0.142l3.772-0.835 0.346-1.103c0.141-0.449 0.333-0.917 0.588-1.43l0.487-0.98-2.024-3.373c-0.125-0.201-0.184-0.38-0.201-0.485l1.315-1.314c0.128 0.041 0.271 0.093 0.34 0.14l3.354 2.138 1.027-0.542c0.527-0.278 1.073-0.507 1.622-0.682l1.063-0.338 0.912-3.649c0.053-0.231 0.138-0.398 0.2-0.485h1.859c-0.014 0.020 0.115 0.195 0.142 0.339l0.84 3.794 1.089 0.352c0.511 0.165 1.023 0.38 1.523 0.639l1.023 0.532 3.224-2.053c0.135-0.092 0.279-0.143 0.409-0.143l1.313 1.276c-0.017 0.104-0.072 0.276-0.181 0.45l-1.98 3.296 0.505 0.988c0.273 0.533 0.48 1.033 0.635 1.529l0.346 1.104 3.697 0.82c0.224 0.041 0.398 0.171 0.434 0.241zM16.013 9.99c-3.321 0-6.023 2.697-6.023 6.010s2.702 6.010 6.023 6.010 6.023-2.697 6.023-6.009c0-3.313-2.702-6.010-6.023-6.010zM16 20c-2.205 0-4-1.794-4-4s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.794 4-4 4z"></path> </g></svg></div><div style="font-size:1.3em">Управление</div></div>'
var as_video = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32"><path d="m17 14.5 4.2-4.5L4.9 1.2c-.1-.1-.3-.1-.6-.2L17 14.5zM23 21l5.9-3.2c.7-.4 1.1-1 1.1-1.8s-.4-1.5-1.1-1.8L23 11l-4.7 5 4.7 5zM2.4 1.9c-.3.3-.4.7-.4 1.1v26c0 .4.1.8.4 1.2L15.6 16 2.4 1.9zM17 17.5 4.3 31c.2 0 .4-.1.6-.2L21.2 22 17 17.5z" fill="currentColor" fill="#ffffff" class="fill-000000"></path></svg></div><div style="font-size:1.3em">Онлайн</div></div>'
var as_tv = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div><div style="font-size:1.3em">ТВ</div></div>'
var as_radio = '<div class="settings-folder" style="padding:0!important"><div style="width:1.8em;height:1.3em;padding-right:.5em"><svg fill="#ffffff" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M44 3 A 2 2 0 0 0 42.097656 4.3886719L6.7890625 12.023438 A 1.0001 1.0001 0 0 0 6 13L6 15L5 15C2.2504839 15 0 17.250484 0 20L0 45C0 46.093063 0.9069372 47 2 47L48 47C49.093063 47 50 46.093063 50 45L50 20C50 17.250484 47.749516 15 45 15L8 15L8 13.806641L42.519531 6.3417969 A 2 2 0 0 0 44 7 A 2 2 0 0 0 46 5 A 2 2 0 0 0 44 3 z M 5 17L6.8320312 17 A 1.0001 1.0001 0 0 0 7.1582031 17L45 17C46.668484 17 48 18.331516 48 20L48 45L2 45L2 20C2 18.331516 3.3315161 17 5 17 z M 18.984375 19.986328 A 1.0001 1.0001 0 0 0 18.839844 20L6 20 A 1.0001 1.0001 0 0 0 5 21L5 27 A 1.0001 1.0001 0 0 0 6 28L18.832031 28 A 1.0001 1.0001 0 0 0 19.158203 28L44 28 A 1.0001 1.0001 0 0 0 45 27L45 21 A 1.0001 1.0001 0 0 0 44 20L19.154297 20 A 1.0001 1.0001 0 0 0 18.984375 19.986328 z M 7 22L18 22L18 26L7 26L7 22 z M 20 22L43 22L43 26L20 26L20 22 z M 6 31 A 1 1 0 0 0 5 32 A 1 1 0 0 0 6 33 A 1 1 0 0 0 7 32 A 1 1 0 0 0 6 31 z M 12 31 A 1 1 0 0 0 11 32 A 1 1 0 0 0 12 33 A 1 1 0 0 0 13 32 A 1 1 0 0 0 12 31 z M 18 31 A 1 1 0 0 0 17 32 A 1 1 0 0 0 18 33 A 1 1 0 0 0 19 32 A 1 1 0 0 0 18 31 z M 24 31 A 1 1 0 0 0 23 32 A 1 1 0 0 0 24 33 A 1 1 0 0 0 25 32 A 1 1 0 0 0 24 31 z M 30 31 A 1 1 0 0 0 29 32 A 1 1 0 0 0 30 33 A 1 1 0 0 0 31 32 A 1 1 0 0 0 30 31 z M 39.5 31C36.473641 31 34 33.474691 34 36.5C34 39.525309 36.473641 42 39.5 42C42.527925 42 45 39.524772 45 36.5C45 33.475228 42.527925 31 39.5 31 z M 9 33 A 1 1 0 0 0 8 34 A 1 1 0 0 0 9 35 A 1 1 0 0 0 10 34 A 1 1 0 0 0 9 33 z M 15 33 A 1 1 0 0 0 14 34 A 1 1 0 0 0 15 35 A 1 1 0 0 0 16 34 A 1 1 0 0 0 15 33 z M 21 33 A 1 1 0 0 0 20 34 A 1 1 0 0 0 21 35 A 1 1 0 0 0 22 34 A 1 1 0 0 0 21 33 z M 27 33 A 1 1 0 0 0 26 34 A 1 1 0 0 0 27 35 A 1 1 0 0 0 28 34 A 1 1 0 0 0 27 33 z M 39.5 33C40.105002 33 40.662285 33.164648 41.15625 33.429688L39.292969 35.292969 A 1.0001 1.0001 0 1 0 40.707031 36.707031L42.570312 34.84375C42.835319 35.337857 43 35.895564 43 36.5C43 38.445228 41.448075 40 39.5 40C37.554359 40 36 38.444691 36 36.5C36 34.555309 37.554359 33 39.5 33 z M 6 35 A 1 1 0 0 0 5 36 A 1 1 0 0 0 6 37 A 1 1 0 0 0 7 36 A 1 1 0 0 0 6 35 z M 12 35 A 1 1 0 0 0 11 36 A 1 1 0 0 0 12 37 A 1 1 0 0 0 13 36 A 1 1 0 0 0 12 35 z M 18 35 A 1 1 0 0 0 17 36 A 1 1 0 0 0 18 37 A 1 1 0 0 0 19 36 A 1 1 0 0 0 18 35 z M 24 35 A 1 1 0 0 0 23 36 A 1 1 0 0 0 24 37 A 1 1 0 0 0 25 36 A 1 1 0 0 0 24 35 z M 30 35 A 1 1 0 0 0 29 36 A 1 1 0 0 0 30 37 A 1 1 0 0 0 31 36 A 1 1 0 0 0 30 35 z M 9 37 A 1 1 0 0 0 8 38 A 1 1 0 0 0 9 39 A 1 1 0 0 0 10 38 A 1 1 0 0 0 9 37 z M 15 37 A 1 1 0 0 0 14 38 A 1 1 0 0 0 15 39 A 1 1 0 0 0 16 38 A 1 1 0 0 0 15 37 z M 21 37 A 1 1 0 0 0 20 38 A 1 1 0 0 0 21 39 A 1 1 0 0 0 22 38 A 1 1 0 0 0 21 37 z M 27 37 A 1 1 0 0 0 26 38 A 1 1 0 0 0 27 39 A 1 1 0 0 0 28 38 A 1 1 0 0 0 27 37 z M 6 39 A 1 1 0 0 0 5 40 A 1 1 0 0 0 6 41 A 1 1 0 0 0 7 40 A 1 1 0 0 0 6 39 z M 12 39 A 1 1 0 0 0 11 40 A 1 1 0 0 0 12 41 A 1 1 0 0 0 13 40 A 1 1 0 0 0 12 39 z M 18 39 A 1 1 0 0 0 17 40 A 1 1 0 0 0 18 41 A 1 1 0 0 0 19 40 A 1 1 0 0 0 18 39 z M 24 39 A 1 1 0 0 0 23 40 A 1 1 0 0 0 24 41 A 1 1 0 0 0 25 40 A 1 1 0 0 0 24 39 z M 30 39 A 1 1 0 0 0 29 40 A 1 1 0 0 0 30 41 A 1 1 0 0 0 31 40 A 1 1 0 0 0 30 39 z"></path></g></svg></div><div style="font-size:1.3em">Радио</div></div>'
var ads = '<div style="padding: 0.3em 0.3em; padding-top: 0;"><div style="background: #3e3e3e; padding: 0.5em; border-radius: 1em;"><div style="line-height: 1.2;"><span style="color: #ffffff"><div style="text-align: center;">Добавляйтесь в нашу группу<br> ПЛАГИНЫ БЕЗ ЦЕНЗУРЫ</br><span style="color: #f3d900">@lampa_plugins_uncensored</span></span></div></div></div></div>'	
/* Регулярно вызываемые функции */
	Lampa.Storage.set('needReboot', false);
	Lampa.Storage.set('needRebootSettingExit', false);
/* Запрос на перезагрузку в модальном окне */
function showReload(reloadText){
Lampa.Modal.open({
      title: '',
      align: 'center',
      zIndex: 300,
      html: $('<div class="about">' + reloadText + '</div>'),
      buttons: [{
        name: 'Нет',
        onSelect: function onSelect() {
          Lampa.Modal.close();
          $('.modal').remove();
	  Lampa.Controller.toggle('settings_component');
        }
      }, {
        name: 'Да',
        onSelect: function onSelect() {
          window.location.reload();
        }
      }]
});
}
/* Следим за настройками */
function settingsWatch() {
	/* проверяем флаг перезагрузки и ждём выхода из настроек */
	if (Lampa.Storage.get('needRebootSettingExit')) {
  		var intervalSettings = setInterval(function() {
  			var elementSettings = $('#app > div.settings > div.settings__content.layer--height > div.settings__body > div');
  			if (!elementSettings.length > 0){
    				clearInterval(intervalSettings);
				showReload('Для полного удаления плагина перезагрузите приложение!');
  			}
		}, 1000)
	}
}

function itemON(sourceURL, sourceName, sourceAuthor, itemName) {
if ($('DIV[data-name="' + itemName + '"]').find('.settings-param__status').hasClass('active')) {Lampa.Noty.show("Плагин уже установлен!")} else {	
	// Если перезагрузки не требуется - контроль после удаления плагинов
   if (!Lampa.Storage.get('needReboot')) {
	// Получаем список плагинов
		var pluginsArray = Lampa.Storage.get('plugins');
	// Добавляем новый элемент к списку
		pluginsArray.push({
			"author": sourceAuthor,
			"url": sourceURL,
			"name": sourceName,
			"status": 1
		});
	// Внедряем изменённый список в лампу
		Lampa.Storage.set('plugins', pluginsArray);
	// Делаем инъекцию скрипта для немедленной работы
		var script = document.createElement ('script');
		script.src = sourceURL;
		document.getElementsByTagName ('head')[0].appendChild (script);
		setTimeout(function() {
			Lampa.Settings.update();
			Lampa.Noty.show("Плагин " + sourceName + " успешно установлен")
		}, 300);
   }
}
}	
function hideInstall() {
	$("#hideInstall").remove();
	$('body').append('<div id="hideInstall"><style>div.settings-param__value{opacity: 0%!important;display: none;}</style><div>')
}

function deletePlugin(pluginToRemoveUrl) {
	var plugins = Lampa.Storage.get('plugins');
	var updatedPlugins = plugins.filter(function(obj) {return obj.url !== pluginToRemoveUrl});
	Lampa.Storage.set('plugins', updatedPlugins);
	Lampa.Settings.update();
	Lampa.Noty.show("Плагин успешно удален");
	Lampa.Storage.set('needRebootSettingExit', true);
	   settingsWatch();
};

function checkPlugin(pluginToCheck) {
	var plugins = Lampa.Storage.get('plugins');
	var checkResult = plugins.filter(function(obj) {return obj.url == pluginToCheck});
	console.log('search', 'checkResult: ' + JSON.stringify(checkResult));
	console.log('search', 'pluginToCheck: ' + pluginToCheck);
	if (JSON.stringify(checkResult) !== '[]') {return true} else {return false}
};
	
/* Компонент */
Lampa.SettingsApi.addComponent({
            component: 'abrosstore',
            name: 'Abros Store',
            icon: as
       });
/* Интерфейс */
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'main') {
                Lampa.SettingsApi.addComponent({
                    component: 'add_interface_plugin',
                    name: 'Interface'
				});
				setTimeout(function() {
					$('div[data-component="as_interface"]').remove();
					$('div[data-component="as_control"]').remove();
					$('div[data-component="as_video"]').remove();
					$('div[data-component="as_tv"]').remove();
					$('div[data-component="as_radio"]').remove();
				}, 0);
				$("#hideInstall").remove();
		                /* Сдвигаем раздел выше */
				setTimeout(function() {
					  $('div[data-component=plugins]').before($('div[data-component=add_plugin]'))
					}, 30)
			}
		});

		Lampa.SettingsApi.addParam({
					component: 'abrosstore',
					param: {
						name: 'add_interface_plugin',
						type: 'static',
						default: true
                         },
					field: {
						name: icon_add_interface_plugin
                        },
					onRender: function(item) {
					item.on('hover:enter', function () {
						Lampa.Settings.create('add_interface_plugin');
						Lampa.Controller.enabled().controller.back = function(){
							Lampa.Settings.create('add_plugin');
						}
                            });
					}
		});  

        Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_management_plugin',
							name: 'Management'
						});
					}
		});
/* Управление */
		Lampa.SettingsApi.addParam({
					component: 'abrosstore',
					param: {
						name: 'add_management_plugin',
      		            type: 'static',
						default: true
                        	},
					field: {
                                name: icon_add_management_plugin
                        },
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_management_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});

        Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_online_plugin',
							name: 'Online'
						});
					}
		});
/* Онлайн */
		Lampa.SettingsApi.addParam({
					component: 'abrosstore',
					param: {
						name: 'add_online_plugin',
						type: 'static',
						default: true
                          		},
					field: {
						name: icon_add_online_plugin
                          		},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_online_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
	
		Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_tv_plugin',
							name: 'TV'
						});
					}
		});
/* Телеканалы */
		Lampa.SettingsApi.addParam({
					component: 'abrosstore',
					param: {
						name: 'add_tv_plugin',
						type: 'static',
						default: true
					},
					field: {
						name: icon_add_tv_plugin
					},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_tv_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});

		Lampa.Settings.listener.follow('open', function (e) {
					if (e.name == 'main') {
						Lampa.SettingsApi.addComponent({
							component: 'add_radio_plugin',
							name: 'Radio'
						});
					}
		});
/* Радио */
		Lampa.SettingsApi.addParam({
					component: 'abrosstore',
					param: {
						name: 'add_radio_plugin',
						type: 'static',
					default: true
                         		},
					field: {
						name: icon_add_radio_plugin
                         		},
					onRender: function(item) {
						item.on('hover:enter', function () {
							Lampa.Settings.create('add_radio_plugin');
							Lampa.Controller.enabled().controller.back = function(){
								Lampa.Settings.create('add_plugin');
							}
						});
					}
		});
/* Реклама */
Lampa.SettingsApi.addParam({
					component: 'abrosstore',
					param: {
						name: 'add_ads',
      		                        	type: 'title'
                        		},
					field: {
                                name: ads
                        },
              onRender: function (item) {
                setTimeout(function() {
           //   $('.settings-param-title').insertBefore($('.settings-param').first())
                $('.settings-param-title').insertAfter($('.settings-param').last())
                },0);
                }
	
         });	
} // /* addonStart */
if (!!window.appready) addonStart();
else Lampa.Listener.follow('app', function(e){if (e.type === 'ready') addonStart()});	
	
})();

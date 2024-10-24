/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_C2gyC1Yf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$AuthLayout } from '../chunks/AuthLayout_B9lOOyQH.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const email = Astro2.cookies.get("email")?.value ?? "";
  const remeberMe = !!email;
  return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="z-10 flex self-center justify-center"> <div class="p-12 mx-auto bg-white rounded-2xl w-100"> <div class="mb-4"> <h3 class="text-2xl font-semibold text-gray-800">Register</h3> <p class="text-gray-500">Please sign in to your account.</p> </div> <form class="space-y-5"> <div class="space-y-2"> <label class="text-sm font-medium tracking-wide text-gray-700">Name</label> <input class="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="text" name="name" placeholder="Username"> </div> <div class="space-y-2"> <label class="text-sm font-medium tracking-wide text-gray-700">Email</label> <input class="w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="email" name="email"${addAttribute(email, "value")} placeholder="mail@gmail.com"> </div> <div class="space-y-2"> <label class="mb-5 text-sm font-medium tracking-wide text-gray-700">
Password
</label> <input class="content-center w-full px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type="password" name="password" placeholder="Enter your password"> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <input id="remember_me" name="remember_me" type="checkbox"${addAttribute(remeberMe, "checked")} class="w-4 h-4 bg-blue-500 border-gray-300 rounded focus:ring-blue-400"> <label for="remember_me" class="block ml-2 text-sm text-gray-800">
Remember me
</label> </div> <div class="text-sm"> <a href="/login" class="text-green-400 hover:text-green-500">
already have an account?
</a> </div> </div> <div> <button type="submit" id="btn-submit" class="flex justify-center w-full p-3 font-semibold tracking-wide text-gray-100 transition duration-500 ease-in bg-green-400 rounded-full shadow-lg cursor-pointer disable:bg-gray-300 hover:bg-green-500">
Register
</button> </div> </form> <div class="pt-5 text-xs text-center text-gray-400"> <span>Copyright © 2024</span> </div> </div> </div> ` })} `;
}, "/home/xabru/projects/code/astro/app/05-auth/src/pages/register.astro", void 0);

const $$file = "/home/xabru/projects/code/astro/app/05-auth/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
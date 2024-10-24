/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_C2gyC1Yf.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from '../chunks/MainLayout_BigHi5lI.mjs';
import { f as firebase } from '../chunks/config_CgHeyGlF.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Protected = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Protected;
  const { user, isLoggedIn } = Astro2.locals;
  if (!isLoggedIn || !user) return Astro2.redirect("/login");
  const { name, email, avatar } = user;
  const firebaseUser = firebase.auth.currentUser;
  await firebaseUser?.reload();
  const { emailVerified } = firebaseUser;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row items-center justify-center w-full h-[600px] rounded-xl font-sans bg-gray-200"> <div class="mx-auto bg-white shadow-xl card w-96 hover:shadow rounded-xl"> ${avatar ? renderTemplate`<img class="w-32 mx-auto -mt-20 border-8 border-white rounded-full"${addAttribute(avatar, "src")}${addAttribute(`Avatar de ${name}`, "alt")}>` : renderTemplate`<div class="flex items-center justify-center w-32 h-32 mx-auto -mt-20 bg-gray-300 border-8 border-white rounded-full"> <span class="text-3xl font-extrabold text-white"> ${name.substring(0, 2)} </span> </div>`} <div class="mt-2 text-3xl font-medium text-center">${name}</div> <div class="mt-2 text-sm font-light text-center">${email}</div> <div class="text-lg font-normal text-center"> ${emailVerified ? "Email Verified" : "No Email Verified"} </div> <div class="px-6 mt-2 text-sm font-light text-center"> <p>Front end Developer, avid reader. Love to take a long walk, swim</p> </div> <hr class="mt-8"> <div class="flex p-4"> <div class="w-1/2 text-center"> <span class="font-bold">1.8 k</span> Followers
</div> <div class="w-0 border border-gray-300"></div> <div class="w-1/2 text-center"> <span class="font-bold">2.0 k</span> Following
</div> </div> </div> </div> ` })}`;
}, "/home/xabru/projects/code/astro/app/05-auth/src/pages/protected.astro", void 0);

const $$file = "/home/xabru/projects/code/astro/app/05-auth/src/pages/protected.astro";
const $$url = "/protected";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Protected,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

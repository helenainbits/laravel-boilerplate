import{d as m,T as f,i as p,c as g,w as s,o as a,a as o,u as e,Z as h,g as y,h as _,b as i,e as n,n as v,k as b,f as k}from"./app-6NtTRB5k.js";import{_ as x}from"./GuestLayout.vue_vue_type_script_setup_true_lang-gA4ANYqG.js";import{P as w}from"./PrimaryButton-slYQRU7e.js";import"./ApplicationLogo-Pmx1RLm9.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const V=i("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),B={key:0,class:"mb-4 font-medium text-sm text-green-600"},C={class:"mt-4 flex items-center justify-between"},S=m({__name:"VerifyEmail",props:{status:{}},setup(r){const c=r,t=f({}),d=()=>{t.post(route("verification.send"))},l=p(()=>c.status==="verification-link-sent");return(u,E)=>(a(),g(x,null,{default:s(()=>[o(e(h),{title:"Email Verification"}),V,l.value?(a(),y("div",B," A new verification link has been sent to the email address you provided during registration. ")):_("",!0),i("form",{onSubmit:k(d,["prevent"])},[i("div",C,[o(w,{class:v({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o(e(b),{href:u.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],32)]),_:1}))}});export{S as default};

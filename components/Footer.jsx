import React from "react";

const user = {
  name: "Tom Cook",
  href: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  imageUrl:
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/daaa9c57-4d5e-4fc8-838b-d33f1d5485f3/d5dssok-7d6e89d2-4a6d-4591-8801-a76e0e5dacf2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RhYWE5YzU3LTRkNWUtNGZjOC04MzhiLWQzM2YxZDU0ODVmM1wvZDVkc3Nvay03ZDZlODlkMi00YTZkLTQ1OTEtODgwMS1hNzZlMGU1ZGFjZjIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HzAA0oPlvdu2NyEUSpJ4cJrjgQbqXEXqNZzTuWpBdyA",
};
const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/FxIxFxA/",
    link: "https://img.icons8.com/fluency/50/000000/facebook-new.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/l__fifa__l",
    link: "https://img.icons8.com/fluency/48/000000/twitter.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/l_fifa_l/",
    link: "https://img.icons8.com/fluency/48/000000/instagram-new.png",
  },
  {
    name: "LinkedIn",
    href: "#",
    link: "https://img.icons8.com/fluency/48/000000/linkedin.png",
  },
  {
    name: "Mail",
    href: "mailto:starktestic@gmail.com",
    link: "https://img.icons8.com/fluency/48/000000/email-sign.png",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 sm:flex-row">
      <a className="items-center flex justify-between space-x-3 text-white  text-lg font-medium">
        <img className="h-12 w-12 rounded-full" src={user.imageUrl} alt="" />
        <h1 className="text-gray-800">Vivek Kumar</h1>
      </a>

      <p className="py-2 text-gray-800 dark:text-white sm:py-0">
        All rights reserved
      </p>

      <div className="flex -mx-2">
        {socialLinks.map((item) => (
          <a as="a" href={item.href} className="p-1 items-center">
            <button
              key={item.name}
              as="a"
              className="dark:bg-gray-800 rounded-full
							text-gray-400
							hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2
							focus:ring-offset-gray-800 focus:ring-white"
            >
              <img className="h-8 w-8" aria-hidden="true" src={item.link} />
            </button>
          </a>
        ))}
      </div>
    </footer>
  );
}

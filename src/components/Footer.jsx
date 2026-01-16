import React from "react";
import "../index.css";
import Whats from "./WhatsAppFAB";

const navigation = {
  main: [{ name: "Contacto", href: "/" }],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/manuelcalso",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <section className="custom-gradient mb-5">
      <div className="video-background">
        <video autoPlay muted loop>
          <source
            src={"https://storage.googleapis.com/portafilo/chichen.mp4"}
            type="video/mp4"
          />
        </video>
        <div />
      </div>
      <div className="px-auto flex flex-col justify-center items-center">
        <div className="my-6 flex justify-center">
          <Whats />
        </div>
        <nav
          className=" bg-white slide-in-top rounded-t-md  flex justify-center  shadow-xl"
          aria-label="Footerr"
        >
          {navigation.main.map((item, i) => (
            <>
              <div
                key={item.id + i}
                className="pb-4 flex justify-center itmes-center "
              >
                <a
                  href={item.href}
                  className="text-black text-xl kalnia-medium mx-2 my-2"
                >
                  {item.name}
                </a>
                <div className=" flex justify-center items-center text-black  font-bold ">
                  <div className=" flex-col justify-evenly px-5 py-2 shadow-xl border border-gray-400 rounded-md">
                    <p className="kalnia-medium text-2xl">
                      <span className="italic kalnia-light">Correo:</span>{" "}
                      juancallerossol
                      <br />
                      @gmail.com
                    </p>
                    <br />
                    <p className="kalnia-medium text-2xl ">
                      <span className="italic kalnia-light ">
                        Telefono:+52{" "}
                      </span>{" "}
                      5544475622
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </nav>
        <div className="mt-0 flex items-center rounded-md bg-gray-300 slide-in-top shadow-lg">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black hover:text-green-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-auto w-1/4 hover:text-green-500"
                aria-hidden="true"
              />
            </a>
          ))}
          <div>
            <a href="https://www.linkedin.com/in/juan-manuel-calleros-solache-790133254/">
              <svg
                height="84"
                viewBox="0 0 1240 1240"
                width="84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  transform="translate(290 290)"
                >
                  <path
                    d="m607.218868 0h-550.8293468c-30.0858726 0-56.3895212 21.6618911-56.3895212 51.4040115v552.0343835c0 29.914041 26.3036486 56.561605 56.3895212 56.561605h550.6574278c30.257792 0 52.952099-26.819484 52.952099-56.561605v-552.0343835c.170956-29.7421204-22.694307-51.4040115-52.78018-51.4040115z"
                    fill-rule="nonzero"
                    stroke="#000000"
                    stroke-width="50"
                  />
                  <g fill="#000000">
                    <path d="m456.386905 550v-160.82c0-38.528-13.761905-64.844-47.994643-64.844-26.147619 0-41.629762 17.716-48.510714 34.916-2.580358 6.192-3.268453 14.62-3.268453 23.22v167.528h-94.613095v-294.12h94.613095v40.936c13.761905-19.608 35.264881-47.816 85.32381-47.816 62.100595 0 109.063095 40.936 109.063095 129.172v171.828z" />
                    <path d="m204 550h-94v-294h94z" />
                    <path d="m160.243655 211h-.683587c-30.077834 0-49.560068-22.425424-49.560068-50.5 0-28.588136 19.994924-50.5 50.756345-50.5s49.560068 21.740678 50.243655 50.5c0 28.074576-19.482234 50.5-50.756345 50.5z" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <p className="m-2 text-center text-xs leading-5 text-black hover:text-green-500 italic">
          &copy; 2023 Juan Calleros, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}

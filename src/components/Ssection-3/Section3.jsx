import React from "react";
import "./Section3.css";
export default function Section3() {
  return (
    <>
      <section className="w-full h-[100vh] flex relative">
        <div className="w-1/2 s3-banner h-[100%]"></div>
        <div className=" w-1/2 h-[70%] bg-[#00000080] absolute top-[10%] left-[40%] ">
          <div className="p-[40px]">
            {" "}
            <div className="s3-title">
              <span>Discovet</span>
              <h2>Out Story</h2>
            </div>
            <div>
              <p className="s3-title1">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didnt take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

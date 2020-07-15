import React from "react";

const About = () => {
  return (
    <section class="about bg-light text-primary py-6 text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4 p-3">
            <i class="fas fa-truck fa-3x"></i>
            <hr class="mt-4" />
            <h2 class="mt-3">Blazing fast delivery</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias in quo perferendis rem eaque magni!
            </p>
          </div>
          <div class="col-md-4 p-3">
            <i class="fas fa-globe-americas fa-3x"></i>
            <hr class="mt-4" />
            <h2 class="mt-3">Global Aviliability</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              adipisci? Blanditiis expedita modi delectus sequi!
            </p>
          </div>
          <div class="col-md-4 p-3">
            <i class="fas fa-dollar-sign fa-3x"></i>
            <hr class="mt-4" />
            <h2 class="mt-3">Competitive Pricing</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              vel pariatur modi aspernatur in nulla?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

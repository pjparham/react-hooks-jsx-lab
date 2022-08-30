import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p> Integer convallis risus ex, sit amet sagittis diam pretium nec. Aenean facilisis ut urna vitae molestie. Etiam ut ornare nunc. Morbi et ex in felis condimentum condimentum. Sed magna enim, volutpat ut lacus sit amet, pretium lacinia mi. In scelerisque diam nec interdum tincidunt. Praesent et est et sem malesuada gravida. Suspendisse congue metus eu nisl lobortis dictum. Aenean dictum lacinia erat ac tincidunt. Nunc varius, est at lacinia semper, velit arcu convallis arcu, id ultrices sem erat at magna. Nunc in orci volutpat, porta quam congue, varius risus. Nulla placerat et magna sit amet consectetur. Suspendisse arcu leo, scelerisque a consectetur vel, vehicula nec tortor. Aenean tincidunt pulvinar semper. Proin ut eros eu tellus tempus feugiat.
    </p>
    <img src={image} alt="I made this"></img>
  </div>
  );
}

export default About;

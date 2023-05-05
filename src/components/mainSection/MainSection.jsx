import "./mainSection.scss";
import Media from "react-media";

function MainSecion() {
  return (
    <div className="mainSection">
      <div className="mainSection-img-container">
        <Media
          queries={{
            large: "(max-width:1240px",
          }}
        >
          {(matches) =>
            matches.large ? (
              <img
                src={
                  "https://images.unsplash.com/photo-1605549188315-8aa899c3d35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                }
                className="mainSection-img"
                alt="Man wearing VR"
              />
            ) : (
              <img
                src={
                  "https://images.unsplash.com/photo-1605549188315-8aa899c3d35f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvdmlkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                }
                className="mainSection-img"
                alt="Man wearing VR"
              />
            )
          }
        </Media>
        <div className="mainSection-text">
          <div className="h2">
            {" "}
            COVID-19, are you going to be naughty or nice to me?
          </div>
          <p>
            Throughout history, pandemics have led to an expansion of the power
            of the state: at times when people fear death, they go along with
            measures that they believe, rightly or wrongly, will save them—even
            if that means a loss of freedom.
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default MainSecion;

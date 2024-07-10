import "./ProjectStyles.css";

function ProjectData(props) {
  return (
    <div className="p-card">
      {props.image ? (
        <div className="p-image">
          <img src={props.image} alt="project" />
        </div>
      ) : (
        <>
          <div className="p-image-no-display"></div>
        </>
      )}
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="buttons">
        {props.btn1Link ? (
          <a href={props.btn1Link} target="_blank">
            {props.btn1Text}
          </a>
        ) : (
          <></>
        )}

        <a href={props.btn2Link} target="_blank">
          {props.btn2Text}
        </a>
      </div>
    </div>
  );
}

export default ProjectData;




export default function Card (props){
    return (
        <div className="card w-50 m-auto">
        <img src={props.imgUrl} className="card-img" width="180" height="280"/>
        <div className="card-body" width="286px">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.paragraph}</p>
            <a href={props.href} className="btn btn-primary">{props.linkText}</a>
        </div>
  
        </div>
    )
  }
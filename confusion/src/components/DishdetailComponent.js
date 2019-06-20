import React,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
    }
    renderDish(dish){
        if(dish!=null)
        {
            return(
            <div className="col-12 col-md-5 m-1"> 
            <Card>
                 <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                 <CardBody>
                 <CardTitle>{this.props.dish.name}</CardTitle>
                 <CardText>{this.props.dish.description}</CardText>
                 </CardBody>
            </Card>
            </div>
            );
        }
        else{
            return(
            <div></div>
            );
        }

    }
    renderComment(comment)
    {
        if(comment!=null)
        {
           const cmnts=comment.map(comment=>{
               return(
                   <li key={comment.id}>
                       <p>{comment.comment}</p>
                       <p>--{comment.author},&nbsp;
                       {new Intl.DateTimeFormat('en-US',{
                           year:'numeric',
                           month:'short',
                           day:'2-digit'
                       }).format(new Date(Date.parse(comment.date)))}
                       </p>
                   </li>
               );
           }) ;
           return(
               <div className="col-12 col-md-5 m-1">
                   <h4>Comments</h4>
                   <ul className="list-unstyled">
                       {cmnts}
                   </ul>
               </div>
           );
        }
        else{
            return(
                <div></div>
            );
        }
    }
render(){
    const dish=this.props.dish
    if(dish!=null)
    {
        const dishItem=this.renderDish(dish)
        const commentItem=this.renderComment(dish.comments)
        return(
            <div class="container">
            <div class="row">
                {dishItem}
                {commentItem}
            </div>
            </div>
        );
    }
    else{
return(
    <div></div>
);
    }
      
}

}
export default DishDetail;
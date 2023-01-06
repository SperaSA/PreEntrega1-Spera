import "./itemsListContainer.css";

function ItemsListContainer (props){
    console.log(props);

    return (
       <p style={ { textShadow: props.shadow, fontSize: props.size,  backgroundColor: props.color } }className="greeting">
        {props.text} 
        </p>
        
    );
  }

  export default ItemsListContainer;

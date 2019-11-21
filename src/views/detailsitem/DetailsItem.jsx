import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
//import getProductById from '../../services/Items';
//import Items from '../../services/Items';
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import getProductByCategory from '../../redux/actions/getProductByCategory';
import setRelatedItems from '../../redux/actions/setRelatedItems';
import { purchase } from '../../redux/actions/AuthUser';
import setProductById from '../../redux/actions/setProductById';
import dimecontrol from '../../redux/actions/dimecontrol';

//import Order from './views/Order/Order';


class DetailsItem extends React.Component {

    constructor(props) {
        super(props)
        this.id = this.props.match.params.id;
        //console.log("Recibido el id " +this.props.match.params.id);

        this.state = {
            item: null,
            //control: 0,
            //category: null,
        };
    }

    componentWillMount() {
        /* //console.log("Cuando se monta"+ this.id);
        const Service = new Items();
        Service.getProductById(this.id)
            .then(result =>
                this.setState({ item: result })); */

        /*  this.setState({ item: result }) &&
         this.setState({category:result.data.category})); */
        //await this.props.setProductById(this.id).then(this.setState({ control: 1 }) )
     
        //this.props.setProductById(this.id)

        //this.props.setRelatedItems("zapatillas", this.id);
        

    }
    componentDidMount() {
        this.props.setProductById(this.id).then(this.props.dimecontrol(1))
    }
    
    componentWillUnmount () {
       // this.props.dimecontrol(0)
    }


    render() {
        console.log(this.props.control)
        if (this.props.oneproduct && this.props.control===1) {
            this.props.setRelatedItems(this.props.oneproduct.category,this.id)
            this.props.dimecontrol(0)
           
        }
        

        /* if (!this.state.item) {
            return null;
        }
        const item = this.state.item.data; */



        //*** FILTRO DE TODOS MENOS 1 *****

        /* let result = this.props.products.filter((producto)=> producto.id!==item.id)
        console.log("resultado nuevo filtro "+this.id+" "+ JSON.stringify(result));
      */

        return (
            
            <div style={{ padding: 10 }}>
                {this.props.oneproduct && 
                    <div key={this.props.oneproduct.id}>
                        <div
                            style={{
                                marginBottom: 20,
                                marginTop: 10,
                                fontSize: 24
                            }}
                        >
                            {this.props.oneproduct.name}
                        </div>
                        <div style={{ display: "flex" }}>
                            <img src={this.props.oneproduct.image} alt="" width={250} height={250} style={{ borderRadius: "5%", objectFit: "cover" }} />
                            <div
                                style={{
                                    flex: 1,
                                    marginLeft: 20,
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 18, marginTop: 10
                                    }}>
                                    Precio: {this.props.oneproduct.price} €
                                </div>
                                {this.props.oneproduct.popular === 1 && (
                                    <span style={{ marginTop: 5, fontSize: 14, color: "#228B22" }}>
                                        (Producto más vendido)
                                    </span>
                                )}
                                <TextField
                                    type="number"
                                    value={1}
                                    style={{ marginTop: 20, marginBottom: 20, width: 50 }}
                                    label="Cantidad"
                                />
                                <Button
                                    style={{ width: 200, marginTop: 5 }}
                                    color="primary"
                                    variant="outlined"
                                    onClick={async () => {
                                        if (this.props.token === "") {
                                            this.props.history.push("/login/")
                                        } else {
                                            await this.props.purchase(this.props.id, this.id)
                                            this.props.history.push("/order/");
                                        }
                                    }

                                    }
                                >
                                    Comprar <AddShoppingCartIcon style={{ marginLeft: 5 }} />
                                </Button>

                            </div>
                        </div>
                        <div
                            style={{
                                marginTop: 30,
                                marginBottom: 20,
                                fontSize: 24.
                            }}
                        >Descripción del producto:
                        </div>
                        <div
                            style={{
                                marginLeft: 5,
                                maxHeight: 200,
                                fontSize: 13,
                                overflow: "auto",
                                textAlign: "justify"
                            }}
                        >
                            {this.props.oneproduct.description ? this.props.oneproduct.description : <div style={{ color: "gray" }}>No disponible</div>}
                        </div> 
                    </div>
                } 
                    
                
                {/* Relateditems */}
                <div
                    style={{
                        marginTop: 30,
                        marginBottom: 10,
                        fontSize: 24
                    }}

                >
                    Productos similares:
                </div>

                <div>
                    {this.props.relateditems && this.props.relateditems.slice(0, 3).map((item, key) => (

                        <Card key={item.name}
                            style={{ width: 200, height: 270, margin: 10, display: "inline-block" }}
                        >
                            <CardActionArea
                                onClick={() => {
                                    this.props.history.push("/details/" + item.id);
                                }}
                            >
                                <CardMedia
                                    style={{ height: 140 }}
                                    image={item.image}
                                />
                                <CardContent style={{ height: 50 }}>
                                    <div
                                        style={{
                                            marginLeft: 5,
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {item.name}
                                    </div>
                                    <div style={{ margin: 5 }}>Precio: {item.price} €</div>
                                    <div style={{ color: "#1a9349", fontWeight: "bold", margin: 5 }}>
                                        {item.popular === 1 && "Más vendidos"}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                style={{ display: "flex", alignItems: "center", height: 45 }}
                            >
                                <Button
                                    size="small"
                                    style={{ marginRight: 60 }}
                                    onClick={() => {
                                        this.props.history.push("/details/" + item.id);
                                    }}
                                >DETALLES
                            </Button>
                                <Tooltip title="Descripción Producto">
                                    <IconButton
                                        size="small"
                                        onClick={e => {
                                            this.props.history.push("/details/" + item.id);
                                        }}
                                        color="primary"
                                    >
                                        <ImageSearchIcon size="small" />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    ))}

                </div>

            </div>
        );
    }
}





const mapStateToProps = state => ({
    products: state.products.products,
    token: state.token.token,
    id: state.id.id,
    purchase: state.purchase.purchase,
    relateditems: state.relateditems.relateditems,
    oneproduct:state.oneproduct.oneproduct,
    control:state.control.control,

})


const mapDispatchToProps = dispatch => ({
    setRelatedItems: (category, id) => dispatch(setRelatedItems(category, id)),
    purchase: (userid, productid) => dispatch(purchase(userid, productid)),
    getProductByCategory: (category) => dispatch(getProductByCategory(category)),
    //getProductById: (id) => dispatch(getProductById(id)),
    setProductById: (id) => dispatch(setProductById(id)),
    dimecontrol:(aux) => dispatch(dimecontrol(aux))
})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsItem));
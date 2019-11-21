import React from 'react';
import { connect } from 'react-redux';

import { setProductByCategory, setProductByName, setProductByPopular } from '../../redux/actions/ProductsOperations';

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import SportsHandball from '@material-ui/icons/SportsHandball';
import Group from '@material-ui/icons/Group';
import SportsSoccer from '@material-ui/icons/SportsSoccer';
import SportsTennis from '@material-ui/icons/SportsTennis';
import AppsIcon from '@material-ui/icons/Apps';
import Tooltip from "@material-ui/core/Tooltip";
import AirlineSeatLegroomNormalIcon from '@material-ui/icons/AirlineSeatLegroomNormal';
import Grade from '@material-ui/icons/Grade';

import './Allitems.css';

class AllItems extends React.Component {

    componentDidMount() {
        //this.props.setProductByPopular()
    }

    render() {
        return (
            <div className='AllItems'>
                <div style={{ padding: 10, display: "flex", alignItems: "center", backgroundColor: "#FAF5F0", justifyContent: "space-around" }}>
                    <div style={{ fontSize: 24, color: "Black", marginTop: 5 }}>
                        Categorias:
                            <IconButton

                            onClick={() => {
                                this.props.setProductByName("");
                            }}
                        > <AppsIcon size="small" />Todos
                            </IconButton>
                        <IconButton
                            onClick={() => {
                                this.props.setProductByPopular();
                            }}
                        > <Grade size="small" />Favoritos
                            </IconButton>
                        <IconButton

                            onClick={() => {
                                this.props.setProductByCategory("zapatillas");
                            }}
                        >  <AirlineSeatLegroomNormalIcon size="small" />Zapatillas
                            </IconButton>
                        <IconButton
                            onClick={() => {
                                this.props.setProductByCategory("camisetas");
                            }}
                        >  <Group size="small" />Camisetas
                            </IconButton>
                        <IconButton
                            onClick={() => {
                                this.props.setProductByCategory("chandals");
                            }}
                        >  <SportsHandball size="small" />Chandals
                            </IconButton>
                        <IconButton
                            onClick={() => {
                                this.props.setProductByCategory("balones");
                            }}
                        >  <SportsSoccer size="small" />Balones
                            </IconButton>
                        <IconButton
                            onClick={() => {
                                this.props.setProductByCategory("raquetas");
                            }}
                        >  <SportsTennis size="small" />Raquetas
                            </IconButton>

                    </div>
                </div>

                {/*    {this.props.products && this.props.products.map((item, key) => (
                <div key={item.name} style={{justifyContent: "space-around", alignItems: "center"}}>
                </div> Encapsular todo con div */}

                {this.props.products && this.props.products.map((item, key) => (

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

        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products

})

const mapDispatchToProps = dispatch => ({
    setProductByPopular: () => dispatch(setProductByPopular()),
    setProductByCategory: (category) => dispatch(setProductByCategory(category)),
    setProductByName: (name) => dispatch(setProductByName(name))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllItems);